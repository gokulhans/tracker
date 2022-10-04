import React from 'react'
import CreateBlog from './components/blogs/create';
import fb from './firebase';
import Bloglist from './components/bloglist';
import { Route, Routes } from 'react-router-dom';
import Navbar from './temps/navbar';
import Home from './pages/Home';
import BlogView from './components/blogs/show';
import BlogEdit from './components/blogs/edit';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/blog/' element={<Bloglist />} />
        <Route path='/blog/create' element={<CreateBlog />} />
        <Route path='/blog/:id' element={<BlogView />} />
        <Route path='/blog/edit/:id' element={<BlogEdit />} />
      </Routes>
    </div>
  )
}

export default App