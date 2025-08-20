/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import type { Errors } from "../../../types/type";
import { validateScheme } from "../schemas/loginScheme";

export function useValidateTextField(data: {
  login: string;
  password: string;
}) {
  const [errors, setErrors] = useState({} as Errors);
  const validate = useCallback(async () => {
    try {
      await validateScheme.validate(data);
      setErrors({});
      return true;
    } catch (err: any) {
      setErrors({ [err.path]: err.message });
      return false;
    }
  }, [data]);

  useEffect(() => {
    validate();
  }, [data]);

  return {
    errors,
  };
}
