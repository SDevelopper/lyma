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
                  <Link  className="text-black/60" href="/supplement">SUPPLEMENT</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link  className="text-black/60" href="/laser">LASER</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
                 <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link  className="text-black/60" href="/reviews">REVIEWS</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link  className="text-black/60" href="/journal">JOURNAL</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link  className="text-black/60" href="/about">ABOUT</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Link href="/">
        <h2 className="text-2xl font-bold text-center">LYMA</h2>
        </Link>

        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link  className="text-black/60" href="/support">HELP & SUPPORT</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link  className="text-black/60" href="/activate">ACTIVATE</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link className="text-black/60" href="/account">ACCOUNT</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
          
            </NavigationMenuList>
             <Button className="min-w-[64px] h-[23px] rounded-none ml-[70px]">BUY</Button>
          </NavigationMenu>
          
        </div>

      </div>
    </div>
  )
}

