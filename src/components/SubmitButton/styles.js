import styled from "styled-components";

export const Button = styled.button`
  background-color: #8d00ff;
  border-radius: 3px;
  color: #fff;
  display: block;
  height: 32px;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;
