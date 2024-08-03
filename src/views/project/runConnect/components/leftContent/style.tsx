import { styled } from "styled-components";

export const LeftContent = styled.div`
  height: calc(100% - 34px);
`;

export const MainContent = styled.div`
  padding-top: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  row-gap: 10px;
`;

export const MainContentTop = styled.div`
  background: green;
  flex: 1;
  overflow: hidden;
  padding: 0 10px;
`;

export const MainContentBottom = styled.div`
  background: green;
  flex: 1;
  overflow: hidden;
  padding: 0 10px;
`;
