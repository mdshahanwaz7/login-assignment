import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [show, setshow] = useState(false)
  const [form, setform] = useState({ email: "", password: "", })
  const navigate = useNavigate()
  const handlelogic = async (e) => {


    e.preventDefault();
    // alert("FORM SUBMITTED"); //

     const API_URL = import.meta.env.VITE_API_URL;
       console.log(API_URL)
    try {
      const res = await fetch(`${API_URL}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      console.log(data)
      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      } else{
        navigate('/user/Home')
      }
      // console.log(data)

    }
    catch (e) {
        alert("Server error of");
        console.error(e);
      }
    }
  
  return (
    <div>
      
      <form action="" onSubmit={handlelogic}>
        <div className='min-h-screen flex items-center justify-center bg-gray-100'
        >


          <div className='bg-white w-[380px] p-8 rounded-xl shadow-xl '>

            <h2 className='text-xl font-bold text-center mb-6'>Login</h2>

            <div className='relative w-full mb-6  '>
              <div className='relative flex '>
                <FaUser className="absolute left-2 top-6 -translate-y-1/2 text-gray-400" />
                <input type="email" placeholder='' value={form.email} onChange={((e) => { setform({ ...form, email: e.target.value }) })} id="email" className="mb-5 pl-8 p-5 cursor-pointer peer w-full px-3 py-2 border border-slate-900 rounded-md focus:outline-non focus:border-slate-900   " />
                <label htmlFor="email" className=" cursor-pointer  absolute left-6 top-3 text-gray-500 bg-white px-1 
               transition-all duration-300
               peer-placeholder-shown:top-2.5
               peer-placeholder-shown:text-base
               peer-placeholder-shown:text-gray-400
               peer-focus:-top-2
               peer-focus:text-sm
               peer-focus:text-slate-900 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500 ">Enter Email</label><br />
              </div>
              <div className='relative w-full mb-6 '>
                <FaLock className="absolute left-2 top-6 -translate-y-1/2 text-gray-400" />
                <input type={show ? 'text' : 'password'} id="password" value={form.password} onChange={(e) => {
                  setform({ ...form, password: e.target.value })
                }} placeholder='' className="pl-8   cursor-pointer peer w-full px-3 py-2 border border-slate-900 rounded-md focus:outline-non focus:border-slate-900" />

                <label htmlFor="password" className="absolute cursor-pointer  left-6 top-2  bg-white px-1 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:gray-400
            peer-not-placeholder-shown:-top-2
            peer-not-placeholder-shown:text-sm
            peer-not-placeholder-shown:text-gray-500
             peer-focus:-top-2 peer-focus:text-sm peer-focus:text-slate-900" >Enter Password</label><br />
                <button type='button' className='absolute right-3 top-4' onClick={() => { setshow(!show) }}>{show ? <FaEye /> : <FaEyeSlash />}</button>
              </div>
            </div>

            <div className='flex justify-center items -center bg-slate-900  w-full rounded-md px-3 py-2 text-white cursor-pointer '>
              <button className='' type='submit'>Login</button>
            </div>
            <div className='text-slate-800 text-center'>
              <p>Do you have an acoount?
                <span className='cursor-pointer' onClick={(() => { navigate("/signup") })}> SignUp</span>
              </p>
            </div>
          </div>

        </div>

      </form>
    </div>
  )
}
