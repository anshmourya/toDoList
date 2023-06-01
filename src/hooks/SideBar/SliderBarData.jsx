import React, { useState, createContext, useEffect } from "react";

export const SliderBar = createContext();

export const SliderBarProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [openStyle, setOpenStyle] = useState(open ? "240px" : "70px");
  useEffect(() => {
    setOpenStyle(open ? "240px" : "70px");
  }, [open]);
  return (
    <SliderBar.Provider value={{ open, setOpen, openStyle }}>
      {children}
    </SliderBar.Provider>
  );
};
