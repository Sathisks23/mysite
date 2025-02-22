import { NextResponse } from 'next/server';
import { Connect } from '@/lib/Connection';
import Blog from '@/models/Blog';

export async function GET(req, { params }) {
  await Connect();
  const { slug } = params;

  try {
    const blog = await Blog.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching blog' }, { status: 500 });
  }
}
