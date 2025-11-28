"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useUser } from "@clerk/nextjs"

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "/not-found",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "/not-found",
        },
        {
          title: "Starred",
          url: "/not-found",
        },
        {
          title: "Settings",
          url: "/not-found",
        },
      ],
    },
    {
      title: "Models",
      url: "/not-found",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "/not-found",
        },
        {
          title: "Explorer",
          url: "/not-found",
        },
        {
          title: "Quantum",
          url: "/not-found",
        },
      ],
    },
    {
      title: "Documentation",
      url: "/not-found",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/not-found",
        },
        {
          title: "Get Started",
          url: "/not-found",
        },
        {
          title: "Tutorials",
          url: "/not-found",
        },
        {
          title: "Changelog",
          url: "/not-found",
        },
      ],
    },
    {
      title: "Settings",
      url: "/not-found",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/not-found",
        },
        {
          title: "Team",
          url: "/not-found",
        },
        {
          title: "Billing",
          url: "/not-found",
        },
        {
          title: "Limits",
          url: "/not-found",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/not-found",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "/not-found",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "/not-found",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        {user && (
          <NavUser
            user={{
              name: user.fullName || user.username || "User",
              email: user.primaryEmailAddress?.emailAddress || "",
              avatar: user.imageUrl,
            }}
          />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
