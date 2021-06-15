import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: right;

  background-color: #1e545e;

  margin: auto;
  padding-right: 10%;

  position: fixed;
  top: 110px;
  left: 0px;

  width: 100vw;
  height: 30px;

  visibility: visible;
`;

export const UlDiv = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;

  li {
    margin: auto;
    padding-left: 10px;
  }
`;
