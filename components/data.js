import Image from 'next/image'
export default async function Fechdata({ city }){
  console.log(city)
  try{
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=${city}&timezone=auto&language=en&units=auto`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '514b91b944mshc2d5adc5d9cf7aep1daaf8jsn1dbcc079a62a',
        'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
    const today = new Date();
    return (<>
        <section className='flex justify-center items-center'>
          <div className="flex gap-10 p-20 py-10 pl-10 m-10 font-semibold bg-white sm:border-r-2 ">
            <ul className='flex flex-col gap-5 list-disc'>
              <li>Temp</li>
              <li>Clouds</li>
              <li>Winds</li>
              <li>Humidity</li>
              <li>Visibility</li>
            </ul>
            <ul className='flex flex-col gap-5 '>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
            </ul>
            <ul className='flex flex-col gap-5 font-sans'>
              <li className=' text-nowrap'>{data.current ? data.current.temperature : "-"} °C</li>
              <li className=' text-nowrap'>{data.current ? data.current.cloud_cover : "-"} %</li>
              <li className=' text-nowrap'>{data.current ? data.current.wind.speed : "-"} km/h</li>
              <li className=' text-nowrap'>{data.current ? data.current.humidity : "-"} %</li>
              <li className=' text-nowrap'>{data.current ? data.current.visibility : "-"} m</li>
            </ul>
          </div>
          <div className='flex flex-col self-center gap-2 mr-10 sm:block hidden'>
            <Image src={`/bigicon_2/${data.current.icon_num}.png`} alt="icon" width={200} height={200} />
            <div className='flex justify-between gap-2 font-sans'>
                <h1>{ today.getHours()+":"+today.getMinutes()}</h1> 
                <h1 className='text-nowrap'>{data.current.temperature} °C</h1>  
            </div>
          </div>
        </section>
    </>)
  }catch{
    return <div className='mt-24 text-xl font-semibold text-center'>City Not Found</div>    
  }
}
