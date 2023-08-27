import './App.css';
function App() {
    return (
      <div className="App">
        <Pokemon />
      </div>
    );
  }

è
const pokemon = () => {

  const fetchPokemon = () => {
    const p  = fetch("https://pokeapi.co/api/v2/pokemon") 
    .then((res) => {
        console.log(res)

      }).then((pok)=>{
        console.log(pok)
      }).catch(err => {
        console.log(err);
      })
    }
  return (
    <div>
      <button onClick={(e)=>fetchPokemon()}>Ftech Pokemon</button>
    </div>
  )
}

export default pokemon;