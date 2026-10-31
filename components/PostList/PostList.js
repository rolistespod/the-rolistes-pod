import Post from "../Post/Post";

const PostList = ({ posts }) =>
  posts.map((post) => (
    <Post
      key={post.id}
      cover={post.cover}
      excerpt={post.excerpt}
      author={post["dc:creator"][0]}
      title={post["title"]}
      article={post["content:encoded"][0]}
      date={post["pubDate"][0]}
      postName={post["wp:post_name"][0]}
      url={post.url}
    />
  ));

export default PostList;
