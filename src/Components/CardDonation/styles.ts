import styled from "styled-components";

export const StyledCardDonation = styled.li`
  width: 130px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-top: 5%;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.45);
  border: 3px solid var(--color-secondary);
  :hover {
    transform: translateY(-10px);
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.45);
  }

  > div > img {
    width: 100%;
    height: 90px;
    top: -50px;
    left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in;
  }

  :hover img {
    max-height: 130%;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 5px;

    p:nth-child(3) {
      text-align: center;
      width: 100%;
    }
  }

  @media screen and (max-width: 520px) {
    min-width: 130px;
  }
`;
