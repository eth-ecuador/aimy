import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  icon: LucideIcon;
  url: string;
}

export interface NavigationLinkProps extends NavigationItem {
  isActive: boolean;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  activeClassName?: string;
}
