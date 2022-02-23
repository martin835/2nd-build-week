import Post from "./Post";
import { useEffect } from "react";

const PostContainer = ({ posts, setPosts, fetchPost }) => {
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      {posts?.slice(0, 10).map((post) => (
        <Post data={post} key={post._id} />
      ))}
    </>
  );
};

export default PostContainer;
