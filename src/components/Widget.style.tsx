import styled from "styled-components";

export const Paragraph = styled.p`
  -webkit-font-smoothing: antialiased;
  font-weight: 300;
  box-sizing: content-box;
  margin-top: 30px;
  padding: 20px;
  border: 0;
  font-size: 18px;
  line-height: 30px;
  text-align: left;
  font-family: "Roboto";
  color: #020202;
  max-width: 850px;
  word-wrap: normal;
  @media only screen and (max-width: 410px) {
    margin-top: 10px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const OrangeLink = styled.a`
  color: #fb8f29;
  text-decoration: none;
`;
