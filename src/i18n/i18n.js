import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import en from "./en.json";
import ar from "./ar.json";
import { store } from "../redux/store";

i18n.fallbacks = true;
i18n.translations = { en, ar };

const fallback = { languageTag: "en", isRTL: false };
const { languageTag } =
  RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback;
i18n.locale = languageTag;

store.subscribe(() => {
  const state = store.getState();
  const { locale } = state.langState;
  i18n.locale = locale;
});
