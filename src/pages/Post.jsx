import { useLocation } from "react-router-dom";
import { posts } from "../data";

const Post = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const post = posts.find((post) => post.id.toString() === pathId);  
//   we are using toString method here because pathId is a String while retrieving it from browser
  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
