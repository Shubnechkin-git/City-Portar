import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Row, Col } from "react-bootstrap";

const Style = styled.div`
  .resolved {
    margin-top: 24px;
    margin-left: 24px;
    margin-bottom: 24px;
  }
  .cards {
    margin-left: 24px;
  }
`;

export default function Resolved() {
  const testData = new Date();

  return (
    <Style>
      <div className="resolved">
        <h2>Последние решенные:</h2>
        <Row className="cards">
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <Card category="xxxxxxxxxxx" dateCard="xx.xx.xxxx" />
          </Col>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <Card category="xxxxxxxxxxx" dateCard="xx.xx.xxxx" />
          </Col>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <Card category="xxxxxxxxxxx" dateCard="xx.xx.xxxx" />
          </Col>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <Card category="xxxxxxxxxxx" dateCard="xx.xx.xxxx" />
          </Col>
        </Row>
      </div>
    </Style>
  );
}
