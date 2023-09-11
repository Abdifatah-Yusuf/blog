const Bloglist = ({blogs,title}) => {
    return (
        <div> 
            <h2>All blog</h2> 
       {blogs.map((blog)=>(
        <div className="preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>done by:{blog.author}</p>
        </div>
       ))}
        </div>
    );
}

export default Bloglist;