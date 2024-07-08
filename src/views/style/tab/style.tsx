import { styled } from "styled-components";

export const Tab = styled.div`
  display: flex;
  &:first-child > span {
    margin-right: 20px;
  }
`;

export const TabItem = styled.div<{ $bgColor?: string }>`
  margin-right: 20px;
  background-color: ${(props) => props.$bgColor};
  width: 50px;
  border-radius: 6px;
  margin: auto;
  display: flex;
`;

export const Tab_Item = styled.span<{ $color?: string }>`
  margin: auto;
  color: ${(props) => props.$color || ""};
`;
