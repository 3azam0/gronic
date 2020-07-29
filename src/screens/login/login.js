import React,{useState} from "react";
import { Button, Icon, Divider, Layout, Text } from "@ui-kitten/components";
import { Screen, CustomInput } from "../../components";
import { useForm } from 'react-hook-form';
import { StyleSheet, TouchableOpacity ,ImageBackground , Image } from "react-native";
import { translate } from "../../i18n";
import Toast from "react-native-root-toast";
import api from "../../services/api";
import { LoginSchema } from '../../utils/validationSchema';

const image = { uri: "https://reactjs.org/logo-og.png" };
export const LoginScreen = ({navigation}) => {
  
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [{ loading }, execute] = api.useAxios(
    {
      url: 'http://ozooma.net/en/api/registerUser',
      method: 'post',
    },
    { manual: true },
  );
  const { handleSubmit, errors, control, reset, setError } = useForm({
    validationSchema: LoginSchema,
  });
  const onChange = args => ({ value: args[0].nativeEvent.text });
  const onIconPress = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = style => <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'} />;

  const onSubmit = data => {
    execute({ data })
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
      .catch(err => {
        if (err.validationErrors) {
          setError(err.validationErrors);
        }
      });
  };
  ;

  return (
    <Screen
      type="fixed"
      hasNav={false}
      style={{ flex: 1,
    flexDirection: "column"}}
     >
     <ImageBackground  source={image} style={styles.image}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
        
        <Text style={styles.txt} category="h6">
        dsdsd
        </Text>
        <Layout>
         
          <CustomInput
            name="email"
            control={control}
            onChange={onChange}
            error={errors.email}
            keyboardType="email-address"
            style={styles.inpt}
            labelStyle={styles.lbl}
            size="large"
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
            style={styles.inpt}
            labelStyle={styles.lbl}
            size="large"
          />
         
        </Layout>
        <Button
          style={styles.bttn}
          onPress={handleSubmit(onSubmit)}
          appearance="filled"
          size="large"
          status="warning">
          fdfdsfd
        </Button>
        <Layout style={styles.now}>
          <Text style={styles.lbls}>By completing this sign Up i agree to :</Text>
          <TouchableOpacity>
            <Text style={styles.rgstrBttn}>terms and condtions</Text>
          </TouchableOpacity>
        </Layout>
      </Layout>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  txt: {
    marginTop: 30,
    marginBottom: 5,
    alignSelf: "center",
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 50,
    borderColor: "#D4D4D4",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "#D4D4D4",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#D4D4D4",
    margin: 10,
  },
  icnsCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  inpt: {
    width: '90%',
    marginTop: 10,
    borderColor: '#000',
  },
  lbl: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
    color: "#8D8D8D",
  },
  now: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    alignItems: 'center',
  },
  lbls: {
    fontSize: 12,
    fontWeight: "400",
    color: "black",
  },
  rgstrBttn: {
    fontSize: 11,
    fontWeight: '700',
    marginLeft: 3,
    color: 'black',
  },
  bttn: {
    width: '90%',
    color: '#F3BB35',
    borderRadius: 5,
    marginTop: 15,
  },
  bttnTxt: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
