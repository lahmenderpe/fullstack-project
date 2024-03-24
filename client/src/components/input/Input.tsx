import { FC } from "react";
import "./input.style.scss";

type InputType = {
  value: string;
  type?: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
};

const Input: FC<InputType> = ({
  value,
  type,
  onchange,
  name,
  id,
  placeholder,
  label,
  required,
}) => {
  return (
    <section className="input__wrapper">
      <div>
        {label ? <label htmlFor={id}>{label}</label> : ""}
        {required ? <span className="input__required">*</span> : ""}
      </div>
      <div>
        <input
          id={id}
          type={type ? type : "text"}
          onChange={onchange}
          value={value}
          name={name}
          placeholder={placeholder}
          className="input"
        />
      </div>
    </section>
  );
};

export default Input;
