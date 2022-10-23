import React from "react";

import { Props, ButtonProps } from "./Button.types";

import "./Button.css";

/**
 * Button where anchor or button should be used
 */
export class Button extends React.Component<Props> {
  render(): React.ReactNode {
    return <button className="Button" {...(this.props as ButtonProps)} />;
  }
}

export default Button;
