import {useState} from 'react';
import CultureCard from './CultureCard'

function CultureShelf() {
const [cultures, setCultures] = useState([
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
    ]);

    function handleDelete(id)
{setCultures(prev => prev.filter(culture => culture.id !==id));}    
  return (
    <>
    <section>
    {cultures.map(culture => (
        <CultureCard
          key={culture.id}
          culture={culture}
          onDelete={handleDelete}
        />
      ))}

    </section>
    </>
  );
}

export default CultureShelf