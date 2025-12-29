import React from 'react'
import { useEffect,useState } from 'react'
const Post = () => {

    const[post,setPosts]=useState([]);
    const[loading,setLoading]=useState(true);


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            return response.json();

        })
        .then((data)=>{
            console.log("API DATA:", data)
            setPosts(data);
            setLoading(false);
        });
    },[])
  return (
    <main>
        <h1>Posts</h1>
        <p>Total Posts: {post.length}</p>
        {loading && <p>Loading...</p>}
        <ul>
            {post.map((posts)=>(
                <li key={posts.id}>
                    <h3>{posts.title}</h3>
                    <p>{posts.body}</p>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Post