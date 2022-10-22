import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './assets/search.svg';
import { IAnime, AnimeCard } from './components/AnimeCard';

const API_URL = 'https://animeapi-demo.herokuapp.com/gogoanime';

function App() {

  const [animes,setAnimes] = useState([]);
  const [searchTerm,setSearchterm] = useState("");

  const searchMovie = async (name: string) => {
    const response = await fetch(`${API_URL}/search?keyw=${name}`);
    const data = await response.json();
    setAnimes(data);
  };

  // on mount hook

  useEffect(() => {
    searchMovie('naruto');
  }, []);



  return <div className="app">
    <h1>Animeland</h1>
    <div className='search'>
      <input type='text' placeholder='Search for an anime'
        value={searchTerm}
        onChange={(e) => setSearchterm(e.target.value)}
      />
      <img src={SearchIcon} onClick={()=> searchMovie(searchTerm)}/>
    </div>
    <div className='container'>
      {animes?.length > 0 ? animes.map((anime: IAnime,index: number) => <AnimeCard key={index} anime={anime} />): <div className='empty'><h1>No movies found</h1></div>}
    </div>
  </div>;
}

export default App;
