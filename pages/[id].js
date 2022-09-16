import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Post2 from './postWithId'


const Id = () => {
    const router = useRouter()
    const id = router.query.id
    const [post, setPost] = useState({})
    useEffect(() => {
        const getCategories = async () => {
            try {

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
        <Post2>
            <p>{post.body}</p>
        </Post2>
    )
}

export default Id