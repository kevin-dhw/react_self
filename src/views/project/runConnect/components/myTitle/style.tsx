import { styled } from "styled-components";

export const MyTitleContent = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  background: black;
  padding: 10px 10px 0 0;
`;

export const RightIcon = styled.div`
  width: 20px;
  height: 20px;
  //   background: red;
  border-radius: 50%;
  border: 1px solid green;
  display: flex;
  margin-right: 10px;
`;

export const RightIconIn = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid green;
  margin: auto;
`;

export const MiddleLine = styled.div`
  height: 2px;
  background: black;
  flex: 1;
  margin-top: 10px;
  background: linear-gradient(to right, green, blue);
`;

export const RightWord = styled.span<{ $color?: string }>`
  color: ${(props) => props.$color || "green"};
  margin-left: 10px;
`;
