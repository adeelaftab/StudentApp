import LocalizedStrings from 'react-native-localization';
import arabic from './ar';
import english from './en';

const translation = new LocalizedStrings({
    ar: arabic,
    en: english
});

translation.setLanguage('en');
export const changeLanguage = (languageKey) => {
    translation.setLanguage(languageKey)
}
export default translation;