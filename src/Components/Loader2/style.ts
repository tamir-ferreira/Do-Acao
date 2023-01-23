import styled from "styled-components";
export const StyledLoader2 = styled.div`
  span {
    width: 48px;
    height: 48px;
    border-width: 3px;
    border-style: dashed solid solid dotted;
    border-color: var(--color-primary) var(--color-primary) transparent
      var(--color-primary);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 2s infinite;

    ::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      left: 20px;
      top: 31px;
      border: 10px solid transparent;
      border-right-color: var(--color-primary);
      transform: rotate(-40deg);
    }
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
