import React from 'react'

function CultureCard({culture, onDelete}) {

  return (

    <>
    <article className='border rounded-lg shadow-md p-4 m-4 max-w-xs bg-white'>
        <h2 className='text-xl font-bold text-green-700'>{culture.name}</h2>
        <p className='text-gray-600 my-2'><em>{culture.scientificName}</em></p>
        <img className="w-full h-32 object-contain mb-3" src={culture.image} alt={culture.name}/>
        <p className='text-gray-600'>Lives in {culture.habitat}</p>
        <p className='text-gray-800 font-bold text-xs mt-2'>{culture.role}</p>
        <button className='mt-3 bg-red-600 text-white px-4 py-2 rounded' onClick={() => onDelete(culture.id)}>Delete</button>
    </article>
    
    </>
  );
}

export default CultureCard