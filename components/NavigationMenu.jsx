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
      <NavigationMenuList>
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
