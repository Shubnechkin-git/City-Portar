import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

interface Props {
  show: any;
  handleClose: any;
  fetchLogin: any;
  getToken: any;
}

const LoginStyle = styled.div``;

export default function Register(props: Props) {
  const [login, setLogin] = useState("");
  const [fio, setFIO] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetry, setPasswordRetry] = useState("");
  const [checkPrivacy, setCheckPrivacy] = useState(false);
  const [message, setMessage] = useState("");

  const handleChangeLogin = (e: any) => {
    let value = e.target.value.slice(0, 20);
    setLogin(value);
  };

  const handleChangeFio = (e: any) => {
    let value = e.target.value.slice(0, 50);
    setFIO(value);
  };

  const handleChangeEmail = (e: any) => {
    let value = e.target.value.slice(0, 50);
    setEmail(value);
  };

  const handleChangePassword = (e: any) => {
    let value = e.target.value.slice(0, 50);
    setPassword(value);
  };

  const handleChangePasswordRetry = (e: any) => {
    let value = e.target.value.slice(0, 20);
    setPasswordRetry(value);
  };

  const handleChangeCheckPrivacy = (e: any) => {
    let value = e.target.checked;
    setCheckPrivacy(value);
    console.log(checkPrivacy);
  };

  const userData = {
    fio: fio,
    login: login,
    email: email,
    password: password,
  };

  const checkEntered = () => {
    if (
      fio.length > 0 &&
      email.length > 0 &&
      login.length > 0 &&
      passwordRetry.length > 0 &&
      checkPrivacy == true &&
      password.length > 0 &&
      passwordRetry == password
    ) {
      setMessage("");
      axios
        .post("/register/create_user", userData)
        .then((res) => {
          if (res.data.status === true) {
            props.fetchLogin();
            console.log(res);
            localStorage.setItem("token", res.data.data.token);
            props.getToken();
            setMessage("");
          } else {
            console.log(res);
            setMessage(res.data.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (fio.length == 0) {
      setMessage("Необходимо ввести ФИО!");
    } else if (login.length == 0) {
      setMessage("Необходимо ввести логин!");
    } else if (email.length == 0) {
      setMessage("Необходимо ввести Email!");
    } else if (password.length == 0) {
      setMessage("Необходимо ввести пароль!");
    } else if (passwordRetry !== password) {
      setMessage("Пароли не совпадают!");
    } else if (checkPrivacy == false) {
      setMessage("Необходимо согласиться с условиями обаботки данных!");
    } else {
      setMessage("Необходимо заполнить все поля!");
    }
  };

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
              <Form.Control
                type="text"
                onChange={handleChangeFio}
                value={fio}
                placeholder="Иванов Иван Иванович"
              />
              <Form.Label className="mt-3">Логин</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChangeLogin}
                value={login}
                placeholder="Введите логин"
              />
              <Form.Label className="mt-3">Email</Form.Label>
              <Form.Control
                type="Email"
                onChange={handleChangeEmail}
                value={email}
                placeholder="Введите email"
              />
              <Form.Label className="mt-3">Пароль</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChangePassword}
                value={password}
                placeholder="Введите пароль"
              />
              <Form.Label className="mt-3">Повтор пароля</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChangePasswordRetry}
                value={passwordRetry}
                placeholder="Введите ещё раз пароль"
              />
              <Form.Label className="mt-3">
                Повтор пароля {checkPrivacy}
              </Form.Label>
              <Form.Check
                type="checkbox"
                label="Согласие на обработку персональных данных"
                className="mb-3"
                checked={checkPrivacy}
                onClick={handleChangeCheckPrivacy}
              />{" "}
              <Form.Text className="text-danger">{message}</Form.Text>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" className="w-100" onClick={checkEntered}>
              Зарегистрироваться
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </LoginStyle>
  );
}
