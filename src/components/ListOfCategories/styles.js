import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  padding: 0;
  width: 100%;
  margin-bottom: 15px;
  &::-webkit-scrollbar {
    display: none;
  }

  &.fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(0.5);
    transition: top 0.3s ease;
    z-index: 1;
  }
  &.not-fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -100%;
    transform: scale(0.5);
    transition: top 0.5s ease;
    z-index: 1;
  }
`;

export const Item = styled.li`
  padding: 0 8px;
`;
