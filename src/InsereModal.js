import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function InsereModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit=(event)=>{
        event.preventDefault()
        let form=event.target
        fetch("https://entrevistaubotfilmes.000webhostapp.com/API/insere.php?titulo="+form.titulo.value+"&ano="+form.ano.value+"&imdb="+form.imdb.value)
            .then(res=>{
                if(res.status===200) {alert("Filme inserido!");document.location.reload()}
                else{alert("Ocorreu algum problema!")}
            })
        handleClose()
    }

    return (
        <div>
            <Button variant="primary" onClick={()=>handleShow()}>Insira um filme</Button>
            <Modal show={show} onHide={()=>handleClose()}>
                <Form onSubmit={(e)=>handleSubmit(e)}>
                    <Form.Label>Título</Form.Label>
                    <Form.Control name="titulo" placeholder="Coloque o Título do filme"/>
                    <Form.Label>Ano</Form.Label>
                    <Form.Control name="ano"/>
                    <Form.Label>Código imdb</Form.Label>
                    <Form.Control name="imdb"></Form.Control>

                    <Button variant="primary" type="submit" value="Submit">
                        Confirmar
                    </Button>
                </Form>
            </Modal>
        </div>
        );
}

export default InsereModal;