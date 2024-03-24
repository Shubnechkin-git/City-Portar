import React, { ChangeEventHandler, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface Props {
  show: any;
  handleClose: any;
  fetchLogin: any;
}

export default function Login(props: Props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeLogin = (e: any) => {
    let value = e.target.value.slice(0, 20);
    setLogin(value);
  };

  const handleChangePassword = (e: any) => {
    let value = e.target.value.slice(0, 20);
    setPassword(value);
  };

  const checkEntered = () => {
    if (login.length > 0 && password.length > 0) {
      setMessage("");
      props.fetchLogin();
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
            <Form.Label className="">Логин {login.length}</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChangeLogin}
              placeholder="Введите логин"
              value={login}
            />
            <Form.Label className="mt-3">Пароль {password.length}</Form.Label>
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
