import React from "react";
import PropTypes from "prop-types";
import {
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
// import NavigationService from "../../services/navigationService";
import { useNavigation } from "@react-navigation/native";
const MenuIcon = (style) => <Icon {...style} name="menu-outline" />;

const TopNavigatorComponent = ({
  title,
  subtitle,
  alignment,
  accessoryLeft,
  accessoryRight,
  titleStyle,
  subtitleStyle,
  isRTL,
}) => {
  const navigation = useNavigation();
  const navigateBack = () => {
    console.log("GO BACK");
    navigation.navigate("ProductDetails");
    // NavigationService.goBack();
  };

  const BackIcon = (style) => (
    <Icon
      {...style}
      transform={[{ scaleX: isRTL ? -1 : 1 }]}
      name="arrow-back"
    />
  );

  const openDrawer = () => {
    console.log("GO drawer");

    // NavigationService.openDrawer();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const DrawerAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={openDrawer} />
  );

  return (
    <>
      <TopNavigation
        title={title}
        style={{ backgroundColor: "red" }}
        subtitle={subtitle}
        alignment={alignment}
        accessoryLeft={accessoryLeft === "back" ? BackAction : DrawerAction}
        accessoryRight={accessoryRight === "up" ? BackAction : DrawerAction}
        // titleStyle={titleStyle}
        // subtitleStyle={subtitleStyle}
      />
      <Divider />
    </>
  );
};

TopNavigatorComponent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  alignment: PropTypes.oneOf(["start", "center"]),
  accessoryLeft: PropTypes.oneOf(["back", "menu"]),
  accessoryRight: PropTypes.arrayOf(PropTypes.element),
  // titleStyle: PropTypes.shape({}),
  // subtitleStyle: PropTypes.shape({}),
  isRTL: PropTypes.bool,
};

TopNavigatorComponent.defaultProps = {
  title: "",
  subtitle: "",
  alignment: "start",
  accessoryLeft: "back",
  accessoryRight: [],
  // titleStyle: {},
  // subtitleStyle: {},
};

export const TopNavigator = TopNavigatorComponent;
