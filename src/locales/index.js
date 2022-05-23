import { LANGUAGE } from "../tools/constants";
import { ru } from "./RU";
import { uz } from "./UZ";

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
  return getLanguage() === "ru"
    ? ru[word]
    : getLanguage() === "uz"
    ? uz[word]
    : ru[word];
};
