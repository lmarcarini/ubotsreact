import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function ModalDeletar(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleConfirm=(event)=>{
        event.preventDefault()
        fetch("https://entrevistaubotfilmes.000webhostapp.com/API/delete.php?id="+props.filmeid)
            .then(res=>{
                if(res.status===200) {alert("Filme deletado!");
                    document.location.reload()}
                else{alert("Ocorreu algum problema!")}
            })
        handleClose()
    }

    return (
        <div style={{justify:"right"}}>
            <FontAwesomeIcon icon={faTrash} onClick={()=>handleShow()}/>
            <Modal show={show} onHide={()=>handleClose()}>
                Deseja realmente excluir?
                <Button variant="warning" onClick={(e)=>handleConfirm(e)}>
                    Confirmar
                </Button>
                <Button variant="secondary" onClick={()=>handleClose()}>
                    Cancelar
                </Button>
                
            </Modal>
        </div>
        );
}

export default ModalDeletar;