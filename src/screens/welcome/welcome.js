import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Text, List, Button, Icon } from "@ui-kitten/components";
import { Screen } from "../../components";
import api from "../../services/api";

const renderItemAccessory = (style) => <Button style={style}>FOLLOW</Button>;

const renderItemIcon = (style) => <Icon {...style} name="person" />;

export const WelcomeScreen = ({ navigation }) => {
  const [{ data, loading, error }, excute] = api.useAxios("/users");
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers((state) => [...state, ...data.data]);
      setPage((state) => (state += 1));
    }
  }, [data]);
  console.tron.log("users", users);

  const renderItem = ({ item }) => (
    <List
      title={`${item.first_name} ${item.last_name}`}
      description={item.email}
      icon={renderItemIcon}
      accessoryLeft={renderItemAccessory}
      onPress={() => navigation.navigate("details")}
    />
  );

  const renderList = () => {
    if (loading) {
      return <Text>loading...</Text>;
    }
    if (error) {
      return <Text>{error.message}</Text>;
    }
    return <List data={users} renderItem={renderItem} />;
  };

  const fetchMore = () => {
    excute({ url: "users", params: { page } });
  };

  return (
    <Screen
      navCofig={{ leftControl: "menu", title: "Home", alignment: "center" }}
    >
      <Button onPress={fetchMore}>more</Button>
      {renderList()}
    </Screen>
  );
};

WelcomeScreen.propTypes = {
  item: PropTypes.shape({}),
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
// export const WelcomeScreen = ({navigation}) => {
//   return (
//     <Screen navCofig={{title: "FFFFFFF", subtitle: "sssss"}}>
//       <Text>fdfdfdfd</Text>
//     </Screen>
//   );
// };
