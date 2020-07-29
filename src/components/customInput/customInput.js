import React from "react";
import PropTypes from "prop-types";
import { StyleService, useStyleSheet, Input } from "@ui-kitten/components";
import { Controller } from "react-hook-form";
import { translate } from "../../i18n";

export const CustomInput = ({
  name,
  control,
  onChange,
  error,
  label,
  placeholder,
  ...rest
}) => {
  const styles = useStyleSheet(themedStyles);

  const { isSubmitted } = control.formState;
  let status = "basic";
  if (isSubmitted) {
    status = error ? "danger" : "success";
  }

  return (
    <Controller
      as={<Input />}
      control={control}
      name={name}
      onChange={onChange}
      label={
        label
          ? translate(`form.${label}`, { defaultValue: label })
          : translate(`form.${name}`)
      }
      placeholder={
        placeholder
          ? translate(`form.${placeholder}`, { defaultValue: placeholder })
          : translate(`form.${name}`)
      }
      status={status}
      caption={error ? error.message : ""}
      captionStyle={styles.captionStyle}
      labelStyle={styles.labelStyle}
      autoCapitalize="none"
      {...rest}
    />
  );
};

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.shape({
    formState: PropTypes.shape({
      isSubmitted: PropTypes.bool,
    }),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

CustomInput.defaultProps = {
  error: null,
  label: "",
  placeholder: "",
};

const themedStyles = StyleService.create({
  captionStyle: {
    color: "color-danger-default", // <-- Eva Theme Variable
  },
  labelStyle: {
    textTransform: "capitalize",
  },
});
