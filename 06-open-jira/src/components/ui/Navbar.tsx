import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography, Link } from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { UIContext } from "@/context/ui";
import NextLink from "next/link";

type Props = {};

export const Navbar = (props: Props) => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuSharpIcon />
        </IconButton>
        <NextLink href="/" passHref legacyBehavior>
          <Link underline="none" color="white">
            <Typography>OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
