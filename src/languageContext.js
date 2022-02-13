import React from "react";

export const languages = {
  en: {
    langKey: "en",
    darAlSalam: "Dar Al-Salam Center",
    hello: "hello",
  },
  ar: {
    langKey: "ar",
    darAlSalam: "مركز دار السلام",
    hello: "مرحبا",
  },
};

const LanguageContext = React.createContext(languages.ar);

export default LanguageContext;
