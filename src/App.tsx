import { useState, useEffect } from 'react';
import SearchIcon from './assets/search.svg';
import NarutoIcon from './assets/naruto.png';
import { IAnime, AnimeCard } from './components/AnimeCard';
import './App.css';

const API_URL = 'https://animeapi-demo.herokuapp.com/gogoanime';

function App() {

  const [animes,setAnimes] = useState([]);
  const [searchTerm,setSearchterm] = useState("");
  const [isLoading,setIsLoading] = useState(true);

  const searchMovie = async (name: string) => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}/search?keyw=${name}`);
    const data = await response.json();
    setAnimes(data);
    setIsLoading(false);
  };

  // on mount hook

  useEffect(() => {
    searchMovie('naruto');
  }, []);



  return <div className="app">

    <div className="container">
    <img src={NarutoIcon} style={{padding: "0 6px 0 6px", height: "60px"}} />
    <h1>Animeland</h1>
    </div>
    <div className='search'>

      <input type='text' placeholder='Search for an anime'
        value={searchTerm}
        onChange={(e) => setSearchterm(e.target.value)}
      />
      <img src={SearchIcon} onClick={()=> searchMovie(searchTerm)}/>
    </div>
    <div className='container'>
    {isLoading ? <div className='empty'><h1>Loading, please wait..</h1></div> : (animes?.length > 0 ? animes.map((anime: IAnime,index: number) => <AnimeCard key={index} anime={anime} />): <div className='empty'><h1>No anime found</h1></div>) }
    </div>
  </div>;
}

export default App;
