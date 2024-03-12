"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Inputbox(){
  const route = useRouter()
  const handlesubmmit = () => {
    route.replace(`?city=${value}`)
  }
  
  const [value, setValue] = useState("")
  return(<>
      <form action={handlesubmmit} className="flex items-center rounded-md focus-within:border-2 hover:border-2 " >
        <label htmlFor="search">
          <Image src="/search.png" alt="Weather" width={25} height={25} />
        </label>
        <input className="w-24 px-2 font-semibold bg-transparent outline-none " type="text" value={value} name="search" id="search" placeholder="Search..." onChange={(e)=>{setValue(e.target.value)}}/>
      </form>
  </>)
}