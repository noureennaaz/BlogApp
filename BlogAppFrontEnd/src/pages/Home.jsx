import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
export default function Home()
{
    return (
        <div className="mt-24">
            <Blogs/>
            <Pagination/>
        </div>
    )
}