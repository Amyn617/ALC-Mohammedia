import { createContext, useState, useEffect } from 'react'; 
import en from "../translations/en.json";
import ar from "../translations/ar.json";
import fr from "../translations/fr.json";
import sp from "../translations/sp.json";

const translations = { en, ar, fr, sp };

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem('language');
  const [language, setLanguage] = useState(storedLanguage || 'en');
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key) => translations[language]?.[key] || key;
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
