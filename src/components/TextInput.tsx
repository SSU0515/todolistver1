import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 1.2rem;
  padding: 8px;
  border: 1px solid #304ffe;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
};

export default TextInput;
