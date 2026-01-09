import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const Signup = () => {
    const navigate = useNavigate()
    const [show, setshow] = useState(false)
    const [form, setform] = useState({ name: "", email: "", password: "", })






    const handlelogics = async (e) => {
        e.preventDefault();
        const nameRegex = /^[A-Za-z ]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^\d{4,}$/;

        if (!form.name || !form.email || !form.password) {
            alert("All fields are required");
            return;
        }
        if (!nameRegex.test(form.name)) {
            alert("Name must contain only letters");
            return;
        }


        if (!emailRegex.test(form.email)) {
            alert("Invalid email address");
            return;
        }

        if (!passwordRegex.test(form.password)) {
            alert("Password must be at least 4 digits and numbers only");
            return;
        }
       const API_URL = import.meta.env.VITE_API_URL;
       console.log("API_URL:", import.meta.env.VITE_API_URL);

        try {
            const res = await fetch(`${API_URL}/api/user/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                alert("Signup successful, please login");

                navigate("/");
            } else {
                alert(data.message || "Signup failed");
            }
        } catch (error) {
            alert("Server error");
            console.error(error);
        }
    };
    return (
        <div>

            <form action="" onSubmit={handlelogics}>

                <div className='min-h-screen flex items-center justify-center bg-gray-100'>

                    <div className='bg-white w-[380px] p-8 rounded-xl shadow-xl '>

                        <h2 className='text-xl font-bold text-center mb-6'>Signup</h2>

                        <div className='relative w-full mb-6'>



                            <input type="text" placeholder='' value={form.name} onChange={(e) => setform({ ...form, name: e.target.value })} id="name" className=" mb-4 cursor-pointer peer w-full px-2 py-2 border border-slate-900 rounded-md focus:outline-non focus:border-slate-900   " />
                            <label htmlFor="name" className="  cursor-pointer  absolute left-3 top-3 text-gray-500 bg-white px-1 
               transition-all duration-300
               peer-placeholder-shown:top-2.5
               peer-placeholder-shown:text-base
               peer-placeholder-shown:text-gray-400
               peer-focus:-top-2
               peer-focus:text-sm
               peer-focus:text-slate-900 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500 ">Enter Name</label><br />

                            <div className='relative w-full mb-6'>

                                <input type="email" id="email" value={form.email} onChange={(e) => setform({ ...form, email: e.target.value })} placeholder='' className="mb-4  cursor-pointer peer w-full px-7 py-2 border border-slate-900 rounded-md focus:outline-non focus:border-slate-900" />
                                <FaUser className="absolute left-2 top-6 -translate-y-1/2 text-gray-400" />
                                <label htmlFor="email" className="absolute cursor-pointer  left-6 top-2  bg-white px-1 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:gray-400
            peer-not-placeholder-shown:-top-2
            peer-not-placeholder-shown:text-sm
            peer-not-placeholder-shown:text-gray-500
             peer-focus:-top-2 peer-focus:text-sm peer-focus:text-slate-900" >Enter Email</label>

                                <div className='relative w-full mb-6'>
                                    <input type={show ? 'text' : 'password'} placeholder='' value={form.password} onChange={(e) => setform({ ...form, password: e.target.value })} id="password" className="mb-4  cursor-pointer peer w-full px-7 py-2 border border-slate-900 rounded-md focus:outline-non focus:border-slate-900   " />
                                    <FaLock className="absolute left-2 top-6 -translate-y-1/2 text-gray-400" />
                                    <label htmlFor="password" className=" cursor-pointer  absolute left-6 top-2 text-gray-500 bg-white px-1 
               transition-all duration-300
               peer-placeholder-shown:top-2.5
               peer-placeholder-shown:text-base
               peer-placeholder-shown:text-gray-400
               peer-focus:-top-2
               peer-focus:text-sm
               peer-focus:text-slate-900 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500 ">Enter Password</label> <br />
                                    <button type='button' className='absolute right-3 top-4' onClick={() => { setshow(!show) }}>{show ? <FaEye /> : <FaEyeSlash />}</button>
                                    <div className='flex justify-center items -center bg-slate-900 w-full rounded-md px-3 py-2 text-white '>
                                        <button type='submit' >Signup</button>
                                    </div>
                                    <div className='text-slate-800 text-center'>
                                        <p>Already have an acoount?
                                            <span className='cursor-pointer' onClick={(() => { navigate("/") })}> Login</span>
                                        </p>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

