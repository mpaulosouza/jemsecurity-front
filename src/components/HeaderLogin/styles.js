import styled from 'styled-components';

export const Container = styled.div``;

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 30px;

  background-color: #1e545e;

  .contact {
    display: flex;
    align-items: center;
    flex-direction: row;
    list-style-type: none;

    margin: auto;
    padding-left: 30px;
  }

  .loginuser {
    display: flex;
    align-items: center;
    flex-direction: row;
    list-style-type: none;

    margin: auto;
    padding-right: 40px;
  }

  li {
    padding-left: 10px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  align-items: center;
  height: 80px;
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
  padding-right: 10px;
  padding-left: 40px;

  width: 12vw;
  height: 12vh;
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
  width: 35vw;
  height: 7vh;

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
  justify-content: space-between;
  justify-items: right;
  flex-direction: row;
`;

export const UlRoute = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: row;

  margin: auto;
  padding-left: 80px;

  .link {
    text-decoration: none;
  }

  li {
    padding-left: 10px;
  }
`;

export const MouseDiv = styled.div`
  position: fixed;
  top: 150px;
  left: 700px;

  background-color: #1e545e;

  width: 30px;
  height: 30px;
`;
