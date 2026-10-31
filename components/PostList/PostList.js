import Post from "../Post/Post";

const PostList = ({ posts }) =>
  posts.map((post) => (
    <Post
      key={post.id}
      cover={post.cover}
      excerpt={post.excerpt}
      title={post.title}
      date={post.date}
      url={post.url}
    />
  ));

export default PostList;
