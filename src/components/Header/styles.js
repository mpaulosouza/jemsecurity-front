import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 50% 30%;

  align-items: center;
  height: 166px;
  width: 100vmax;

  background: linear-gradient(124.78deg, #fefefe 13.72%, #8bd6f1 224.63%);
`;

export const Item1 = styled.div`
  display: flex;
  justify-items: right;
  align-items: center;
  justify-content: right;
`;

export const Logo = styled.img`
  padding-right: 20px;

  width: 70%;
  height: 70%;
`;

export const DivSearch = styled.div`
  ul {
    display: flex;
    justify-items: center;
    flex-direction: row;
    align-items: center;

    list-style-type: none;
  }
`;

export const InputSearch = styled.input`
  width: 40vw;
  height: 9vh;

  border-radius: 35px 0px 0px 35px;
  border-color: #268698;

  font-family: 'Montserrat', sans-serif;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;

  [placeholder] {
    color: #ccc;
  }
`;

export const Item3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  justify-items: right;
  flex-direction: row;
`;
