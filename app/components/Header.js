"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.20),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.20),
  },
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flexGrow: 1,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 2),
    fontSize: "1rem",
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#072e7a", 
          width: "100%", 
          margin: 0, 
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block" },
              fontWeight: "BOLD",
            }}
          >
            BOOKHAVEN
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
            }}
          >
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          </Box>
          <IconButton color="inherit">
            <AccountCircleIcon fontSize="large" />
            <Typography
              variant="subtitle2"
              display={{ xs: "none", sm: "block" }}
            >
              John
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
