import React, { useState } from 'react';

export default function Tour({id, name, info, image, price, removeTour}) {

  const [readmore, setReadmore] = useState(false);

  return (
    <>
      <article key={id} className='mt-10'>
        <figure>
          <img src={image} alt={name} className='rounded-xl' />
        </figure>
        <footer>
          <div className='flex justify-between items-center mt-4'>
            <h2 className='text-2xl font-medium'>{name}</h2>
            <h3 className='px-6 py-2 rounded-lg bg-violet-600 text-white font-medium inline-block'>${price}</h3>
          </div>
          
            <p className='mt-3'>
              {readmore? info: `${info.substring(0, 250)}... `}
              <button 
                type='button' 
                onClick={()=>setReadmore(!readmore)} 
                className={readmore ? 'text-red-600 font-medium' : 'text-green-600 font-medium'}
                >
                { readmore ? 'Show Less' : 'Read More' }
              </button>
            </p>
          
          <button 
            type='button' 
            className='py-2 px-4 bg-red-600 text-white rounded-lg w-full mt-3' 
            onClick={()=> removeTour(id)}>
            Remove Item
          </button>
        </footer>
      </article>
    </>
  )
}
