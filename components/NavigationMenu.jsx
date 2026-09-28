"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function DesktopNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-3 space-x-0">
        <NavigationMenuItem>
          <Link
            href="/boernefoedselsdag"
            className="inline-flex items-center gap-2 whitespace-nowrap font-semibold text-[#D65A80]"
          >
            Børnefødselsdag
            <span className="rounded-full bg-[#FDE8EF] px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none text-[#6E3E3A]">
              Ny
            </span>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:block">
          <Link href="/#priser">Priser</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:block">
          <Link href="/galleri">Galleri</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:block">
          <Link href="/abonnement">Abonnement</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="text" asChild>
            <Link href="https://salon-maria.planway.com/">Book tid</Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
