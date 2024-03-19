import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  show: any;
  handleClose: any;
  fetchLogin: any;
}

const LoginStyle = styled.div``;

export default function Register(props: Props) {
  return (
    <LoginStyle>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="reg__form bg-dark text-white">
          <Modal.Header closeButton>
            <Modal.Title className="text-center w-100">Регистрация</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>ФИО</Form.Label>
              <Form.Control type="text" placeholder="Иванов Иван Иванович" />
              <Form.Label className="mt-3">Логин</Form.Label>
              <Form.Control type="text" placeholder="Введите логин" />
              <Form.Label className="mt-3">Email</Form.Label>
              <Form.Control type="Email" placeholder="Введите email" />
              <Form.Label className="mt-3">Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
              <Form.Label className="mt-3">Повтор пароля</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите ещё раз пароль"
              />
              <Form.Label className="mt-3">Повтор пароля</Form.Label>
              <Form.Check
                type="checkbox"
                label="Согласие на обработку персональных данных"
                className="mb-3"
              />
              <Form.Text className="text-danger">
                Необходимо заполнить все поля!
              </Form.Text>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="light"
              className="w-100"
              onClick={props.fetchLogin}
            >
              Зарегистрироваться
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </LoginStyle>
  );
}
