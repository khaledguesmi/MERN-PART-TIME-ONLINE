import React, { useState } from 'react';
const pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const handleFetchPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((response) => response.json())
            .then((data) => setPokemon(data.results));
    };

    return (
        <div>
            <h1>Pokemon</h1>
            <button onClick={handleFetchPokemon}>Fetch Pokemon</button>
            <ul>
                {pokemon.map((p) => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
        </div>
    );
};


export default pokemon;