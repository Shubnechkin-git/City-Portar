import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface Props {
  show: any;
  handleClose: any;
  fetchLogin: any;
}

export default function Login(props: Props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      animation={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="reg__form bg-dark text-white">
        <Modal.Header closeButton>
          <Modal.Title>Авторизация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label className="">Логин</Form.Label>
            <Form.Control type="text" placeholder="Введите логин" />
            <Form.Label className="mt-3">Пароль</Form.Label>
            <Form.Control
              type="password"
              className="mb-3"
              placeholder="Введите пароль"
            />
            <Form.Text className="text-danger">
              Необходимо заполнить все поля!
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" className="w-100" onClick={props.fetchLogin}>
            Войти
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
