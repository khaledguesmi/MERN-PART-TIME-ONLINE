import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => { setPokemon(response.data.results) })
    }, []);

    const handleFetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => { setPokemon(response.data.results) })
    }

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
}

export default Pokemon;
