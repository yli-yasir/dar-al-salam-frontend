import React from "react";

export const languages = {
  en: {
    langKey: "en",
    darAlSalam: "Dar Al-Salam Center",
    drAliClinic: "Dr Ali's Clinic",
    drShamamClinic: "Dr Shamam's Clinic",
    hello: "hello",
    contactUs: "Contact Us",
    contact: "Contact",
    centerAddress: "Center Address",
    addressDescription: "mansour....",
    about: "About Us",
    aboutDetails: "The center was founded in...",
    facebook: "facebook",
    phoneNumber: "Phone Number",
  },
  ar: {
    langKey: "ar",
    darAlSalam: "مركز دار السلام",
    drAliClinic: "عيادة الدكتور علي",
    drShamamClinic: "عيادة الدكتورة شمم",
    hello: "مرحبا",
    contactUs: "تواصل معنا",
    contact: "تواصل مع",
    centerAddress: "عنوان المركز",
    addressDescription: "المنصور...",
    about: "معلومات عنا",
    aboutDetails: "تم تاسيس المركز في سنة...",
    facebook: "فيسبوك",
    phoneNumber: "رقم الهاتف",
  },
};

const LanguageContext = React.createContext([languages.ar, () => {}]);

export default LanguageContext;
