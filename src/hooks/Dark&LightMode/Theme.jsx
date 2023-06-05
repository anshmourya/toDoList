import React, { createContext, useState } from "react";

export const ThemeMode = createContext();

export const ThemeProvider = ({ children }) => {
  //   const [theme, setTheme] = useState(
  //     JSON.parse(localStorage.getItem("theme")) || "Dark"
  //   );

  const handelTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", JSON.stringify("Light"));
    }
  };

  return (
    <ThemeMode.Provider value={{ handelTheme }}>{children}</ThemeMode.Provider>
  );
};
