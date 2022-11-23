import React from "react";

interface Props {
  label: string;
}

const Button = ({ label }: Props) => {
  return <button>{label}</button>;
};

export default Button;
