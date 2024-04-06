import React, { useContext } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { AUTH_ROUTE, HOME } from "@/navigation/consts";
import { authContext } from "@/contexts/authContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const { isAuth, logout } = useContext(authContext);
  const pathname = usePathname();

  console.log("IsAuth", isAuth);

  return (
    <AppBar position={"relative"}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Бронеатлас
        </Typography>
        {pathname === AUTH_ROUTE ? (
          <Button variant="outlined" color={"inherit"}>
            <Link
              href={HOME}
              style={{ textDecoration: "none", color: "white" }}
            >
              На главную
            </Link>
          </Button>
        ) : (
          <>
            {isAuth ? (
              <Button
                onClick={() => logout()}
                variant="outlined"
                color={"inherit"}
              >
                Выйти
              </Button>
            ) : (
              <Button variant="outlined" color={"inherit"}>
                <Link
                  href={AUTH_ROUTE}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Войти
                </Link>
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
