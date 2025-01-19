'use client'
import { addProduct } from '@/api/products';
import React from 'react'
import { useForm } from 'react-hook-form'

function ProductAddForm() {
    // const form = useForm();
    const { register, handleSubmit } = useForm();
    // const {name, ref, onChange, onBlur} = register("name")

    function submitForm(data) {
        console.log(data)

        addProduct(data)
        .then(res=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
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
                {...register("name")}
                // name='name'
                // onChange={onChange}
                // onBlur={onBlur}
                // ref={ref}
                className='border border-gray-500 rounded px-3 py-1 w-full shado-md mt-1 dark:text-white dark:bg-zinc-600'
            />
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
                {...register("price")}
                className='border border-gray-500 rounded px-3 py-1 w-full shado-md mt-1 dark:text-white dark:bg-zinc-600'
            />
        </div>
        <div className='w-full flex justify-center pt-5'>
            <input 
                className='bg-primary-600 text-white px-10 py-2 rounded hover:cursor-pointer' 
                type='submit' 
                value="Add product" 
            />
        </div>

      </form>
    </div>
  )
}

export default ProductAddForm
