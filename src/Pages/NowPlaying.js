import React,{useState,useEffect} from 'react'
import axios from 'axios'

const NowPlaying = () => {
    const [moviePlay, setMoviePlay] = useState([]);

    const fetchNowPlayingMovies = async () => {
        await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=d86a765007a6b298c10937969b0a8623").then((response) => {
            setMoviePlay(response.data.results)
            console.log(response.data.results);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchNowPlayingMovies();
    }, [])
    


  return (
    <div>NowPlaying</div>
  )
}

export default NowPlaying