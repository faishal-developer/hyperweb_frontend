'use client'
import React from 'react';
import Button from './Button';
import { useDeleteRecipeMutation } from '../../redux/api/recipeApi';
import { useRouter } from 'next/navigation';
import { paths } from '../../paths/Paths';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';

const EditDeleteBtn = ({id}) => {
    const router=useRouter();
    const [deleteFunc,{isLoading}]=useDeleteRecipeMutation()

    const handleDelete=async()=>{
        try{
            const res:any= await deleteFunc(id);
            router.push(paths.recipe)
            if(res?.data)toast.success("Item deleted succeessfully")
            else toast.success("Something went wrong")
        }catch(e){
            toast.error("Something went wrong");
        }
    }

    return (
        <>
            <ToastContainer/>
           <Button disabled={false} onClick={()=>{}} color="bg-blue-500 inline-block text-white">
              <Link href={paths.recipe_update(id)} >
                Edit
              </Link>
            </Button>
            <Button disabled={isLoading} onClick={handleDelete} color="bg-red-500 text-white">
              {isLoading?'loading...':'Delete'}
            </Button> 
        </>
    );
};

export default EditDeleteBtn;