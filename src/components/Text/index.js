import React from "react";

const variantClasses = {
  h1: "font-extrabold text-5xl sm:text-[38px] md:text-[44px]",
  h2: "font-bold sm:text-5xl md:text-5xl text-[250px]",
  h3: "text-2xl md:text-[22px] sm:text-xl",
  h4: "font-normal text-xs",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
