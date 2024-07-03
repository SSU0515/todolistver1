import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: ${(props) => props.color};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  font-size: 20px;
  &:hover {
    background: ${(props) => props.color};
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  onClick?: () => void;
  color?: string;
}

const Button = ({ label, onClick, color = "#000000" }: Props) => {
  return (
    <Container className="btn" color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;
