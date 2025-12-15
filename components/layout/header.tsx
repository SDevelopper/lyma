"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"


export default function Header() {
  return (
    <div className="container pt-6 pb-2">
      <div className="flex items-center justify-around">
        
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/docs">SUPPLEMENT</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/docs">LASER</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
                 <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/docs">REVIEWS</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/docs">JOURNAL</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/docs">ABOUT</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>


        <h2 className="text-2xl font-bold text-center">LYMA</h2>


        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">HELP & SUPPORT</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">ACTIVATE</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">ACCOUNT</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
          
            </NavigationMenuList>
             <Button className="ml-[70px]">BUY</Button>
          </NavigationMenu>
          
        </div>

      </div>
    </div>
  )
}

