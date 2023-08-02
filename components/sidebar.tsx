"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "DashBoard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#697397] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-10 h-10 mr-5">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            TECH AI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link href={route.href} key={route.href}>
              <div className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
