import { Input as HeroInput, InputProps } from "@heroui/input";
import React from "react";
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, variant = "bordered", ...props }, ref) => {
    return <HeroInput variant={variant} type={type} ref={ref} {...props} className="text-gray-700" />;
  }
);
Input.displayName = "Input";

export { Input };
