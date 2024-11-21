import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Nav: React.FC = () => {
  const { t } = useTranslation();

return(
    <nav className="hidden md:flex space-x-4">
          <Link className=" text-lg text-gray-400 hover:text-white" to="/">{t("header.home")}</Link>
          <Link className=" text-lg text-gray-400 hover:text-white" to="/Write">{t("header.write")}</Link>
          <Link className=" text-lg text-gray-400 hover:text-white" to="/About">{t("header.about")}</Link>
        </nav>
)

}

export default Nav;