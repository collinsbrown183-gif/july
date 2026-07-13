/**
 * Type definitions for Sidebar components
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
  badge?: "New" | "Soon";
  external?: boolean;
  expandable?: boolean;
  subItems?: NavItem[];
}

export interface SidebarProps {
  className?: string;
}

export interface NavigationItemProps {
  item: NavItem;
  isActive?: boolean;
  onClick?: () => void;
}

export interface ExpandableNavItemProps {
  item: NavItem;
  isActive?: boolean;
  onToggle?: () => void;
  isExpanded?: boolean;
}

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}
