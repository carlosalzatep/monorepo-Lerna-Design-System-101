import "./pgds-button.module.scss";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className="pgds-button">{label}</button>;
};

export default Button;
