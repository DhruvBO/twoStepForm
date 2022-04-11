import React from "react";
import {
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

type typeProps = {
  id: string;
  label: string;
  radioOption: Array<Object>;
  control: any;
};

const CheckBox = ({
  control,
  id,
  label,
  radioOption,
}: typeProps) => {
  return (
    <Controller
      control={control}
      name={id}
      render={({ field: { onChange, onBlur, ref }, fieldState: { error } }) => {
        return (
          <FormControl >
            <FormLabel id={id} >{label}</FormLabel>
            <RadioGroup aria-labelledby={label} name={id}>
              {radioOption.map(({ value, label }: any) => {
                return (
                  <FormControlLabel
                    key={`${value}_${label}`}
                    value={value}
                    control={<Radio />}
                    label={label}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );
      }}
    />
  );
};

export default CheckBox;
