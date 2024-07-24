import "./dsp-button.module.scss";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className="dsp-button">{label}</button>;
};

export default Button;
