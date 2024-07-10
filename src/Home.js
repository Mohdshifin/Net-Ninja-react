import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs]=useState([
        { title:'Brillent Times..', sub:'math', author:'Mario', id:1},
        { title:'Rich Dad Poor Dad..', sub:'cs', author:'Asiue Usman', id:2},
        { title:'Times of India', sub:'MCA', author:'Lukuman ali fukri', id:3}
    ]);

    const handleDelete = (id)=>{
      const newBlog = blogs.filter( blog => blog.id !== id);
      setBlogs(newBlog);
    }

    return (
        <div className="home" >
          <h2>My Blogs..</h2>
         <BlogList blog={blogs} handleDelete={handleDelete} />
        </div>
      );
}
 
export default Home;
