import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../style/TaskCreate.css";
import axios from "axios";

export default function TaskCreate(props: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [counter, setCounter] = useState([0, 0]);
  const [message, setMessage] = useState("");

  const handleChangeTitle = (e: any) => {
    let value = e.target.value.slice(0, 50);
    setCounter([value.length, counter[1]]);
    setTitle(value);
  };

  const handleChangeDescription = (e: any) => {
    let value = e.target.value.slice(0, 3000);
    setCounter([counter[0], value.length]);
    setDescription(value);
  };

  const handeCreate = () => {
    if (counter[0] > 0 && counter[1] > 0) {
      axios
        .post("user/create_task", {
          user_id: props.userData.id,
          title: title,
          description: description,
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === true) {
            setTitle("");
            props.updateTasks();
            setDescription("");
            setCounter([0, 0]);
            setMessage(res.data.message);
          } else {
            setMessage(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setMessage(err.message);
        });
    } else if (counter[0] == 0) {
      setMessage("Введите название!");
    } else if (counter[1] == 0) {
      setMessage("Введите описание!");
    } else setMessage("Повторите позже!");
  };

  return (
    <div className="form__container">
      <Form className="form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Введите название</Form.Label>
          <Form.Control
            type="email"
            placeholder="Заявление 1"
            onChange={handleChangeTitle}
            value={title}
          />
          {counter[0]}/50
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Введите описание</Form.Label>
          <Form.Control
            as="textarea"
            onChange={handleChangeDescription}
            placeholder="Ну улице ..."
            value={description}
            rows={3}
          />
          {counter[1]}/3000
        </Form.Group>
        <Form.Group>
          <Button
            className="btn btn-light w-100 fw-medium"
            onClick={handeCreate}
          >
            Создать заявку
          </Button>
        </Form.Group>
        <span className="text-danger">{message}</span>
      </Form>
    </div>
  );
}
