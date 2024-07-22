import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import { useTranslation } from "react-i18next";
import { GeneralBox, MenuItemStyled, SelectStyled } from "./styles";

const Layout = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("common");

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <Container>
      <GeneralBox sx={{ minWidth: 120 }}>
        <FormControl>
          <SelectStyled defaultValue={i18n.language} onChange={changeLanguage}>
            <MenuItemStyled value="en">{t("languages.en")}</MenuItemStyled>
            <MenuItemStyled value="es">{t("languages.es")}</MenuItemStyled>
          </SelectStyled>
        </FormControl>
      </GeneralBox>
      <Outlet />
    </Container>
  );
};

export default Layout;
