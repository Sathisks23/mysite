'use client'
import React, { useState } from 'react'
import axios from 'axios'
const style = {
    form :'w-96 ' ,
    input :'w-full border-2 p-2 my-2',
    submitBtn :'' 
}

const Contactpage = () => {
    const [contactDetail,setContact] = useState({
        name:'', email:'',subject:'',message:''
    })
    const [successMessage,setsuccessMessage]  = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const [eventFinder,setFinder]=useState(false)

    function inputHandler(){
        event.preventDefault()
        const name= event.target.name
        const value= event.target.value
        setContact({...contactDetail,[name]:value})
    }

    async function formHandler(){
        event.preventDefault()
        try {
            setFinder(true)
            const res =await axios.post('api/addContact',contactDetail) 
            console.log(res.data.message,'res');
            setsuccessMessage(res.data.message)
            setTimeout(() => {
                setsuccessMessage('')   
                setContact({
                    name:'', email:'',subject:'',message:''
                })
            }, 3000);
        } catch (error) {
            setErrorMessage(error.message)
            console.log(error.message);
            
        }finally{
            setFinder(false)
        }
        
    }
  return (
    <>
    <div className='min-w-full h-screen'>
        {successMessage && <p className='text-green-400'>{successMessage }</p>}
        {errorMessage&&<p className='text-red-400'>{errorMessage}</p>}
        <div className=' flex justify-center items-center  h-full'>
            <form className={style.form} onSubmit={formHandler}>
                <input className={style.input} name='name' type='text' placeholder='name' value={contactDetail.name} onChange={inputHandler} required/>
                <input className={style.input}  name='email' type='email' placeholder='email' value={contactDetail.email} onChange={inputHandler} required/>
                <input className={style.input}  name='subject' type='text' placeholder='subject' value={contactDetail.subject} onChange={inputHandler} required />
                <textarea placeholder='message' name='message' className='border-2 p-2' value={contactDetail.message} rows={4} cols={35} onChange={inputHandler} />
                <div className='text-center'>
                 <input className=' border-2 p-2 w-1/2 ' type='submit' value={eventFinder? 'Sending...':'Send'} />
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contactpage
