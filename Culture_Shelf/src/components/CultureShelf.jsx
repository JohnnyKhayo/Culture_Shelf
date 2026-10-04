import React from 'react'
import CultureCard from './CultureCard'

function CultureShelf() {
const cultures = [
{
    id: 1,
    name: "Yogurt bacteria",
    scientificName: "Lctobacillus",
    habitat: "yogurt and the gut",
    role: "Turns milk into yogurt"
},
{
    id: 3,
    name: "Lab strain K-12",
    scientificName: "Escherichia coli",
    habitat: "research labs",
    role: "Harmless teaching strain"
  },
  {
    id: 4,
    name: "Bread mold",
    scientificName: "Rhizopus",
    habitat: "damp bread",
    role: "Breaks down leftovers"
  }
    ];
    
  return (
    <>
    <section>
    {cultures.map(culture => (
        <CultureCard
          key={culture.id}
          culture={culture}
          onDelete={() => {}}
        />
      ))}

    </section>
    </>
  );
}

export default CultureShelf