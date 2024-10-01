import React from 'react'

export const NewsItem = ({title, description, src, url}) => {
  return (
    <div>
        <div className='border border-white flex flex-col items-center justify-center max-w-[360px] px-2 py-5  bg-gray-900 text-white rounded-[10px]'>
            <img src={src?src:"https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"} alt="" className='h-[200px]' /><br />
            <h3 className='text-[25px]'>{title.slice(0, 50)}</h3><br /> 
            <p>{description?description.slice(0, 90):"News is description about events. It is the information about something that has just happened."}</p><br />
           <div className='w-[340px]'><a href={url} className='bg-red-600 w-[15vh] p-[10px] rounded-[5px]'>Read More</a></div>
        </div>
    </div>
  )
}
