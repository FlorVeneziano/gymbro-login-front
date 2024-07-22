import { Trans, useTranslation } from "react-i18next";
import ChromeIcon from "../../assets/icons/ChromeIcon";
import Line from "../../assets/icons/Line";
import {
  DividerBox,
  GeneralContainer,
  GoogleButton,
  InputBox,
  InputStyled,
  Label,
  SignInButton,
  Subtitle,
  Subtitle2,
  Title,
} from "./styles";
import { useRegister } from "./useRegister";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { Link } from "react-router-dom";

export const Register = () => {
  const { handleChange, isError, onSubmit, isLoading } = useRegister();
  const { t } = useTranslation("register");
  return (
    <GeneralContainer>
      <Trans>
        <Title>{t("welcomeTitle")}</Title>
        <Subtitle>{t("welcomeSubtitle")}</Subtitle>
      </Trans>
      <GoogleButton startIcon={<ChromeIcon />}>{t("OAuth")}</GoogleButton>
      <DividerBox>
        <Line />
        <Subtitle2>{t("continueWith")}</Subtitle2>
        <Line />
      </DividerBox>

      <InputBox>
        <Label>{t("email")}</Label>
        <InputStyled
          placeholder={t("exampleEmail")}
          name="email"
          onChange={handleChange}
          error={isError}
          helperText={isError ?? t("error")}
        />
      </InputBox>
      <InputBox>
        <Label>{t("password")}</Label>
        <InputStyled
          placeholder={t("examplePassword")}
          name="password"
          onChange={handleChange}
          type="password"
          error={isError}
          helperText={isError ?? t("error")}
        />
      </InputBox>
      <InputBox>
        <Label>{t("confirmPassword")}</Label>
        <InputStyled
          placeholder={t("examplePassword")}
          name="confirmPassword"
          onChange={handleChange} // hacer fn para confirmarcion de contraseña
          type="password"
          error={isError} // hacer error de confirmacion de contraseña
          helperText={isError ?? t("error")}
        />
      </InputBox>
      <SignInButton onClick={onSubmit}>{t("register")}</SignInButton>
      {isLoading && <CircularProgress sx={{ mt: "1rem" }} />}

      <Subtitle>
        {t("account")} {" "}
        <Link to="/">{t("signIn")}</Link>
      </Subtitle>
    </GeneralContainer>
  );
};
