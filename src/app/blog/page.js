import Link from 'next/link';
import axios from 'axios';

async function fetchBlogs(page = 1) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const { data } = await axios.get(`${baseUrl}/api/blog?page=${page}&limit=5`, {
    next: { revalidate: 60 },
  });
  if (!data) throw new Error('Failed to fetch blogs');
  return data;
}

export const metadata = {
  title: "Latest Blogs | Sathish Kuamar ",
  description: "Read the latest blogs on Full Stack Development, MERN Stack, Python, SEO, and AI Robotics.Intresting fact and stories ,  ",
  keywords: "Full Stack Development, MERN Stack, Next.js, Blogging, AI Robotics, SEO, Freelancing",
  openGraph: {
    title: "Latest Blogs | Sathish Kuamr",
    description: "Stay updated with the latest insights on web development, SEO, and freelancing.Current Trends",
    type: "website",
    url:`${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  },
};



export default async function BlogsPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { blogs, totalPages } = await fetchBlogs(page);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blogs</h1>
      
      <div className="space-y-8">
        {blogs.map((blog) => (
          <div key={blog._id} className="relative border-b pb-6">
            <div className="relative">
              <img src={blog.coverImage} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
              <h2 className="absolute top-4 left-4 bg-white bg-opacity-75 px-3 py-1 rounded-lg text-lg font-semibold">
                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
              </h2>
            </div>
            <p className="mt-4 text-gray-700">{blog.metaDescription}</p>
            <small className="block mt-2 text-gray-500"> {new Date(blog.publishedAt).toDateString()}</small>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        {page > 1 && (
          <Link href={`/blogs?page=${page - 1}`} className="border px-4 py-2 rounded">
            ⬅️ Previous
          </Link>
        )}
        {page < totalPages && (
          <Link href={`/blogs?page=${page + 1}`} className="border px-4 py-2 rounded">
            Next ➡️
          </Link>
        )}
      </div>
    </div>
  );
}
