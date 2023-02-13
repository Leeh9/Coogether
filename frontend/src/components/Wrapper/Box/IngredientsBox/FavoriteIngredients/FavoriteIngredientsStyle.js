import styled from 'styled-components';

export const Contents = styled.div`
  background: #fff8ea;
  height: 164px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 12px;
  overflow-y: auto;
  overflow-x: auto;
  margin-right: 0rem;

  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1.5px;
    background: #febd2f;
    background-clip: padding-box;
    border: 1px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: #febd2f;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }

  @media screen and (max-width: 1024px) {
    overflow-x: auto;
  }
`;

export const Circle = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ffffff;
  font-size: smaller;
  text-align: center;
  line-height: 60px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  z-index: 1;
  position: relative;

  div {
    position: absolute;
    text-align: center;
  }

  img {
    margin-top: 0.6rem;
    width: 80%;
    height: 80%;
  }
`;

export const Button = styled.button`
  font-size: xx-small;
  float: left;
  width: 50%;
  width: 50px;
  z-index: 1;
  margin: 0;
  padding: 0;
  margin-left: 0;

  &:hover {
    color: #febd2f;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2px;
  overflow-x: 0;
  overflow-y: 0;

  @media screen and (max-width: 920px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1px;
    overflow-x: 0;
    overflow-y: 0;
  }
`;
