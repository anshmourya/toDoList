import React, { useContext, useEffect } from "react";
import { SliderBar } from "../../hooks/SideBar/SliderBarData";
import { ListData } from "../../hooks/ListHooks/ListData";
import { BsArrowLeft } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import SaveBtn from "../buttons/Editbtns/SaveBtn";

const drawerWidth = 287;

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
      borderLeft: "2px solid #242731",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "black",
      color: "white",
      borderLeft: "2px solid #242731",
      top: "56px",
      width: 0,
    },
  }),
}));

function RightBar() {
  const { rightBarOpen, setRightBarOpen } = useContext(SliderBar);
  const { addTodo, todoData, setTodoData } = useContext(ListData);

  const handleSaveTodo = () => {
    if (todoData.id === "") {
      setTodoData((prevTodoData) => ({
        ...prevTodoData,
        id: prevTodoData.title,
      }));

      console.log(todoData); // This may still log the previous value

      // Call addTodo inside the callback function to ensure the updated todoData is used
      setTodoData((updatedTodoData) => {
        addTodo(updatedTodoData, false);
        setRightBarOpen(false);
        return updatedTodoData; // Return the updated todoData if needed
      });
    } else {
      console.log("else");
      addTodo(todoData, true);
      setRightBarOpen(false);
    }
  };
  return (
    <>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={rightBarOpen}
        className="relative"
        anchor="right"
        sx={{
          zIndex: 1201,
          "& .MuiPaper-root": {
            top: "56px",
          },
          ...(!rightBarOpen && {
            "& .MuiPaper-root": {
              top: "56px",
              width: 0,
            },
          }),
        }}
      >
        <div className="flex items-center gap-4 p-2">
          <BsArrowLeft
            onClick={() => setRightBarOpen(!rightBarOpen)}
            className="cursor-pointer"
          />
          <span className="text-lg font-medium">Edit Todo</span>
        </div>

        <input
          type="text"
          className="p-2 m-2 capitalize bg-gray-800 outline-none rounded-xl w-64 h-12 text-gray-400 text-xl font-medium"
          placeholder="Add Todo Title"
          value={todoData.title || ""}
          onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="5"
          className="p-2 m-2 capitalize bg-gray-800 outline-none rounded-xl w-64 h-28 resize-none text-base text-gray-400 "
          placeholder="Add Todo Description"
          value={todoData.desc || ""}
          onChange={(e) => setTodoData({ ...todoData, desc: e.target.value })}
        ></textarea>
        <SaveBtn fun={handleSaveTodo} />
      </Drawer>
    </>
  );
}

export default RightBar;
