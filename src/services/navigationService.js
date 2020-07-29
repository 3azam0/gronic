import { NavigationActions } from "react-navigation";
import { DrawerActions } from "react-navigation-drawer";

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function goBack() {
  navigator.dispatch(NavigationActions.back());
}

function openDrawer() {
  navigator.dispatch(DrawerActions.openDrawer());
}

// add other navigation functions that you need and export them

export default {
  navigate,
  goBack,
  openDrawer,
  setTopLevelNavigator,
};
