import { Switch } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import * as React from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "loading";
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />;
};

export default ThemeToggle;
