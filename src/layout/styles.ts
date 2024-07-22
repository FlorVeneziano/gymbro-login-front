import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box/Box";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";

export const GeneralBox = styled(Box)(() => ({
  top: "2rem",
  right: "2rem",
  position: "absolute",
}));

export const SelectStyled = styled(Select)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    "&:focus": {
        outline: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none",
    }
}));

export const MenuItemStyled = styled(MenuItem)(({theme}) => ({
    color: theme.palette.secondary.main,
}));