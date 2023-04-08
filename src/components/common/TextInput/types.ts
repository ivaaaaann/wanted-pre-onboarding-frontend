import { InputHTMLAttributes } from "react";
import { CommonComponentProps } from "../common.type";

export interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Omit<CommonComponentProps, "children"> {}

export interface TextInputLabelWrapProps extends CommonComponentProps {}

export interface TextInputLabelProps extends CommonComponentProps {}
