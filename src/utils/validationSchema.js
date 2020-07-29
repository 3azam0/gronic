import React from "react";
import * as yup from "yup";
import { translate } from "../i18n";

yup.setLocale({
  mixed: {
    required: ({ path }) =>
      translate("validation.required", { path: translate(`form.${path}`) }),
  },
  string: {
    length: ({ path, length }) =>
      translate("validation.length", {
        path: translate(`form.${path}`),
        length,
      }),
    min: ({ path, min }) =>
      translate("validation.minString", {
        path: translate(`form.${path}`),
        min,
      }),
    max: ({ path, max }) =>
      translate("validation.maxString", {
        path: translate(`form.${path}`),
        max,
      }),
    email: ({ path }) =>
      translate("validation.email", { path: translate(`form.${path}`) }),
  },
  number: {
    min: ({ path, min }) =>
      translate("validation.minNumber", {
        path: translate(`form.${path}`),
        min,
      }),
    max: ({ path, max }) =>
      translate("validation.maxNumber", {
        path: translate(`form.${path}`),
        max,
      }),
  },
});

export const SignupSchema = yup.object().shape({
  name: yup.string().required().min(2).max(30),
  email: yup.string().required().email(),
  mobile: yup.string().required().length(11),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], () =>
      translate("validation.confirmPasswordNotMatch"),
    )
    .required(),
});


export const LoginSchema = yup.object().shape({
  name: yup.string().required().min(2).max(30),
  email: yup.string().required().email(),
  password: yup.string().required(),
  
});
