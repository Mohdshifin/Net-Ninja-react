import { useState } from "react";

const Home = () => {

    const [blogs,setBlogs]=useState([
        { title:'Brillent Times..', sub:'math', author:'Mario', id:1},
        { title:'Rich Dad Poor Dad..', sub:'cs', author:'Asiue Usman', id:2},
        { title:'Times of India', sub:'MCA', author:'Lukuman ali fukri', id:3}
    ]);
    return (
        <div className="home" >
          {blogs.map((blog) =>(
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
          ))}
        </div>
      );
}
 
export default Home;
