import React from "react";

export const languages = {
  en: {
    langKey: "en",
    darAlSalam: "Dar Al-Salam Center",
    drAliClinic: "Dr Ali's Clinic",
    drShamamClinic: "Dr Shamam's Clinic",
    hello: "hello",
  },
  ar: {
    langKey: "ar",
    darAlSalam: "مركز دار السلام",
    drAliClinic: "عيادة الدكتور علي",
    drShamamClinic: "عيادة الدكتورة شمم",
    hello: "مرحبا",
  },
};

const LanguageContext = React.createContext([languages.ar, () => {}]);

export default LanguageContext;
