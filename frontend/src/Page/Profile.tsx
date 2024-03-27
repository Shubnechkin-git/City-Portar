import React, { useState, useEffect } from "react";
import User from "../Components/Profile/User";
import TaskCreate from "../Components/Profile/TaskCreate";
import { Col, Row } from "react-bootstrap";
import Statement from "../Components/Profile/Statement";
import axios from "axios";

export default function Profile(props: any) {
  document.title = "Городской портал | Личный кабинет";
  props.getToken();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("user/get_tasks", { params: { id: props.userData.id } })
      .then((response) => {
        if (response.data[0].length > 0) {
          setTasks(response.data[0]);
        } else {
          setTasks([]);
          tasks.length = 0;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.userData.id, tasks]);

  const updateTasks = () => {
    axios
      .get("user/get_tasks", { params: { id: props.userData.id } })
      .then((response) => {
        if (response.data[0].length > 0) {
          setTasks(response.data[0]);
        } else {
          setTasks([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Row className="row-gap-4">
        <Col>
          <User userData={props.userData} getToken={props.getToken} />
        </Col>
        <Col>
          <TaskCreate updateTasks={updateTasks} userData={props.userData} />
        </Col>
      </Row>
      <Row className="mt-4 mb-4 ">
        <hr className="text-white" />
        <h1 className="text-center text-light mb-4 fw-bold">Ваши заявления</h1>
        <hr className="text-white" />
      </Row>
      <Row className="row-gap-4">
        {tasks.length > 0 ? (
          tasks.map((index: any) => (
            <Col className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
              <Statement
                id={index.id}
                title={index.title}
                description={index.description}
                created_at={index.created_at}
                updateTasks={updateTasks}
              />
            </Col>
          ))
        ) : (
          <h2 className="text-center">Нет созданных вами заявлений</h2>
        )}
      </Row>
    </div>
  );
}
