import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Footer = () => {
  const { t, language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  return (
    <footer
      className={`bg-no-repeat bg-cover bg-blue-900 text-gray-300 ${
        isArabic ? "text-right" : "text-left"
      }`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/footer-bg.svg)`,
      }}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="px-10 py-12 md:px-24 md:py-16 lg:px-32 lg:py-24 grid gap-10 md:grid-cols-3 lg:grid-cols-4">
        <div className="mb-8">
          <a href="#home" className="block mb-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
              alt={t("alcLogo")}
              className="brightness-0 invert"
            />
          </a>
          <p className="leading-loose text-justify">{t("footerDescription")}</p>
          <br />
          <div className="mt-2">
            <a
              href="https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-red-500 transition duration-300"
            >
              33 Rue de Damas, Mohammedia
            </a>
            <a
              dir="ltr"
              href="tel:+212661545636"
              className="block hover:text-red-500 transition duration-300"
            >
              +212 661-545636
            </a>
            <a
              href="mailto:admin@alcmohammedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-red-500 transition duration-300"
            >
              admin@alcmohammedia.com
            </a>
          </div>
        </div>

        {/* Footer Links Section 1 */}
        <ul className="space-y-4">
          <li className="text-white text-xl font-semibold">
            {t("alcMohammedia")}
          </li>
          <li>
            <a
              href="#home"
              className="hover:text-red-500 transition duration-300 text-gray-300"
            >
              {t("home")}
            </a>
          </li>
          <li>
            <a
              href="#registration"
              className="hover:text-red-500 transition duration-300 text-gray-300"
            >
              {t("registration")}
            </a>
          </li>
          <li>
            <a
              href="#english-program"
              className="hover:text-red-500 transition duration-300 text-gray-300"
            >
              {t("english_program")}
            </a>
          </li>
          <li>
            <a
              href="#french-program"
              className="hover:text-red-500 transition duration-300 text-gray-300"
            >
              {t("french_program")}
            </a>
          </li>
          <li>
            <a
              href="#join"
              className="hover:text-red-500 transition duration-300 text-gray-300"
            >
              {t("join")}
            </a>
          </li>
          <li>
            <a
              href="#clubs"
              className="hover:text-red-500 transition duration-300 text-gray-300"
            >
              {t("clubs")}
            </a>
          </li>
        </ul>

        {/* Footer Links Section 2 */}
        <ul className="space-y-4">
          <li className="text-white text-xl font-semibold">{t("links")}</li>
          <li>
            <a
              href="https://aca.org.ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300 text-gray-300"
            >
              {t("aca")}
            </a>
          </li>
          <li>
            <a
              href="https://aca.org.ma/contact-3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300 text-gray-300"
            >
              {t("allAlcs")}
            </a>
          </li>
        </ul>

        {/* Social Links Section */}
        <div>
          <p className="text-white text-xl font-semibold">{t("contacts")}</p>
          <br />
          <ul dir="ltr" className="flex space-x-4">
            {/** Social Media Icons with hover effects */}
            <li>
              <a
                href="mailto:admin@alcmohammedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition duration-300"
              >
                <i className="fa-solid fa-envelope text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="tel:+212661545636"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition duration-300"
              >
                <i className="fa-solid fa-phone text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ALC.Mohammedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition duration-300"
              >
                <i className="fa-brands fa-facebook text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/alcmohammedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition duration-300"
              >
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition duration-300"
              >
                <i className="fa-solid fa-location-dot text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 p-6">
        <div className="text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} {t("allRightsReserved")}{" "}
            <a
              href="#home"
              className="text-sky-400 hover:text-red-500 transition duration-300"
            >
              {t("alcMohammedia")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
