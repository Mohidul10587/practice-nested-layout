import React, { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res1 = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data1 = await res1.json();
        setPosts(data1)
        const res2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data2 = await res2.json();
        setPost(data2)

      } catch (err) {
        console.log(err)
      }
    };
    getCategories();
  }, [id]);





  return (

    <div className='flex justify-between px-10 py-4'>

      <div className='3/12 border border-emerald-500 overflow-y-scroll pl-3 h-[700px]'>
        {posts.slice(0, 20).map(post => <p onClick={() => setId(post.id)} className='my-2 cursor-pointer hover:bg-blue-500 p-2 hover:text-white' key={post.id}>{post.title.slice(0, 20)}</p>)}
      </div>
      <div className='w-9/12 '>
        <h1 className='text-3xl'>Post body</h1>
        <p>{post.body? post.body:'What Post you are searching ?'}</p>
      </div>

    </div>
  )
}




export default Posts