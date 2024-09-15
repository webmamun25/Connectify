import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Swal from 'sweetalert2'
const Signin = () => {
    const navigate=useNavigate()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm()
      const onSubmit = (data) => {
        axios.post('http://localhost:5000/signin',data)
        .then(res=>{
    
          reset()
          console.log(res.data)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks for Login",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
    
          
          
        }
        
        )
        .catch(function (error) {
            console.log(error.response.data.message);
          });
        
        
      }
  return (
    <section>
      <div className="bg-gray-100 flex h-screen items-center justify-center p-4">
    <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-md p-8">

            <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
            </h2>


            <form className="space-y-6 mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Username</label>
                    <div className="mt-1">
                    <input type="text"  {...register("username", { required: true })}
        aria-invalid={errors.username ? "true" : "false"} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="emelia_erickson24" required=""/>
        {errors.username?.type === "required" && (
        <p role="alert">User name is required</p>
      )}
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1">
                    <input type="password" {...register("password", { required: true })}
        aria-invalid={errors.password ? "true" : "false"} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
          {errors.password?.type === "required" && (
        <p role="alert">Password is required</p>
      )}
                    </div>
                </div>

                <div>
                    <button type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 bg-accentColor">Sign
                        In
                    </button>
                </div>

                <p className='text-center'>Don't have an account?<Link to='/registration/register'> <span className='text-redColor'>Sign up</span> </Link> </p>
            </form>
        </div>
    </div>
</div>
    </section>
  )
}

export default Signin