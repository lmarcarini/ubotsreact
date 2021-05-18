import React, {useState, useEffect} from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import MovieCard from "./MovieCard";

function SugereLista() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [filme,setFilme]=useState([]);
    const [offset,setOffset]=useState(0);

    useEffect(() => {
        fetch("https://entrevistaubotfilmes.000webhostapp.com/API/sugere.php?id=1")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setFilme(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
          setOffset(offset+1)
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      }
      else {
        return (
            <div>
                <CardGroup>
                    <MovieCard key={filme.id} filmeid={filme.id} titulo={filme.Titulo} avaliacao={filme.avaliacao} ano={filme.Ano} imdb={filme.imdb}></MovieCard>
                </CardGroup>
            </div>
          );
      }
}

export default SugereLista;