import React, { useContext } from "react";
import { SliderBar } from "../../hooks/SideBar/SliderBarData";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import BuyBtn from "../buttons/BuyBtn";
import BalBtn from "../buttons/BalBtn";
import LanguageIcon from "@mui/icons-material/Language";
import Themebtn from "../buttons/tooglebtn/themebtn";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  borderRight: "2px solid #242731",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "black",
      color: "white",
      borderRight: "2px solid #242731",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "black",
      color: "white",
      borderRight: "2px solid #242731",
    },
  }),
}));

function SideBar() {
  const theme = useTheme();
  const { open, setOpen } = useContext(SliderBar);

  return (
    <>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        className="relative"
        sx={{ zIndex: 1201 }}
      >
        {open ? (
          <>
            <DrawerHeader
              style={{
                borderBottom: "1px solid #353945",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="a">
                <h2
                  style={{
                    fontSize: "13px",
                    color: "#fff",
                  }}
                >
                  NAME
                </h2>
              </div>
              <IconButton onClick={() => setOpen(!open)}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon className="text-white" />
                ) : (
                  <>
                    <ChevronLeftIcon className="text-white" />
                  </>
                )}
              </IconButton>
            </DrawerHeader>
          </>
        ) : (
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon className="text-white" />
            ) : (
              <ChevronLeftIcon className="text-white" />
            )}
          </IconButton>
        )}
        <Divider />

        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text) => {
            return (
              <ListItem
                key={text}
                sx={{
                  display: "block",
                  transition: "0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: "black",
                    "& .MuiTypography-root": {
                      color: "#fff",
                    },
                    "& .MuiButtonBase-root": {
                      backgroundColor: "#353945",
                      borderRadius: "12px",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#fff",
                    },
                  },
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 1.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MailIcon className="text-gray-500" />
                    {open && (
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                        className="px-3 text-sm font-semibold text-gray-500 capitalize"
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {open ? (
          <ul className="absolute mx-5 bottom-16">
            <li className="flex items-center justify-center gap-4 ">
              <BuyBtn />
              <BalBtn />
            </li>
            <li className="flex items-center justify-start gap-4 mt-5">
              <LanguageIcon />
              <Themebtn />
            </li>
          </ul>
        ) : (
          <></>
        )}
      </Drawer>
    </>
  );
}

export default SideBar;
