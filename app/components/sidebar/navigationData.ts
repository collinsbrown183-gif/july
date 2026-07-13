/**
 * Navigation items configuration
 */

import { NavItem } from "./types";

export const navigationItems: NavItem[] = [
  {
    id: "staking",
    label: "Staking",
    href: "/staking",
    icon: "stake",
    expandable: true,
  },
  {
    id: "history",
    label: "History",
    href: "/history",
    icon: "history",
  },
  {
    id: "swap",
    label: "Swap",
    href: "/swap",
    icon: "swap",
  },
  {
    id: "bridge",
    label: "Bridge",
    href: "/bridge",
    icon: "bridge",
    expandable: true,
  },
  {
    id: "farm",
    label: "Farm",
    href: "/farm",
    icon: "farm",
  },
  {
    id: "governance",
    label: "Governance",
    href: "/governance",
    icon: "governance",
  },
  {
    id: "ai-agent",
    label: "AI Agent",
    href: "https://ai.onyx.org/",
    icon: "ai-agent",
    badge: "New",
    external: true,
  },
  {
    id: "points",
    label: "Points",
    href: "/points",
    icon: "points",
  },
  {
    id: "card",
    label: "Card",
    href: "/card",
    icon: "card",
    badge: "Soon",
  },
  {
    id: "payments",
    label: "Payments",
    href: "/payments",
    icon: "payments",
    badge: "Soon",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    href: "/enterprise",
    icon: "enterprise",
    badge: "Soon",
  },
];
