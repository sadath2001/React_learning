import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,NavLink,Route, Routes,useParams} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
const Home=()=>{
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
  .then(data=>data.json())
  .then(data=>setData(data))
  .catch(err=>console.log(err))
  },[])

  return(
   <div>
    {
      data.map((post)=>(
        <li key={post.id}>
        <NavLink to={`/post/${post.id}`}>{post.title}</NavLink>
        </li>
      ))
    }
   </div>
  )
}
const About=()=>{
  return(
    <h1>About</h1>
  )
}
const Profile=()=>{
  return(
    <h1>profile</h1>
  )
}

const User=()=>{
  const params=useParams();
  console.log(params)
  return(
    <h1>My name is: {params.userName}</h1>
  )
}
const Post=()=>{
  const params=useParams();
  const [post,setPost]=useState(null)

  useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  .then(data=>data.json())
  .then((post)=>setPost(post))
  },[]);

  if(post===null) return <p>loading...</p>

  return(
   <div>
     <h1>{post.title}</h1>
    <p>{post.body}</p>
   </div>
  )
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="account">
        <Route path="profile" element={<Profile/>}/>
      </Route>
      <Route path="/user/:userName" element={<User/>}/>
      <Route path="/post/:postId" element={<Post/>}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


