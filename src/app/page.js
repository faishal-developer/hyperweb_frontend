'use client'
import { useEffect } from 'react'
import ingredients from '../../ingredients.json'
import { useRouter } from 'next/navigation'
import { paths } from '../paths/Paths';

export default function Home() {
  const router=useRouter();

  useEffect(()=>{
    router.push(paths.recipe);
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {"loading..."}
    </main>
  )
}
