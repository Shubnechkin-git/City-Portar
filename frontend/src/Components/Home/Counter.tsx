import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Profile from "../../Page/Profile";
import Login from "./Login";
const CounterStyle = styled.div`
  .counter__line {
    margin-top: 24px;
    width: 100%;
    border: 2px solid #ffffff;
    border-radius: 2px;
  }
`;

interface Props {
  count: number;
  userIsLogged: boolean;
}

export default function Counter(props: Props) {
  return (
    <CounterStyle>
      <div className="counter">
        <div className="d-flex justify-content-between">
          <h1 className="">Количество решенных задач: {props.count}</h1>
          {/* <Button className="btn-light btn" onClick={handleCreate}>
            Создать заявку
          </Button> */}
        </div>
        <div className="counter__line"></div>
      </div>
    </CounterStyle>
  );
}
