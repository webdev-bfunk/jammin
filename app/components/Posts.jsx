import { getPosts } from "@/sanity/lib/client";
import PostCard from "./PostCard";
import Card from "./Card";


const Posts = async () => {
  try {
    const posts = await getPosts();
    console.log(posts);

    // Check if posts is not null before mapping
    if (!posts) {
      // Handle the case when posts is null
      return <div>No posts available</div>;
    }

    return (
      <div id="posts" className="">
        <div className="w-full h-[5px] bg-gradient-to-r from-[#181818] via-fuchsia-500 to-[#181818]" />
        <h1 className="text-5xl text-center md:text-6xl text-transparent bg-clip-text bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500 font-extrabold tracking-tighter">
          Latest news
        </h1>
  
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post) => (
            <li key={post._id} className="mt-2 list-none">
              <Card postData={post} />
            </li>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Handle the error or return a message to indicate the error state
    return <div>Error fetching posts</div>;
  }
};

export default Posts;
