import { useNavigate } from "react-router-dom"

export default function Back(){
    const navigation=useNavigate();
    return(
        <button  className="p-2 mx-5 border-2 rounded-md" onClick={()=>navigation(-1)} >Back</button>
    )
}