'use client'
import { addProduct } from '@/api/products';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify';

function ProductAddForm() {
    // const form = useForm();
    const { 
        register, 
        handleSubmit, 
        formState: {errors}, 
        } = useForm();
    // const {name, ref, onChange, onBlur} = register("name")

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    async function submitForm(data) {
        setLoading(true);
        try {
            await addProduct(data);
            toast.success("Product added successfully",{
                autoClose:1500,
                onClose: ()=> router.back(),
            })
        } catch (error) {
            console.log(error);
            toast.error(error.response.data);
        } finally {
            setLoading(false);
        }

      
    }
  return (
    <div className='w-full sm:w-2/3 md:w-1/2 p-16  shadow-xl rounded-3xl bg-gray-50 dark:bg-gray-700'>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className='py-2'>
            <label 
                htmlFor='name' 
                className='font-semibold text-sm uppercase p-1 dark:text-white'>
                Product name
            </label>
            <input 
                type='text' 
                id='name' 
                {...register("name", {
                    required: 'Product name is required'
                })}
                // name='name'
                // onChange={onChange}
                // onBlur={onBlur}
                // ref={ref}
                className='border border-gray-500 rounded px-3 py-1 w-full shado-md mt-1 dark:text-white dark:bg-zinc-600'
            />
            <p className='text-red-500 text-sm'>{errors.name?.message}</p>
        </div>
        
        <div className='py-2'>
            <label 
                htmlFor='brand' 
                className='font-semibold text-sm uppercase p-1 dark:text-white'>
                Brand
            </label>
            <input 
                type='text' 
                id='brand' 
                {...register("brand")}
                className='border border-gray-500 rounded px-3 py-1 w-full shado-md mt-1 dark:text-white dark:bg-zinc-600'
            />
        </div>
        
        <div className='py-2'>
            <label 
                htmlFor='category' 
                className='font-semibold text-sm uppercase p-1 dark:text-white'>
                Category
            </label>
            <input 
                type='text' 
                id='category' 
                {...register("category")}
                className='border border-gray-500 rounded px-3 py-1 w-full shado-md mt-1 dark:text-white dark:bg-zinc-600'
            />
        </div>
        
        <div className='py-2'>
            <label 
                htmlFor='price' 
                className='font-semibold text-sm uppercase p-1 dark:text-white'>
                Price
            </label>
            <input 
                type='number' 
                id='price' 
                {...register("price", {
                    required: "Price is required!",
                    min: {
                        value: 0,
                        message: "Products price must be positive value"
                    }
                })}
                className='border border-gray-500 rounded px-3 py-1 w-full shado-md mt-1 dark:text-white dark:bg-zinc-600'
            />
            <p className='text-red-500 text-sm'>{errors.price?.message}</p>
        </div>
        <div className='w-full flex justify-center pt-5'>
            <input 
                className='bg-primary-600 text-white px-10 py-2 rounded hover:cursor-pointer disabled:cursor-not-allowed' 
                type='submit' 
                value={loading ? "Submitting...":"Add Product"}
            />
        </div>
        <ToastContainer />

      </form>
    </div>
  )
}

export default ProductAddForm
