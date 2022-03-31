import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px 30px;
  width: 400px;

  background-color: #212832;
  color: #fff;
  text-align: center;

  border: 10px solid none;
  border-radius: 10%;

  h1 {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;

    text-align: left;
  }

  p {
    display: block;
    margin-top: 1em;
    margin-bottom: 1.5em;
    margin-left: 0;
    margin-right: 0;

    text-align: justify;
    color: #9aa1ab;
  }
`;

export const WrapperItems = styled.div`
  display: flex;
  width: 100%;
  text-align: justify;

  .buttonSelected {
    background-color: darkorange;
    color: white;
  }
`;

export const Button = styled.button`
  margin: 10px;
  display: block;
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 100%;
  text-align: center;

  background-color: gray;
  color: lightgray;

  :hover {
    background-color: lightgray;
    color: white;
  }
`;

export const IconStar = styled.img`
  margin: 10px;
  display: block;
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 100%;
  text-align: center;

  background-color: gray;
  color: lightgray;
`;
