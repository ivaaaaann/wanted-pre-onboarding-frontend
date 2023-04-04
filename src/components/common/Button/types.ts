import { ButtonHTMLAttributes } from "react";
import { CommonComponentProps } from "../common.type";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    CommonComponentProps {
  buttonType: ButtonType;
}

export type ButtonType = "SUBMIT" | "CANCEL";
