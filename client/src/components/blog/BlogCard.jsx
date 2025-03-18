import defaultImage from "../../assets/blog-default.jpg";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <img
        src={post.image}
        alt={post.title}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = defaultImage;
        }}
      />
      <div className="blog-card-content">
        <h3>{post.title}</h3>
        <p className="blog-meta">
          {post.date} • {post.category}
        </p>
        <p>{post.excerpt}</p>
        <a href={`/blog/${post.id}`} className="read-more">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
