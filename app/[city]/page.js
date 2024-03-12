import Fechdata from '@/components/data'
import Inputbox from '@/components/inputbox';
import Image from 'next/image'
export default function Cityweather({ params }) {
  console.log("working")
  const today = new Date();

  return (
    <>
      <nav className="flex items-center justify-between p-2 font-serif bg-white border-2 md:px-10">
        <div className='flex gap-1 md:flex-col'>
          <Image src="/weather.png" alt="Weather" width={30} height={30} />
          <h1 className="text-xl font-bold text-gray-800">Weather</h1>
        </div>
        <div className="flex items-center gap-3">
          <Inputbox />
          <ul className="flex items-center space-x-6">
            <li className="font-semibold text-gray-700">Home</li>
          </ul>
        </div>
      </nav>
      <div className='flex flex-col gap-5 font-serif '>
        <div className='flex flex-col self-center '>
          <h1 className="pt-10 text-4xl font-bold text-gray-800">Gurdaspur </h1>
          <h1 className="self-center font-sans text-gray-800">{ today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear() }</h1>
        </div>
        < Fechdata city = { params.city } />
      </div>
      <div className='w-screen mx-10 border-t-2'>

      </div>
    </>
  )
}
