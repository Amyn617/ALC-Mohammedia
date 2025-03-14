import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { routes } from "../routes/routeConfig";

const defaultLanguage = {
  code: "en",
  name: "English",
  flag: "https://flagsapi.com/US/flat/64.png",
};

const NavBar = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [sidebarActive, setSidebarActive] = useState(false);

  const { language, setLanguage } = useContext(LanguageContext);
  const { t } = useContext(LanguageContext);

  const sidebarRef = useRef(null);

  const handleMouseEnter = (key) => setActiveDropdown(key);
  const handleMouseLeave = () => setActiveDropdown(null);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setActiveDropdown(null);
    console.log(`Language changed to: ${lang}`);
  };

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      code: "fr",
      name: "Français",
      flag: "https://flagsapi.com/FR/flat/64.png",
    },
    {
      code: "sp",
      name: "Español",
      flag: "https://flagsapi.com/ES/flat/64.png",
    },
    {
      code: "ar",
      name: "العربية",
      flag: "https://flagsapi.com/MA/flat/64.png",
    },
  ];

  const handleClickOutside = useCallback(
    (event) => {
      if (
        sidebarActive &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarActive(false);
      }
    },
    [sidebarActive]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarActive, handleClickOutside]);

  const currentLanguage =
    languages.find((lang) => lang.code === language) || defaultLanguage;

  const handleNavigation = (path, section = null) => {
    setActiveDropdown(null);
    setSidebarActive(false);

    if (section) {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const englishSections =
    routes.find((r) => r.path === "/english-program")?.sections || [];
  const frenchSections =
    routes.find((r) => r.path === "/french-program")?.sections || [];

  return (
    <div className="sticky z-50 top-0">
      <div className="flex items-center justify-between px-10 xl:px-20 bg-white shadow-md">
        <Link to="/" onClick={() => handleNavigation("/")}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/svg/logo.svg`}
            alt="ALC Mohammedia"
            className="w-56 lg:w-48 py-6"
          />
        </Link>
        <div
          className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
            sidebarActive ? "opacity-50 visible" : "opacity-0 invisible"
          }`}
        />

        <ul
          dir={`${language === "ar" ? "rtl" : "ltr"}`}
          ref={sidebarRef}
          className={`hidden gap-10 max-lg:flex max-xl:gap-6 max-lg:flex-col max-lg:z-50 max-lg:text-white max-lg:bg-blue-900 max-lg:absolute max-lg:top-0 max-lg:px-12 max-lg:py-20 max-lg:h-[100vh] max-lg:transition-all max-lg:duration-500 max-lg:ease-in-out lg:flex ${
            sidebarActive
              ? "max-lg:translate-x-0 max-lg:left-0 opacity-100"
              : "max-lg:-translate-x-full max-lg:left-0 max-lg:opacity-0"
          }`}
        >
          <li>
            <Link
              to="/"
              onClick={() => handleNavigation("/")}
              className="hover:text-sky-600 transition-all navbar-link"
            >
              {t("home")}
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("registration")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/registration"
              onClick={() => handleNavigation("/registration")}
              className="flex items-center hover:text-sky-600 transition-all navbar-link"
            >
              {t("registration")}
            </Link>
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("english")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center hover:text-sky-600 transition-all navbar-link">
              {t("english_program")}
              <FaChevronDown className="ml-2 text-sm" />
            </div>
            <ul
              className={`${
                activeDropdown === "english"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              } absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50`}
            >
              {englishSections.map((section) => (
                <li key={section}>
                  <Link
                    to={`/english-program/${section}`}
                    onClick={() =>
                      handleNavigation("/english-program", section)
                    }
                    className="p-2 block hover:bg-sky-300 max-xl:text-black"
                  >
                    {t(section.replace(/-/g, "_"))}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("french")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center hover:text-sky-600 transition-all navbar-link">
              {t("french_program")}
              <FaChevronDown className="ml-2 text-sm" />
            </div>
            <ul
              className={`${
                activeDropdown === "french"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              } absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50`}
            >
              {frenchSections.map((section) => (
                <li key={section}>
                  <Link
                    to={`/french-program/${section}`}
                    onClick={() => handleNavigation("/french-program", section)}
                    className="p-2 block hover:bg-sky-300 max-xl:text-black"
                  >
                    {t(section.replace(/-/g, "_"))}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("join")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/join"
              onClick={() => handleNavigation("/join")}
              className="flex items-center hover:text-sky-600 transition-all navbar-link"
            >
              {t("join")}
            </Link>
          </li>
          <li>
            <Link
              to="/clubs"
              onClick={() => handleNavigation("/clubs")}
              className="hover:text-sky-600 transition-all navbar-link"
            >
              {t("clubs")}
            </Link>
          </li>
        </ul>

        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("language")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center cursor-pointer">
            <img
              src={currentLanguage.flag}
              width="30"
              alt={currentLanguage.code}
            />
            <FaChevronDown className="ml-2 text-sm" />
          </div>
          <ul
            className={`${
              activeDropdown === "language"
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible translate-y-2"
            } absolute top-full right-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[150px] transition-all duration-300 ease-in-out z-50`}
          >
            {languages
              .filter((lang) => lang.code !== language)
              .map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => handleLanguageChange(lang.code)}
                    className="w-full p-2 flex items-center hover:bg-sky-300 cursor-pointer"
                  >
                    <img
                      src={lang.flag}
                      width="20"
                      alt={lang.name}
                      className="mr-2"
                    />
                    {lang.name}
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setSidebarActive((prev) => !prev)}
        >
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
