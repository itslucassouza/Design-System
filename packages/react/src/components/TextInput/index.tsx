import React, { ComponentProps, ElementType } from "react";
import { Input, Prefix, TextInuputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({prefix, ...props}: TextInputProps) {
  return (
    <TextInuputContainer>
      {!!prefix && (
        <Prefix>{prefix}</Prefix>
      )}
      <Input {...props} />
    </TextInuputContainer>
  )
}

TextInput.displayName = 'TextInput'