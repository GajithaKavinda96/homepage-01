/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import DumbbellIcon from "../Image/trophy.jpg";

const AwardCard = ({ title, desc }) => (
  <div css={styles} className="card">
    <img src={DumbbellIcon} alt="dumbbell" />
    <div className="cardInfo">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 40%;
  display: flex;
  text-align: left;
  margin: 30px 0;
  border:none;
  img {
    margin-right: 30px;
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      color: #232d39;
    }
    p {
      color: #7a7a7a;
      font-size: 14px;
      line-height: 1.7;
    }
    a {
      color: #ed563b;
      text-decoration: none;
      transition: color 600ms ease-in-out;
      font-size: 14px;
      font-weight: 500;
      &:hover {
        color: #f9735b;
      }
    }
  }
  @media (max-width: 700px) {
    max-width: 100%;
  }
  @media (min-width: 701px) and (max-width: 1100px){
    max-width: 80%;
  }
`;

export default AwardCard ;
