import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        <div>
            {
                blogs.map(blog => console.log(blog))
            }
        </div>
    );
};

export default Blogs;