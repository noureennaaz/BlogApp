import React from "react";
import { useLocation} from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Back from "../components/Back";

const TagPage=()=>{
    
    const location=useLocation();
    const tag=location.pathname.split('/').at(-1).replaceAll("-", " ");
    return(
        <div className="mt-28 w-11/12 max-w-2xl mx-auto">
            <div className="flex items-center">
                <Back/>
                <h2 className="mx-5 m-7 text-xl font-bold">Blogs Tagged <span>`#{tag}`</span></h2>
            </div>
            
            <Blogs/>
            <Pagination/>
        </div>

    )
}
export default TagPage;