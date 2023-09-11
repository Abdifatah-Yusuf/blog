import { useEffect, useState } from "react";
import Bloglist from "./bloglist.js";
import axios from "axios";

const Home = () => {
    const [blogs,setblog]=useState(null)

    useEffect(() =>{
        axios.get( 'http://localhost:4001/blogs')
        .then(res =>{setblog(res.data)})

        .catch(err => console.log(err))
    }, []);

    return(
        <div className="home">
            {blogs && <Bloglist blogs={blogs} title="All blogs"/>}
                     
                </div>
            );
            

        
   
} 
export default Home;