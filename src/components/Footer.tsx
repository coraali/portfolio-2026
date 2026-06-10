import { useTranslation } from "react-i18next";
import { profile } from "../data/resume";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {year} {profile.name} ({profile.nameEn})
        </p>
        <p className="site-footer__note">{t("footer.note")}</p>
      </div>
    </footer>
  );
}
