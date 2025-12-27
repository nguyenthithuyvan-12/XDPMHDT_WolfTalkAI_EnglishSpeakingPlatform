import React from 'react';
import { Input, InputProps } from '../../atoms/Input/Input';
import './FormField.css';

interface FormFieldProps extends InputProps {
  helperText?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  helperText,
  error,
  ...inputProps
}) => {
  return (
    <div className="form-field">
      <Input {...inputProps} error={error} />
      {helperText && !error && (
        <span className="form-field__helper">{helperText}</span>
      )}
    </div>
  );
};
