import { useState , useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPanding, setIsPanding] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('mario');
  const handleDelete = (id) => {
  const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() =>{
    setTimeout(() => {
      fetch('http://localhost:8000/blogss')
        .then(res =>
        {
          if (!res.ok){
            throw Error('could not fetch the data for that ressource');
          }
          return res.json();
        }
        )
        .then(data => {

        //console.log(data);
        setBlogs(data);
        setIsPanding(false);
        })
      .
      catch((err)=>{
        setIsPanding(false);
       setError(err.message);

      })
      
    }, 1000);
  },[])

  return (
    <div className="home">
      {error && <div>{error }</div>}
      {isPanding && <div>loading ...</div>}
      { blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> }
 
     
    </div>
  );
}
export default Home;
