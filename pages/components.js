import React, { useState } from 'react'
import First from '../components/comp/First'
import Second from '../components/comp/Second'
import Third from "../components/comp/Third"
import Fourth from "../components/comp/Fourth"


const Components = () => {

    const [component, setComponent] = useState()

    return (
        <div className='flex justify-between px-10 py-4'>
            <div className='w-3/12'>
                <p onClick={() => setComponent(<First />)} className='p-3 cursor-pointer hover:bg-slate-600 hover:text-white'>First</p>
                <p onClick={() => setComponent(<Second />)} className='p-3 cursor-pointer hover:bg-slate-600 hover:text-white'>Second</p>
                <p onClick={() => setComponent(<Third />)} className='p-3 cursor-pointer hover:bg-slate-600 hover:text-white'>Third</p>
                <p onClick={() => setComponent(<Fourth />)} className='p-3 cursor-pointer hover:bg-slate-600 hover:text-white'>Fourth</p>


            </div>
            <div className='w-9/12 px-4'>
                {component? component:<><p className='text-3xl'>THis is for welcome massage</p></>}
            </div>
        </div>
    )
}

export default Components