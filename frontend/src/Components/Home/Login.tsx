import React, { ChangeEventHandler, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

interface Props {
  show: any;
  handleClose: any;
  fetchLogin: any;
  getToken: any;
}

export default function Login(props: Props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const userData = {
    login: login,
    password: password,
  };

  const handleChangeLogin = (e: any) => {
    let value = e.target.value.slice(0, 20);
    setLogin(value);
  };

  const handleChangePassword = (e: any) => {
    let value = e.target.value.slice(0, 50);
    setPassword(value);
  };

  const checkEntered = () => {
    if (login.length > 0 && password.length > 0) {
      setMessage("");
      axios
        .post("login", userData)
        .then((response) => {
          if (response.data.status == true) {
            console.log(response.data.data.token);
            localStorage.setItem("token", response.data.data.token);
            setMessage("");
            props.getToken();
            props.fetchLogin();
          } else {
            console.log(response);
            setMessage(response.data.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      // props.fetchLogin();
    } else if (login.length == 0) {
      setMessage("Необходимо ввести логин!");
    } else if (password.length == 0) {
      setMessage("Необходимо ввести пароль!");
    } else {
      setMessage("Необходимо заполнить все поля!");
    }
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      animation={true}
      aria-labelledby="contained-modal-title-vcenter"
      data-toggle="modal"
      centered
    >
      <div className="reg__form bg-dark text-white">
        <Modal.Header closeButton>
          <Modal.Title>Авторизация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label className="">Логин</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChangeLogin}
              placeholder="Введите логин"
              value={login}
            />
            <Form.Label className="mt-3">Пароль</Form.Label>
            <Form.Control
              type="password"
              className="mb-3"
              placeholder="Введите пароль"
              onChange={handleChangePassword}
              value={password}
            />
            <Form.Text className="text-danger">{message}</Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" className="w-100" onClick={checkEntered}>
            Войти
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
