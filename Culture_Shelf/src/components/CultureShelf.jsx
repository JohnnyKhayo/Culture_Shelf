import {useState} from 'react';
import CultureCard from './CultureCard'

function CultureShelf() {
const [cultures, setCultures] = useState([
{
    id: 1,
    name: "Yogurt bacteria",
    scientificName: "Lactobacillus",
    habitat: "yogurt and the gut",
    role: "Turns milk into yogurt"
},
    
{
     id: 2,
     name: "Baker's yeast",
     scientificName: "Saccharomyces cerevisiae",
     habitat: "dough and fruit skins",
     role: "Makes bread rise"
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

    const [formData, setFormData] = useState({
        name: "",
        scientificName: "",
    habitat: "",
    role: ""
    })

    const [query, setQuery] = useState("");

      function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newCulture = {
      id: Date.now(),
      name: formData.name,
      scientificName: formData.scientificName,
      habitat: formData.habitat,
      role: formData.role
    };

    setCultures(prev => [...prev, newCulture]);

    setFormData({
      name: "",
      scientificName: "",
      habitat: "",
      role: ""
    });
  }


    function handleDelete(id){
        setCultures(prev => prev.filter(culture => culture.id !==id));
    }    
  
  function handleSearch(event) {
    setQuery(event.target.value);
  }

  const filtered = cultures.filter(culture => {
    const text = query.toLowerCase();
    return (
      culture.name.toLowerCase().includes(text) ||
      culture.scientificName.toLowerCase().includes(text) ||
      culture.habitat.toLowerCase().includes(text) ||
      culture.role.toLowerCase().includes(text)
    );
  });

return (
    <>
    <section>
              <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input type="text" name="scientificName" value={formData.scientificName} onChange={handleChange} placeholder="Scientific name"
        />
        <input type="text" name="habitat" value={formData.habitat} onChange={handleChange} placeholder="Where it lives"
        />
        <input
          type="text" name="role" value={formData.role} onChange={handleChange} placeholder="What it does"
        />
        <button type="submit">Add to shelf</button>
      </form>

      <input
       type="text" value={query} onChange={handleSearch} placeholder="Try yogurt or yeast"
/>

            {filtered.length === 0 && <p>Nothing on the shelf matches that.</p>}


    {filtered.map(culture => (
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