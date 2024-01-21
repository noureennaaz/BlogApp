import React from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Back from "../components/Back";
import Pagination from "../components/Pagination";

const CategoryPage=()=>{
    
    const location=useLocation();
    const category=location.pathname.split('/').at(-1).replaceAll(" ", "-");
    return(
        <div className="mt-28 w-11/12 max-w-2xl mx-auto">
            <div className="flex items-center">
                <Back/>
                <h2 className="mx-5 m-7 text-xl font-bold">Blogs on <span>{category}</span></h2>
            </div>
            
            <Blogs/>
            <Pagination/>
        </div>

    )
}
export default CategoryPage;