import styled from "styled-components";

export const StyledCard = styled.li`
  width: 170px;
  height: 220px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 3px;
  margin-top: 5%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.45);
  background-color: var(--color-grey50);
  border: 4px solid var(--color-secondary);

  figure {
    background-color: var(--color-secondary);
    width: 110px;
    height: 110px;
    position: absolute;
    top: -50px;
    left: 26px;
    border-radius: 50%;
    border: 4px solid var(--color-secondary);
    transition: 0.5s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      transition: 0.3s ease-in;
      max-height: 100%;
    }
  }

  :hover figure {
    border: 4px solid var(--color-primary);
  }

  :hover img {
    max-height: 130%;
  }

  p {
    font-size: 14px;
    color: var(--color-grey300);
  }

  p:nth-child(2) {
    font-size: 12px;
    /* border: 1px solid var(--color-primary); */
    color: var(--color-primary);
    background-color: var(--color-secondary);
    border-radius: 5px;
    padding: 2px 5px;
  }

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    align-self: center;
    margin-bottom: 5px;

    hr {
      width: 100%;
    }
  }
  div#btn {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  button#icon {
    border: none;
    background-color: transparent;
    font-size: 16px;
    color: var(--color-primary);
  }
  button#icon:hover {
    opacity: 0.7;
  }
`;
