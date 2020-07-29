import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

const PersonIcon = (style) => <Icon {...style} name="person-outline" />;

const BellIcon = (style) => <Icon {...style} name="bell-outline" />;

const tabData = [
  {
    title: 'Welcome',
    icon: PersonIcon,
    routeName: 'welcome',
  },
  {
    title: 'Details',
    icon: BellIcon,
    routeName: 'details',
  },
];

export const BottomTabNavigator = ({navigation}) => {
  const onSelect = (index) => {
    const route = tabData[index];
    navigation.navigate(route.routeName);
  };

  const renderTabs = (tabs) =>
    tabs.map(({title, icon}) => (
      <BottomNavigationTab title={title} icon={icon} key={title} />
    ));

  return (
    <SafeAreaView>
      <BottomNavigation
        selectedIndex={navigation.state.index}
        onSelect={onSelect}>
        {renderTabs(tabData)}
      </BottomNavigation>
    </SafeAreaView>
  );
};

BottomTabNavigator.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      index: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
