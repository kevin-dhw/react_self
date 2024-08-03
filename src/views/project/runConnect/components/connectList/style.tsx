import styled from "styled-components";

export const ConnectList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopContent = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 10px 0;
`;

export const TopContentIcon = styled.div`
  width: 30px;
`;
export const TopContentMiddle = styled.div`
  flex: 1;
  padding: 0 20px;
`;
export const TopContentRight = styled.div`
  // background: green;
`;

export const BottomContent = styled.div`
  flex: 1;
  // background: green;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: auto;
`;

export const ConenetcItem = styled.div`
  width: 49%;
  box-sizing: border-box;
  background: red;
  margin: 4px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const ItemIcon = styled.div``;
export const ItemName = styled.div``;
export const ItemAge = styled.div``;
