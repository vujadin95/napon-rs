"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      enableColorScheme={true}
    >
      {children}
    </ThemeProvider>
  );
};
export default Providers;
