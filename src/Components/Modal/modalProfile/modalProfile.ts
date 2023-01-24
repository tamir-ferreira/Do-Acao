import styled from "styled-components";

export const ModalProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90%;

  transform: translateY(-20px);

  div {
    display: flex;
    flex-direction: column;
    /* gap: 0.875rem; */
  }

  span#nome {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
  }

  img {
    margin-bottom: 1rem;
    align-self: center;
    width: 13rem;
    height: 13rem;
    max-width: 80%;
    border-radius: 50%;
  }
  form {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  button:first-child {
    margin-top: 1.5rem;
  }

  @media (max-width: 700px) {
    img {
      width: 12rem;
      height: 12rem;
    }
  }

  @media (max-width: 400px) {
    img {
      width: 9rem;
      height: 9rem;
    }
  }
`;
