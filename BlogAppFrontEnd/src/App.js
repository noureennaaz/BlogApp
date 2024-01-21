import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import Category from "./pages/Category";
import BlogPage from "./pages/BlogPage";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchBlogPosts } = useContext(AppContext);
  const location= useLocation();


  useEffect(() => {
    // Fetch the inital Blogposts data
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    } 
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    } 
    
    else {
      fetchBlogPosts(Number(page));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  return (
    <div>
      <Header/>
      
      <Routes>
        <Route default path="/" element={<Home/>} />
        <Route path="/blog/:blogID" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<Category/>} />
      </Routes>

      
    </div>
  );
}
