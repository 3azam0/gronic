import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Button, Avatar, Layout, Text } from "@ui-kitten/components";
import { useForm } from "react-hook-form";
import Toast from "react-native-root-toast";
import ImagePicker from "react-native-image-picker";
import { Screen, CustomInput, Spinner } from "../../components";
import { SignupSchema } from "../../utils/validationSchema";
import api from "../../services/api";
import { translate } from "../../i18n";

const IMAGE_ICON = require("../../assets/images/image-icon.png");

export const DetailsScreen = () => {
  const [{ loading }, execute] = api.useAxios(
    {
      url: "https://kaymarts.net/en/api/registerUser",
      method: "post",
    },
    { manual: true },
  );

  const { handleSubmit, errors, control, reset, setError } = useForm({
    validationSchema: SignupSchema,
  });

  const [imgPreview, setImgPreview] = useState(IMAGE_ICON);
  const [img, setImg] = useState(null);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onIconPress = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (style) => (
    <Icon {...style} name={secureTextEntry ? "eye-off" : "eye"} />
  );

  const handleImgPicker = () => {
    const options = {
      title: "Select Avatar",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      // console.tron.log("Response = ", response);

      if (response.didCancel) {
        // console.tron.log("User cancelled image picker");
      } else if (response.error) {
        // console.tron.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        setImgPreview(source);
        setImg({
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });
      }
    });
  };

  const onChange = (args) => ({ value: args[0].nativeEvent.text });

  const onSubmit = (data) => {
    execute({ data: { ...data, img } })
      .then(() => {
        Toast.show(translate("messages.success"), {
          duration: Toast.durations.SHORT,
          position: Toast.positions.CENTER,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          backgroundColor: "#00E096",
        });
      })
      .catch((err) => {
        if (err.validationErrors) {
          setError(err.validationErrors);
        }
      });
  };

  return (
    <Screen
      type="scroll"
      navCofig={{ title: "Details", subtitle: "about" }}
      style={styles.container}
    >
      <TouchableOpacity onPress={handleImgPicker}>
        <Layout level="3" style={styles.avatarContainer}>
          <Avatar size="giant" source={imgPreview} />
          <Text>upload photo</Text>
        </Layout>
      </TouchableOpacity>
      {errors.img && <Text>{errors.img.message}</Text>}

      <CustomInput
        name="name"
        control={control}
        onChange={onChange}
        error={errors.name}
      />

      <CustomInput
        name="email"
        control={control}
        onChange={onChange}
        error={errors.email}
        keyboardType="email-address"
      />

      <CustomInput
        name="mobile"
        control={control}
        onChange={onChange}
        error={errors.mobile}
        keyboardType="phone-pad"
      />

      <CustomInput
        name="password"
        control={control}
        onChange={onChange}
        error={errors.password}
        placeholder="********"
        icon={renderIcon}
        secureTextEntry={secureTextEntry}
        onIconPress={onIconPress}
      />

      <CustomInput
        name="confirmPassword"
        control={control}
        onChange={onChange}
        error={errors.confirmPassword}
        placeholder="********"
        icon={renderIcon}
        secureTextEntry={secureTextEntry}
        onIconPress={onIconPress}
      />

      <Layout style={styles.btnContainer}>
        <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
        <Button
          onPress={() => {
            reset({
              name: "mohamed",
              email: "user@email.com",
              mobile: "12345678900",
              password: "password",
              confirmPassword: "password",
            });
          }}
        >
          Reset
        </Button>
      </Layout>
      <Spinner visible={loading} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
