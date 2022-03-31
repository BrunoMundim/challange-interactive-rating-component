import styled from "styled-components";

export const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  font-family: 'Open Sans', Regular;
`;

export const Wrapper = styled.div`
  padding: 20px 40px;
  width: 350px;

  background-color: #212832;
  color: #fff;
  text-align: center;

  border: 10px solid none;
  border-radius: 10%;

  h1 {
    display: block;
    font-size: 2em;
    margin-top: 1em;
    margin-bottom: 0.3em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;

    text-align: center;
  }

  p {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-size: 15px;

    text-align: center;
  }
`;

export const WrapperItems = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  text-align: justify;
`;

export const Rating = styled.div`
  background-color: white;
  border-radius: 42px;
  display: inline-block;
  color: orangered;
  font-size: 14px;
  font-weight: bolder;
  width: 70%;
  padding: 8px 2px;
  text-decoration: none;
  border: none;

  margin-top: 40px;
`;
