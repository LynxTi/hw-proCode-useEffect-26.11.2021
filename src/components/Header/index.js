import { useEffect, useState } from "react";
import axios from 'axios';

 function Header () {
    const [cards, setCads] = useState(['Loading...']);
    useEffect (  () => {
        createHtmlCards();
    }, []);

    const createHtmlCards = async () => {
        const straships =  await getStarShips();

        const htmlStarships = straships.map( (straship) => {
            return straship.name; 
        });

        setCads(htmlStarships);
    }

     const getStarShips = async () => {
        const {data} = await axios.get('https://swapi.dev/api/starships/');
        console.log(data);
        const {results} = data;
        console.log(results);

        return results;
     }

     getStarShips();
    return(
        <div>
            {cards.map(el=> <div> {el} </div>)}
        </div>
    )
}

export default Header;