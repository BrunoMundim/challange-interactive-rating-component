import styled from 'styled-components';

export const WrapperItems = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  text-align: justify;  

  button{
    margin: 10px;
    padding: 10px;
  }
  
  .buttonSelected{
    background-color: red;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px; 

  border: 3px solid;
  border-radius: 5%;
`