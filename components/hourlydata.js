import Image from 'next/image'
export default async function Fechhourlydata({ city }){
    console.log(city)
    try{
        const url = `https://ai-weather-by-meteosource.p.rapidapi.com/hourly?place_id=${city}&timezone=auto&language=en&units=auto`;
        
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '514b91b944mshc2d5adc5d9cf7aep1daaf8jsn1dbcc079a62a',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
        };

        const response = await fetch(url, options);
        const { hourly } = await response.json();
        const today = new Date();
        return (
        <section className='flex flex-col border-t-2 py-5 mx-10'>
            <h1 className='self-center font-semibold m-3'>Hourly</h1>
            <h1 className=' font-semibold border-b-2 pb-1'>Today</h1>
            <div className='grid grid-flow-row grid-cols-1 ms:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-5'>
                {hourly.data.filter((item)=>(new Date(item.date)).getDate()===today.getDate() && (new Date(item.date)).getHours()>=today.getHours()).map((item,index)=>(
                <div key={index} className='p-2 border-2 flex gap-2 justify-between items-center rounded-md'>
                    <p>{
                    (new Date(item.date)).getHours()===12 || (new Date(item.date)).getHours()===0 
                    ? (new Date(item.date)).getHours()===0 
                    ? "12 AM" 
                    : "12 PM" 
                    : (new Date(item.date)).getHours() > 12 
                    ? ((new Date(item.date)).getHours()-12)+" PM" 
                    : (new Date(item.date)).getHours()+" AM" 
                    }</p>
                    <p>{item.temperature} °C</p>
                    <Image src={`/bigicon_2/${item.icon}.png`} alt={`icon${item.icon}`} width={30} height={30} />
                </div>))}
            </div>
            <h1 className='font-semibold border-b-2 p-1'>Tomorow</h1>
            <div className='grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-5  '>
                {hourly.data.filter((item)=>(new Date(item.date)).getDate()===(today.getDate()+1)).map((item,index)=>(
                <div key={index} className='p-2 border-2 flex gap-2 justify-between items-center rounded-md'>
                <p>{
                (new Date(item.date)).getHours()===12 || (new Date(item.date)).getHours()===0 
                ? (new Date(item.date)).getHours()===0 
                ? "12 AM" 
                : "12 PM" 
                : (new Date(item.date)).getHours() > 12 
                ? ((new Date(item.date)).getHours()-12)+" PM" 
                : (new Date(item.date)).getHours()+" AM" 
                }</p>
                <p>{item.temperature} °C</p>
                <Image src={`/bigicon_2/${item.icon}.png`} alt={`icon${item.icon}`} width={30} height={30} />
                </div>))}
            </div>
        </section> )
    }catch{
        return <div className='mt-24 text-xl font-semibold text-center'>Not Found</div>    
    }
}