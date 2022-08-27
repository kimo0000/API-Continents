import axios from "axios";
import React, { useEffect, useState } from "react";
import './style/countries.css';
import Card from './Card';


const Countries = () => {

    const [Data, setData] = useState([]);
    const [rangeData, setRangeData] = useState(15);
    const [Selected, setSelected] = useState('');
    const continents = ["Africa", "Europe", "Asia", "North America", "South America", "Oceania"];

    useEffect(() => {
      axios
       .get('https://restcountries.com/v3.1/all')
       .then(res => setData(res.data))
    }, []);

    return (
       <div className="countries">
           <ul className="countinents">
              <input type='range' min='0' max='250' defaultValue={rangeData}
                     onChange={(e) => setRangeData(e.target.value)} 
              />
              {
                continents.map((continent, index) => (
                  <li className="countinent" key={index} >
                    <input type='radio' id={continent} name='radio_continents' 
                           onChange={(e) => setSelected(e.target.id)}
                           checked={continent === Selected}
                    />
                    <label htmlFor={continent}>{continent}</label>
                  </li>
                ))
              }
           </ul>
           {Selected && 
               <button className="btn" onClick={() => setSelected('')}>Annuler La Recherche</button>}
           <ul className="pays">
             {  
                Data
                  .filter(continent => continent.continents[0].includes(Selected))
                  .slice(0, rangeData)
                  .sort((a, b) => (b.population - a.population))
                  .map((country, index) => <Card key={index}
                                                   country={country}
                                                   />
                        )
             }
           </ul>
       </div>
    )
}

export default Countries;