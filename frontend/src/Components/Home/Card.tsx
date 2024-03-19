import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import cardImage from "../../Assets/Home/cardImage.png";
import { Interface } from "readline";

const Style = styled.div`
  .card {
    background-color: #495057;
    height: 100%;
    width: 100%;
    padding: 20px;
    color: #ffffff;
    margin-top: 24px;
  }
  .card__border {
    border-radius: 2px;
    border: 2px solid #ffffff;
  }
  .title {
    font-weight: bold;
    font-size: 24px;
  }
  .img {
    height: 100%;
    width: 100%;
  }

  .hover__image {
    color: #6c757d;
  }
`;

interface Props {
  dateCard: String;
  category: String;
}

export default function Card(props: Props) {
  return (
    <Style>
      <div className="card">
        <Row>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <img
              src={cardImage}
              className="img-fluid w-100 mb-2"
              alt="Изображение до"
            />
          </Col>
          <Col className="card__description d-flex flex-column align-items-stretch">
            <div className="text-center w-100">
              <span className="title">Название</span>
              <div className="card__border mt-3"></div>
            </div>
            <div className="w-100">
              <ul className="mt-3">
                <li>
                  <span className="fw-bolder">Дата:</span> {props.dateCard}
                </li>
                <li>
                  <span className="fw-bolder">Категория:</span> {props.category}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className=" w-100">
          <div className="card__border mt-2 mb-3"></div>
          <span className="hover__image">Наведите курсор на изображение</span>
        </div>
      </div>
    </Style>
  );
}
