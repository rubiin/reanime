
export interface IAnime {
  animeId:    string;
  animeTitle: string;
  animeUrl:   string;
  animeImg:   string;
  status:     string;
}



export const AnimeCard = (props: { anime: IAnime }) => {

  const { animeId,animeUrl, status, animeTitle, animeImg } = props.anime;
  return (<div className='anime'>

    <div>
      <p>{animeId}</p>
    </div>
    <div>
      <img src={animeImg !== 'N/A' ? animeImg : 'https://via.placeholder.com/400'} alt={animeTitle} />
    </div>
    <div>
      <a href={animeUrl}>{animeUrl}</a>
      <h3>{status}</h3>
    </div>

  </div>)
}
