import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type Props =
  | ButtonProps
  // this is a hack for href/disabled not being part of button/a respectively
  | {
      href: undefined;
      disabled: undefined;
      onMouseLeave: (e: React.MouseEvent<Element, MouseEvent>) => void;
    };
