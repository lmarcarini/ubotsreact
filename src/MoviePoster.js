import React, {useState, useEffect} from "react";
import { CardImg } from "react-bootstrap";

function MovieList(props) {

 
    const [posterURL,setPosterURL]=useState("https://icons8.com/preloaders/img/favicons/favicon-194x194.png");

    useEffect(() => {
        fetch("https://imdb8.p.rapidapi.com/title/get-images?tconst=tt"+props.imdb+"&limit=1", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c7b627da19msh556aa33de5f0c2fp195e74jsnfbd40f21c449",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(res=>{
            setPosterURL(res.images["0"].url)
        })
        .catch(err => {
            console.error(err);
        });
    }, [])
 

    return (
        <div>
            <CardImg style={{heigth: "18rem"}} src={posterURL}/>
        </div>
        );
}

export default MovieList;