import React from 'react'

function CultureCard({culture, onDelete}) {

  return (

    <>
    <article>
        <h2>{culture.name}</h2>
        <p><em>{culture.scientificName}</em></p>
        <p>Lives in {culture.habitat}</p>
        <p>{culture.role}</p>
        <button onClick={() => onDelete(culture.id)}>Delete</button>
    </article>
    
    </>
  );
}

export default CultureCard