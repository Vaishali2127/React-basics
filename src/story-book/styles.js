import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background-color: smokewhite;
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const InnerWrapper = styled.div`
  min-height: 40vh;
  margin: 1rem auto;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  min-width: 30vw;
  box-shadow: -4px 0px 24px -11px rgba(71, 71, 71, 1);

  img {
    max-height: 15rem;
    /* margin: auto; */
  }

  h5 {
    color: slateblue;
    letter-spacing: 3px;
  }

  button {
    margin-top: 1rem;
    border-radius: 12px;
    background-color: transparent;
    border: 1px solid gray;
    cursor: pointer;
    padding: 4px 25px;
  }
`;
