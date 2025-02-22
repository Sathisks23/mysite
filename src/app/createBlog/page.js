'use client'
import { useState } from 'react'
import React from 'react'
const style = {
    form :'w-96 ' ,
    input :'w-full border-2 p-2 my-2',
    submitBtn :'' 
}
const CreateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        metaDescription: '',
        keywords: '',
        content: '',
        category: '',
        tags: '',
      });
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value });  
    }
    function handleFileChange(e){
        setFile(e.target.files[0]);
    }
   async function handleSubmit(e){
        e.preventDefault();

        const formDataObj = new FormData();
        Object.keys(formData).forEach((key) => {
          formDataObj.append(key, formData[key]);
        });
        if (file) formDataObj.append('coverImage', file);
    
        const res = await fetch('/api/blog', {
          method: 'POST',
          body: formDataObj,
        });
    
        const data = await res.json();
        if (res.ok) {
          setMessage('Blog created successfully!');
          setFormData({
            title: '',
            metaDescription: '',
            keywords: '',
            content: '',
            category: '',
            tags: '',
          });
          setFile(null);
        } else {
          setMessage(`Error: ${data.error}`);
        }
    }
  return (
    <div className='flex  w-full justify-center items-center'>
      <form onSubmit={handleSubmit} className={style.form} encType="multipart/form-data">
        <input type="text" name="title" className={style.input}  placeholder="Title" onChange={handleChange} required />
        <textarea name="metaDescription" className={style.input}  placeholder="Meta Description" onChange={handleChange}></textarea>
        <input type="text" name="keywords" className={style.input}  placeholder="Keywords (comma-separated)" onChange={handleChange} />
        <textarea name="content" className={style.input}  placeholder="Content" onChange={handleChange} required></textarea>
        <input type="text" name="category" className={style.input}  placeholder="Category" onChange={handleChange} required />
        <input type="text" name="tags" className={style.input}  placeholder="Tags (comma-separated)" onChange={handleChange} />
        <input type="file" className={style.input}  name="coverImage" onChange={handleFileChange} />
        <button type="submit">Create Post</button>

        {message && <p>{message}</p>}
      </form>
    </div>
  )
}

export default CreateBlog
