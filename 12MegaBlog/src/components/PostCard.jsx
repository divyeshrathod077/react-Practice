import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
    <div>
        <Link to={`/post/${$id}`}>
            <div className=" bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
                className='rounded-xl'/>

            </div>
            <h2>{title}</h2>
        </Link>
      
    </div>
  )
}

export default PostCard
