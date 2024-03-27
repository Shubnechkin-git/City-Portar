import React from "react";
import { Button, Form } from "react-bootstrap";
import "../../style/Statement.css";
import axios from "axios";

export default function Statement(props: any) {
  const handleDelete = (e: any) => {
    axios
      .delete("user/delete_task", { params: { id: props.id } })
      .then((res) => {
        console.log(res);
        props.updateTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container__statement">
      <div className="statment_inner text-light">
        <h4 className="text-center">{props.title}</h4>
        <hr className="text-white" />
        <h5>Дата: {props.created_at}</h5>
        <h5>Описание</h5>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            readOnly
            value={props.description}
          />
        </Form.Group>
        <hr className="text-white" />
        <Button
          id={props.id}
          className="btn btn-danger w-100 fw-medium"
          onClick={handleDelete}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
}
