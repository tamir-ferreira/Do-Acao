import styled from "styled-components";

export const DonationUpdateStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    > div {
      gap: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    span#titleDescription {
      font-weight: 600;
      font-size: 1rem;
    }
    span {
      font-size: 1rem;
    }
    img {
      width: 70%;
      margin-bottom: 15px;
    }
  }

  form {
    margin-top: 3rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
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
