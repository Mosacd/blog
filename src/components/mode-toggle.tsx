import { Moon, Sun } from "lucide-react"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useTheme } from "./theme-provider"
import { useTranslation } from "react-i18next";

export function ModeToggle() {
  const { t } = useTranslation();
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon">
      {/* Sun Icon */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-black transition-all dark:-rotate-90 dark:scale-0 dark:text-white" />
      {/* Moon Icon */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-black transition-all dark:rotate-0 dark:scale-100 dark:text-white" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    {/* Light Mode Option */}
    <DropdownMenuItem
      onClick={() => setTheme("light")}
      className="text-black dark:text-white"
    >
      {t("header.light")}
    </DropdownMenuItem>
    {/* Dark Mode Option */}
    <DropdownMenuItem
      onClick={() => setTheme("dark")}
      className="text-black dark:text-white"
    >
      {t("header.dark")}
    </DropdownMenuItem>
    {/* System Mode Option */}
    <DropdownMenuItem
      onClick={() => setTheme("system")}
      className="text-black dark:text-white"
    >
      {t("header.system")}
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}
