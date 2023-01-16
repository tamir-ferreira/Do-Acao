import styled from "styled-components";

export const ProductInfosStyled = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > figure img {
    width: 100%;
    height: 150px;
    overflow: hidden;
    align-self: center;
    background-color: var(--color-grey100);
    border-radius: 5px;
  }
  > ul {
    display: flex;
    justify-content: space-around;
    gap: 15px;
    flex-wrap: wrap;
    text-align: center;

    > li {
      background-color: var(--color-grey50);
      border-radius: 15px;
      overflow: hidden;
      > div {
        height: 100%;

        width: 100%;
        justify-content: space-between;

        button {
          height: 15%;
          width: 100%;
        }
        > img {
          width: 100%;
          height: 80px;
          object-fit: cover;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.45);
        }
      }
    }
  }
  @media screen and (max-width: 520px) {
    gap: 5px;
    > ul {
      /* background-color: red; */
      justify-content: flex-start;
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 15px;
    }
  }
`;
