import {Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Stack} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { GlobalContext } from "./LivreWrapper";


export default function DrawerLivre() {
  const {isOpen, onClose, Add, user, setErrors, Update}= useContext(GlobalContext);
  const [form, setForm]=useState({})
  const onChangeHandler = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onAdd = () =>{
    Add(form, setForm)
  }

  const [validated, setValidated] = useState(false);
        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        };

  const onUpdate = ()=>{
      Update(form, setForm, form._id);
  }
  useEffect(()=>{
    setForm(user);
  },[user])
    return (
      <div>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton 
              onClick={()=>{
                onClose();
                setErrors({});
                setForm({});
              }}
            />
            <DrawerHeader>Create / Update</DrawerHeader>
            <DrawerBody>
              <Stack spacing={'24px'}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
            <div className="form-group">
                <Form.Group as={Col} md="14" controlId="validationCustom01">
                    <Form.Label>Titre du livre</Form.Label><Form.Control
                        required
                        type="text"
                        name="titreLivre"
                        placeholder="Veuillez entrer le titre du livre!"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </div>
            <div className='form-group'>
                <Form.Group as={Col} md="14" controlId="validationCustom02">
                    <Form.Label>Auteur du livre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="auteurLivre"
                        placeholder="Veuillez entrer l'auteur du livre!"
                    />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </div>
            <div className='form-group'>
                <Form.Group as={Col} md="14" controlId="validationCustom02">
                    <Form.Label>Editeur du livre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="editeurLivre"
                        placeholder="Veuillez zntrer le titre du livre!"
                    />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </div>
            <div className='form-group'>
                <Form.Group as={Col} md="14" controlId="validationCustom02">
                    <Form.Label>Date d'apparution</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        name="dateAparution"
                        placeholder="Veuillez entrer la date d'apparution!"
                    />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </div>
        </Row>
      </Form>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} 
                onClick={()=>{
                onClose();
                setErrors({});
                setForm({});
              }}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={()=>(form._id ? onUpdate() : onAdd())}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    )
  }