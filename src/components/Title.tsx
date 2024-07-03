import React from "react";
import styled from "styled-components";

const Label = styled.h1`
  font-size: 55px;
  margin-bottom: 16px;
  color: #dd9cb4;
`;

interface Props {
  label: string;
}

const Title = ({ label }: Props) => {
  return <Label>{label}</Label>;
};

export default Title;
