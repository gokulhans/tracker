import React from 'react'
import Bloglist from '../components/bloglist'
import CreateBlog from '../components/blogs/create'

function Home() {
    return (
        <div>
            <CreateBlog />
            <Bloglist />
        </div>
    )
}

export default Home