import React, { useState, createContext, useEffect } from "react";

// Create a new context named SliderBar
export const SliderBar = createContext();

// Create a provider component for the SliderBar context
export const SliderBarProvider = ({ children }) => {
  // Define state variables for 'open', 'rightBarOpen', and 'openStyle'
  const [open, setOpen] = useState(true);
  const [rightBarOpen, setRightBarOpen] = useState(false);
  const [openStyle, setOpenStyle] = useState(open ? "240px" : "70px");

  // Update the 'openStyle' state whenever the 'open' state changes
  useEffect(() => {
    setOpenStyle(open ? "240px" : "70px");
  }, [open]);

  // Render the SliderBar provider with the provided values
  return (
    <SliderBar.Provider
      value={{ open, setOpen, openStyle, rightBarOpen, setRightBarOpen }}
    >
      {children}
    </SliderBar.Provider>
  );
};
