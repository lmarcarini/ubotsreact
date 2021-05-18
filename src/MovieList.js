import React, {useState, useEffect} from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'
import MovieCard from "./MovieCard";

function MovieList() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [filmes,setFilmes]=useState([]);
    const [offset,setOffset]=useState(0);

    useEffect(() => {
        fetch("https://entrevistaubotfilmes.000webhostapp.com/API/listar.php?id=1")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setFilmes(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
          setOffset(offset+1)
      }, [])

      const loadMore=()=>{
        fetch("https://entrevistaubotfilmes.000webhostapp.com/API/listar.php?id=1&offset="+offset)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setFilmes(filmes.concat(result));
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        setOffset(offset+1)
      }

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      }
      else {
        return (
            <div>
                <CardGroup>
                    {filmes.map(filme=>
                        <MovieCard key={filme.id} filmeid={filme.id} titulo={filme.Titulo} avaliacao={filme.avaliacao} ano={filme.Ano} imdb={filme.imdb}></MovieCard>
                        )}
                </CardGroup>
                <Button onClick={()=>loadMore()}>Carregar mais</Button>
            </div>
          );
      }
}

export default MovieList;