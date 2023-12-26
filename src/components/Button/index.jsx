import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[10px]" };
const variants = {
  outline: {
    indigo_900: "border border-indigo-900 border-solid",
    gray_800: "border border-gray-800 border-solid",
    black_900: "border border-black-900 border-solid text-black-900",
    gray_100: "border-2 border-gray-100 border-solid text-gray-100",
    gray_300: "border border-gray-300 border-solid text-gray-900",
  },
  fill: {
    red_50: "bg-red-50 text-indigo-900",
    amber_A200: "bg-amber-A200",
    white_A700: "bg-white-A700",
    indigo_500: "bg-indigo-500 text-gray-100",
    indigo_900: "bg-indigo-900 text-gray-100",
    gray_100: "bg-gray-100 text-indigo-900",
  },
};
const sizes = {
  xs: "p-[3px]",
  sm: "p-[7px]",
  md: "p-3",
  lg: "px-2.5 py-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "indigo_900",
    "gray_800",
    "black_900",
    "gray_100",
    "gray_300",
    "red_50",
    "amber_A200",
    "white_A700",
    "indigo_500",
  ]),
};

export { Button };
