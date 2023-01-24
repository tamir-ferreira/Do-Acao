import { Button } from "./../Button/index";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 110px;
  background-color: var(--color-secondary);
  box-shadow: 2px 2px 10px #00000060;

  > div {
    height: 100px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: var(--color-secondary);
      color: var(--color-grey60);
      font-size: 30px;
      transform: translateY(20px);
      /* padding-top: 40px; */
      margin: 0 auto;
      text-shadow: -1px 1px 4px black;
    }
    > div {
      display: flex;
      align-items: center;
      gap: 40px;

      > button {
        background-color: transparent;
        border-style: none;
        color: var(--color-grey300);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;

        :first-child {
          border: 2px solid var(--color-grey50);

          > img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }

          :hover {
            border: 2px solid var(--color-primary);
          }
        }

        > svg {
          width: 30px;
          height: 30px;
          background-color: transparent;
          border: none;

          :hover {
            color: var(--color-primary);
          }
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    height: 130px;
    > div {
      margin-top: 10px;
      align-items: flex-start;
      padding-left: 10px;
      /* position: relative; */

      h2 {
        width: 95vw;
        position: absolute;
        top: 45px;
        font-size: 16px;
        text-align: center;
      }

      > img {
        width: 140px;
      }

      > div {
        display: flex;
        padding: 0 15px 0 0;
        gap: 10px;

        > button {
          transform: scale(0.8);
          > img {
          }
        }
      }
    }
  }
`;
