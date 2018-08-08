import I18n from 'react-native-i18n';
import en from './locales/en';
import ta from './locales/ta';

I18n.fallbacks = true;

I18n.translations = {
  en,
  ta
};

I18n.locale = "ta";

export default I18n;
