import Back from "../components/Back";
import Blogs from "../components/Blogs";
import {useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";
import { BlogCard } from "../components/BlogCard";


export default function BlogPage() {

  const baseUrl="https://codehelp-apis.vercel.app/api/get-blog";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlog] = useState([]);
  const location = useLocation();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);


  async function fetchRelatedBlogs() {
    setLoading(true);

    let url = `${baseUrl}?blogId=${blogId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      // if(!data.post || data.post.length===0)
      //   throw new Error("NO DATA FOUND");

        setBlog(data.blog);
        setRelatedBlog(data.relatedBlogs);
      
    } 
    catch (error) {
      console.error("Blog fetch fail");
      setBlog(null);
      setRelatedBlog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="mt-24">
      {loading ? (
        <p>loading...</p>
      ) : 
      blog? (
        <div className="w-11/12 max-w-2xl mx-auto">
          <Back />
          <BlogCard post={blog}/>
          <h2 className="mx-5 m-7 text-[1.75rem] font-bold">Related Blogs</h2>
          {
            relatedBlogs.map((post) => (
            <BlogCard key={post.id} post={post}/>
           ))
          }
        </div>
      ):
      (
        <div className="w-full h-ful flex justify-center items-center">No Blogs Found</div>
      )}
    </div>
  );
}
