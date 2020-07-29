import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { Drawer, Icon, DrawerHeaderFooter, Button } from "@ui-kitten/components";
import { translate } from "../../i18n";
import { changeLang } from "../../redux/actions";

const PersonIcon = style => <Icon {...style} name="person-outline" />;

const BellIcon = style => <Icon {...style} name="bell-outline" />;

const GlobeIcon = style => <Icon {...style} name="globe-outline" />;

const DrawerNavigatorComponent = ({ navigation, locale, changeLang: changeLangFun }) => {
  const LogoutIcon = style => (
    <Icon {...style} transform={[{ scaleX: locale === "ar" ? -1 : 1 }]} name="log-out" />
  );

  const LogoutButton = style => <Button style={style} icon={LogoutIcon} />;

  const otherLang = locale === "en" ? "ar" : "en";
  const drawerData = [
    {
      title: "Welcome",
      icon: PersonIcon,
      routeName: "welcome",
    },
    {
      title: "Details",
      icon: BellIcon,
      routeName: "details",
    },
    {
      title: translate(otherLang),
      icon: GlobeIcon,
      routeName: null,
      action: changeLangFun,
    },
  ];

  const onSelect = index => {
    const route = drawerData[index];
    if (route.routeName) {
      navigation.navigate(route.routeName);
    } else {
      route.action();
    }
  };

  const Header = () => (
    <DrawerHeaderFooter title="John Doe" description="React Native Developer" icon={PersonIcon} />
  );

  const Footer = () => (
    <DrawerHeaderFooter
      title="John Doe"
      description="React Native Developer"
      accessory={LogoutButton}
    />
  );

  return (
    <SafeAreaView>
      <Drawer data={drawerData} onSelect={onSelect} header={Header} footer={Footer} />
    </SafeAreaView>
  );
};

DrawerNavigatorComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  locale: PropTypes.string.isRequired,
  changeLang: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    locale: state.langState.locale,
  };
}

export const DrawerNavigator = connect(mapStateToProps, { changeLang })(DrawerNavigatorComponent);
