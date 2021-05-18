import React from "react";
import Card from 'react-bootstrap/Card';
import ModalAvaliar from "./ModalAvaliar";

function MovieCard(props) {

    return (
        <div>
            <Card key={props.filmeid} border="primary" style={{ width: '18rem' }}>
                <Card.Header>{props.titulo}</Card.Header>
                <Card.Body>
                    {props.ano} - <a href={"https://www.imdb.com/title/tt"+props.imdb}>IMDB</a> <br/>
                    <ModalAvaliar filmeid={props.filmeid}/>{' '} {(props.avaliacao!=null)?props.avaliacao+" estrela"+(props.avaliacao>1?"s":""):""}
                </Card.Body>
            </Card> 
        </div>
        );
}

export default MovieCard;