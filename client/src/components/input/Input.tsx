import { FC, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "./input.style.scss";

type InputType = {
  value: string;
  type?: "text" | "password" | "number";
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
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const defaultType = type ? type : "text";
  const inputType = type === "password" && showPassword ? "text" : defaultType;

  return (
    <section className="input__wrapper">
      <div>
        {label ? <label htmlFor={id}>{label}</label> : ""}
        {required ? <span className="input__required">*</span> : ""}
      </div>
      <div>
        <input
          id={id}
          type={inputType}
          onChange={onchange}
          value={value}
          name={name}
          placeholder={placeholder}
          className="input"
        />
        {type === "password" ? (
          showPassword ? (
            <span className="input__icon" onClick={handleShowPassword}>
              <IoMdEye size={24} color="grey" />
            </span>
          ) : (
            <span className="input__icon" onClick={handleShowPassword}>
              <IoMdEyeOff size={24} color="grey" />
            </span>
          )
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Input;
