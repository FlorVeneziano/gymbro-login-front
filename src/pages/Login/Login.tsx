import { Trans, useTranslation } from "react-i18next";
import logo from "../../../public/logo.svg";
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
import { useLogin } from "./useLogin";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

export const Login = () => {
  const { handleChange, onSubmit, isLoading, isError } = useLogin();
  const { t } = useTranslation("login");
  return (
    <GeneralContainer>
      <img
        src={logo}
        style={{ maxWidth: "90px" }}
        className="logo gymbro"
        alt="Gymbro logo"
      />
      <Trans>
        <Title>{t("welcomeTitle")}</Title>
      </Trans>
      <Subtitle>{t("welcomeSubtitle")}</Subtitle>
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
      <SignInButton onClick={onSubmit}>{t("login")}</SignInButton>
      {isLoading && <CircularProgress sx={{ mt: "1rem" }} />}

      <Subtitle>
        {t("noAccount")} <a href="/">{t("register")}</a>
      </Subtitle>
    </GeneralContainer>
  );
};
