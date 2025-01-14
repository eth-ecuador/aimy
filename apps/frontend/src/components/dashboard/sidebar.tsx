"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LogoWithText } from "@/components/brand/logo-with-text";
import { menuItems, userMenuItems } from "@/lib/navigation";
import { NavigationLink } from "../navigation/navigation-link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="text-primary bg-cyan-900">
      <SidebarHeader className="border-b px-4 py-4 h-16">
        <SidebarMenu>
          <SidebarMenuItem>
            <LogoWithText />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="flex flex-col gap-8 px-4 py-6 justify-between">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavigationLink
                  key={item.url + item.title}
                  url={item.url}
                  icon={item.icon}
                  title={item.title}
                  isActive={pathname === item.url}
                />
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <SidebarMenu className="pt-6 border-t">
          {userMenuItems.map((item) => (
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavigationLink
                  key={item.url + item.title}
                  url={item.url}
                  icon={item.icon}
                  title={item.title}
                  isActive={pathname === item.url}
                />
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="mt-auto border-t p-4">
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AIMY. All rights reserved.
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
