import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function LanguageSwitcher() {

    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <button onClick={toggleLanguage}>
            {language === "en" ? "RU" : "EN"}
        </button>
    );
}

export default LanguageSwitcher;

