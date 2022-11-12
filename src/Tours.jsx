import React from 'react'
import Tour from './Tour'

export default function Tours({tours}) {
  return (
    <div className='w-4/12'>
      <h2 className='text-4xl font-bold text-center'>Our Tours</h2>

      <div className='mt-10'>
        {tours.map((tour)=>{
          return <Tour id={tour.id} {...tour} />
        })}
      </div>
    </div>
  )
}
