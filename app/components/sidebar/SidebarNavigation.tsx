"use client";

import { usePathname } from "next/navigation";
import NavigationItem from "./NavigationItem";
import ExpandableNavItem from "./ExpandableNavItem";
import { navigationItems } from "./navigationData";

/**
 * SidebarNavigation Component
 * 
 * Main navigation menu with all navigation items
 */
export default function SidebarNavigation({ onItemClick }: { onItemClick?: () => void }) {
  const pathname = usePathname();

  return (
    <nav 
      aria-label="Primary" 
      className="flex-1 py-2"
    >
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;

        if (item.expandable) {
          return (
            <ExpandableNavItem
              key={item.id}
              item={item}
              isActive={isActive}
            />
          );
        }

        return (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={isActive}
            onClick={onItemClick}
          />
        );
      })}
    </nav>
  );
}
