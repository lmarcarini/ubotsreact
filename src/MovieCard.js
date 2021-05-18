import React from "react";
import Card from 'react-bootstrap/Card';
import ModalAvaliar from "./ModalAvaliar";
import ModalDeletar from "./ModalDeletar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regStar} from '@fortawesome/free-regular-svg-icons'

function MovieCard(props) {

    return (
        <div>
            <Card key={props.filmeid} border="primary" style={{ width: '18rem' }}>
                <Card.Header>{props.titulo}</Card.Header>
                <Card.Body>
                    {props.ano} - <a href={"https://www.imdb.com/title/tt"+props.imdb}>IMDB</a> <br/>
                    {(props.avaliacao!=null)?[...Array(Number(props.avaliacao))].fill("0").map((x,i)=>{console.log(props.avaliacao);return <FontAwesomeIcon key={i} icon={faStar}/>}):<FontAwesomeIcon icon={regStar}/>}
                    <ModalAvaliar filmeid={props.filmeid}/>
                    <ModalDeletar filmeid={props.filmeid}/>
                </Card.Body>
            </Card> 
        </div>
        );
}

export default MovieCard;