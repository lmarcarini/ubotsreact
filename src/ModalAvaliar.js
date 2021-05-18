import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ModalAvaliar(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("https://entrevistaubotfilmes.000webhostapp.com/API/avalia.php?userId=1&filmeId="+props.filmeid+"&score="+event.target.score.value)
        fetch("https://entrevistaubotfilmes.000webhostapp.com/API/avalia.php?userId=1&filmeId="+props.filmeid+"&score="+event.target.score.value)
            .then(res=>{
                if(res.status===200) {alert("Avaliação bem sucedida!")}
                else{alert("Ocorreu algum problema!")}
            })
        handleClose()
    }
//action="https://entrevistaubotfilmes.000webhostapp.com/API/avalia.php?userId=1&filmeId=2" method="get" target="_blank"
    return (
        <div>
            <Button variant="primary" onClick={()=>handleShow()}>Avaliar</Button>
            <Modal show={show} onHide={()=>handleClose()}>
                <Form onSubmit={(e)=>handleSubmit(e)}>
                <div key="inline-radio" className="mb-3" name="score">
                    <Form.Check inline label="1" name="score" type="radio" id="inline-radio-1" value="1"/>
                    <Form.Check inline label="2" name="score" type="radio" id="inline-radio-2" value="2"/>
                    <Form.Check inline label="3" name="score" type="radio" id="inline-radio-3" value="3"/>
                    <Form.Check inline label="4" name="score" type="radio" id="inline-radio-4" value="4"/>
                    <Form.Check inline label="5" name="score" type="radio" id="inline-radio-5" value="5" defaultChecked={true}/>
                </div>

                    <Button variant="primary" type="submit" value="Submit">
                        Confirmar
                    </Button>
                </Form>
            </Modal>
        </div>
        );
}

export default ModalAvaliar;