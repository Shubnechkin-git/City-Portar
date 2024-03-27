import React from "react";
import "../../style/user.css";
import { Button } from "react-bootstrap";

export default function User(props: any) {
  const handleExit = () => {
    localStorage.removeItem("token");
    props.getToken();
  };

  const fullName = props.userData.fio;

  const nameParts = fullName.split(" ");

  let lastName, firstName, middleName;

  if (nameParts.length >= 1) {
    lastName = nameParts[0];
  }

  if (nameParts.length >= 2) {
    firstName = nameParts[1];
  }

  if (nameParts.length >= 3) {
    middleName = nameParts[2];
  }

  return (
    <div className="user__container d-flex flex-column justify-content-between">
      <div className="container__info">
        <div className="info__inner d-flex flex-column">
          <span className="fw-bold">Имя: {lastName}</span>
          <span className="fw-bold">Фамилия: {firstName}</span>
          <span className="fw-bold">Отчество: {middleName}</span>
          <span className="fw-bold">Логин: {props.userData.login}</span>
          <span className="fw-bold">Email: {props.userData.email}</span>
        </div>
      </div>
      {/* <div className="container__change__password">
        <div className="btn__change">
          <Button className="btn btn-light w-100 fw-medium">
            Изменить пароль
          </Button>
        </div>
      </div> */}
      <div className="container__change__password">
        <div className="btn__change">
          <Button
            className="btn btn-light w-100 fw-medium"
            onClick={handleExit}
          >
            Выйти
          </Button>
        </div>
      </div>
    </div>
  );
}
