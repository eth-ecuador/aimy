import { NavigationItem } from "@/types/navigation";
import { BarChart3, PieChart, Receipt, Settings, User } from "lucide-react";

export const menuItems: NavigationItem[] = [
  { title: "Overview", icon: BarChart3, url: "/overview" },
  { title: "Summary", icon: BarChart3, url: "/summary" },
  { title: "Portfolio", icon: PieChart, url: "/portfolio" },
  { title: "Advisor", icon: PieChart, url: "/advisor" },
  { title: "Investments", icon: PieChart, url: "/investments" },
];

export const userMenuItems: NavigationItem[] = [
  { title: "Profile", icon: User, url: "/settings/profile" },
  { title: "Settings", icon: Settings, url: "/settings/account" },
];
