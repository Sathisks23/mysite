import mongoose from 'mongoose';
import slugify from 'slugify';

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, unique: true, lowercase: true },
    metaDescription: { type: String, trim: true }, // SEO optimization
    keywords: [{ type: String }], // Helps with ranking
    content: { type: String, required: true },
    category: { type: String, required: true },
    tags: [{ type: String }], // Helps with filtering
    coverImage: { type: String }, // For social sharing & SEO
    publishedAt: { type: Date, default: Date.now },
    views: { type: Number, default: 0 }, // Tracks popularity
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users who liked the post
    shares: { type: Number, default: 0 }, // Number of times shared
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);


BlogSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Blog = mongoose.models.Blog|| mongoose.model('Blog', BlogSchema);
export default Blog;
