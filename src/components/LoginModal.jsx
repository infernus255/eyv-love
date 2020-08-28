import React from "react";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { user } from "../consts.js";
import propTypes from "prop-types";

export default function LoginModal(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    if (data.Usuario === user.Usuario && data.Contrasena === user.Contrasena) {
      localStorage.setItem("Usuario", data.Usuario);
      localStorage.setItem("Contrasena", data.Contrasena);
      props.setUser(data.Usuario);
      props.setPass(data.Contrasena);

    props.onHide(false);
    }
  };

  return (
    <>
      <Modal {...props} animation={false}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  name="Usuario"
                  ref={register({
                    required: true,
                    maxLength: 20,
                  })}
                  placeholder="Usuario"
                />
                {errors.Usuario && (
                  <span>
                    Es obligatorio ingresar el campo , debe ser menor a 20
                    caracteres y no debe estar duplicado
                  </span>
                )}
              </Col>
              <Col>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  name="Contrasena"
                  ref={register({ required: true, maxLength: 20 })}
                  placeholder="Contraseña"
                />
                {errors.Contrasena && (
                  <span>
                    Es obligatorio ingresar el campo y debe ser menor a 20
                    caracteres
                  </span>
                )}
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Agregar
            </Button>
            <Button variant="danger" onClick={props.onHide}>
              Cancelar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

LoginModal.propTypes = {
  show: propTypes.bool.isRequired,
  onHide: propTypes.func.isRequired,
  setUser: propTypes.func.isRequired,
  setPass: propTypes.func.isRequired,
};
