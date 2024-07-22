import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GeneralContainer = styled(Box)(({theme}) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  minWidth: "500px",
  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
  }
}));

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: "bold",
  color: theme.palette.text.primary,
  marginTop: "1rem",
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.grey[500],
  marginTop: "1rem",
  "& a": {
    color: "inherit",
    fontWeight: "600",
    "&:visited": {
      color: "inherit",
    },
  },
}));

export const GoogleButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "none",
  width: "100%",
  height: "3rem",
  backgroundColor: "#DB4437",
  borderRadius: "6rem",
  color: theme.palette.text.primary,
  fontWeight: "600",
  border: `1px solid ${theme.palette.text.primary}`,
  marginTop: "1rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#c53b2f",
  },
}));

export const DividerBox = styled(Container)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "1rem",
  width: "100%",
}));

export const Subtitle2 = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.grey[500],
  width: "100%",
  textTransform: "uppercase",
}));

export const InputBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  marginTop: "1rem",
}));

export const Label = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

export const InputStyled = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "6rem",
  marginTop: "0.5rem",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "0.5rem 1rem",
    color: theme.palette.secondary.main,
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.secondary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
}));

export const SignInButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  width: "100%",
  height: "3rem",
  backgroundColor: theme.palette.secondary.contrastText,
  borderRadius: "6rem",
  color: theme.palette.secondary.main,
  fontWeight: "600",
  marginTop: "1rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#e6c000",
  },
}));
