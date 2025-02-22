import axios from 'axios';
import Link from 'next/link';

async function fetchBlog(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const { data } = await axios.get(`${baseUrl}/api/blog/${slug}`, {
    next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
  });
  return data;
}

export async function generateMetadata({ params }) {
    const blog = await fetchBlog(params.slug);
  
    if (!blog) return notFound();
  
    return {
      title: `${blog.title} | Sathish Kumar`,
      description: blog.metaDescription || blog.content.substring(0, 150),
      keywords: blog.keywords.join(", "),
      openGraph: {
        title: blog.title,
        description: blog.metaDescription || blog.content.substring(0, 150),
        type: "article",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.slug}`,
        images: [{ url: blog.coverImage }],
      },
      other: {
        "application/ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.title,
          description: blog.metaDescription || blog.content.substring(0, 150),
          image: blog.coverImage,
          datePublished: blog.publishedAt,
          author: {
            "@type": "Person",
            name: "Sathish Kumar",
          },
        }),
      },
    };
  }
  

export default async function BlogPost({ params }) {
  const { slug } = params;
  const blog = await fetchBlog(slug);

  return (
    <div className="max-w-3xl mx-auto py-10">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>

      {/* Blog Image */}
      <div className="relative mb-6">
        <img src={blog.coverImage} alt={blog.title} className="w-full h-80 object-cover rounded-lg" />
      </div>

      {/* Blog Meta Info */}
      <div className="text-center text-gray-500 mb-4">
        <p>Published on {new Date(blog.publishedAt).toDateString()}</p>
      </div>

      {/* Blog Content */}
      <article className="text-lg text-gray-700 leading-relaxed">
        <p>{blog.content}</p>
      </article>

      {/* Back to Blogs */}
      <div className="text-center mt-8">
        <Link href="/blog" className="border px-4 py-2 rounded">
          ⬅ Back to Blogs
        </Link>
      </div>
    </div>
  );
}
