import React, { PropsWithChildren } from "react";
import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: blue;
`;
const Header = styled.div<{ color?: string }>`
  padding: 20px;
  background-color: pink;
  color: ${(props) => props.color || "blue"};
`;

const Button = styled.button`
  font-size: 20px;
  margin: 5px 10px;
  border: 2px solid #000;
  color: ${(props) => props.color || "blue"};
`;
const Button2 = styled(Button)`
  border-radius: 8px;
`;

interface LinkProps extends PropsWithChildren {
  href: string;
  className?: string;
}
const Link: React.FC<LinkProps> = (props) => {
  const { href, className, children } = props;
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};
const StyleLink = styled(Link).attrs<{ $color?: string }>((props) => {
  props.$color = "orange";
  props.children = props.children + "123";
  return props;
})`
  color: ${(props) => props.$color || "blue"};
  font-size: 40px;
`;

const AAA: React.FC = () => {
  return (
    <>
      <Title> AAA</Title>
      <Header color="red">标题</Header>
      <Header color="green">标题</Header>
      <Header color="blue">标题</Header>
      <br />
      <Button>默认按钮</Button>
      <Button2>圆角按钮</Button2>
      <Button2 as="div">圆角按钮</Button2>
      <br />
      <StyleLink href="#aaa" $color="red">
        click me
      </StyleLink>
    </>
  );
};

export default AAA;
