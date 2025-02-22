import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { NextResponse } from 'next/server';
import Blog from '@/models/Blog';
import { Connect } from '@/lib/Connection';

await Connect()


export async function POST(req) {
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
    });

    const upload = multer({ storage });

    try {
       
        const formData = await req.formData();
        const title = formData.get('title');
        const metaDescription = formData.get('metaDescription');
        const keywords = formData.get('keywords')?.split(',') || [];
       
        const content = formData.get('content');
        const category = formData.get('category');
        const tags = formData.get('tags')?.split(',') || [];
        const file = formData.get('coverImage');
    
        let coverImage = null;
        if (file) {
          const buffer = await file.arrayBuffer();
          const filePath = path.join(uploadDir, `${Date.now()}-${file.name}`);
          fs.writeFileSync(filePath, Buffer.from(buffer));
          coverImage = `/uploads/${path.basename(filePath)}`;
        }
    
        
        const blog = new Blog({ title, metaDescription, keywords, content, category, tags, coverImage });
        await blog.save();
    
        return NextResponse.json({ message: 'Blog created successfully', blog }, { status: 201 });
      } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

}

export async function GET(req){
 try {
  const {searchParams} = new URL(req.url)
  const page = parseInt(searchParams.get('page')) || 1
  const limit  = parseInt(searchParams.get('limit'))||5
  const skip = (page-1)*limit
  const blogs =await Blog.find().sort({publishedAt:-1}).skip(skip).limit(limit)
  const totalBlogs = await Blog.countDocuments()
  return NextResponse.json({
    blogs,
    totalPages:Math.ceil(totalBlogs/limit),
    currentPage:page
  })
 } catch (error) {
  return NextResponse.json({ error: error.message }, { status: 500 });
 }
}