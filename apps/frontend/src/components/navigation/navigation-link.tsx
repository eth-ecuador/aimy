import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavigationLinkProps } from "@/types/navigation";

export function NavigationLink({
  url,
  icon: Icon,
  title,
  isActive,
  className,
  iconClassName,
  textClassName,
  activeClassName,
}: NavigationLinkProps) {
  return (
    <Link
      href={url}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        isActive && "bg-accent text-accent-foreground",
        isActive && activeClassName,
        className
      )}
    >
      <Icon className={cn("size-4", iconClassName)} />
      <span className={cn("text-sm", textClassName)}>{title}</span>
    </Link>
  );
}
