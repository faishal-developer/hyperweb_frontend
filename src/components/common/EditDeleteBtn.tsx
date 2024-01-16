'use client'
import React from 'react';
import Button from './Button';
import { useDeleteRecipeMutation } from '../../redux/api/recipeApi';
import { useRouter } from 'next/navigation';
import { paths } from '../../paths/Paths';
import { ToastContainer, toast } from 'react-toastify';

const EditDeleteBtn = ({id}) => {
    const router=useRouter();
    const [deleteFunc,{isLoading}]=useDeleteRecipeMutation()

    const handleDelete=()=>{
        try{
            deleteFunc(id);
            router.push(paths.recipe)
            toast.success("Item deleted succeessfully")
        }catch(e){
            toast.error("Something went wrong");
        }
    }

    return (
        <>
            <ToastContainer/>
           <Button disabled={false} onClick={()=>{}} color="bg-blue-500 text-white">
              Edit
            </Button>
            <Button disabled={isLoading} onClick={handleDelete} color="bg-red-500 text-white">
              {isLoading?'loading...':'Delete'}
            </Button> 
        </>
    );
};

export default EditDeleteBtn;