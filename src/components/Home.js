import Bloglist from "./bloglist";
import useFetch from "./useFetch";


const Home = () => {
    const {data}=useFetch(' http://localhost:4001/blogs');
     return(
        <div className="home">
            {data && <Bloglist blogs={data} title="All blogs"/>}
                     
                </div>
            );
}       

        
   

export default Home;