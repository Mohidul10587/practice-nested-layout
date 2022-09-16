import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Post2 = ({children}) => {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState('')


  useEffect(() => {
    const getCategories = async () => {
      try {
        const res1 = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data1 = await res1.json();
        setPosts(data1)
        
      } catch (err) {
        console.log(err)
      }
    };
    getCategories();
  }, [id]);

  return (

    <div className='flex justify-between px-10 py-4'>

      <div className='w-3/12 border border-emerald-500 overflow-y-scroll pl-3 h-[700px]'>
        {posts.slice(0, 20).map(post => <Link href={`/${post.id}`} key={post.id}><p onClick={() => setId(post.id)} className='my-2 cursor-pointer hover:bg-blue-500 p-2 hover:text-white' >{post.title.slice(0, 20)}</p></Link>)}
      </div>
      
     <div className='w-8/12 mx-4'> {children?children:<p>What are you doing here ?</p>}</div>

    </div>
  ) 
}




export default Post2