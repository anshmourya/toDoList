import React, { useState, createContext, useEffect } from "react";

export const SliderBar = createContext();

export const SliderBarProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [rightBarOpen, setRightBarOpen] = useState(false);
  const [openStyle, setOpenStyle] = useState(open ? "240px" : "70px");
  useEffect(() => {
    setOpenStyle(open ? "240px" : "70px");
  }, [open]);
  return (
    <SliderBar.Provider
      value={{ open, setOpen, openStyle, rightBarOpen, setRightBarOpen }}
    >
      {children}
    </SliderBar.Provider>
  );
};
