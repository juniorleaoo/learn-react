import PostModel from "../model/PostModel";

function Post({post}: {post: PostModel}) {
  return (
    <article className='post-card' key={post.id}>
      <h1>{post.title}</h1>
      <img className='post-image' src={post.image} alt={post.title} />
      <p>{post.subtitle}</p>
      <p>{post.category}</p>
    </article>
  )
}

export default Post;