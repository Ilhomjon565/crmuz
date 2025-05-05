"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="EduCRM" width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-bold text-primary">EduCRM</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#xizmatlar" className="text-sm font-medium transition-colors hover:text-primary">
            Xizmatlar
          </Link>
          <Link href="/#ustunliklar" className="text-sm font-medium transition-colors hover:text-primary">
            Ustunliklar
          </Link>
          <Link href="/#narxlar" className="text-sm font-medium transition-colors hover:text-primary">
            Narxlar
          </Link>
          <Link href="/#boglanish" className="text-sm font-medium transition-colors hover:text-primary">
            Bog'lanish
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button asChild className="hidden md:inline-flex">
            <Link href="/form/demo">Demo versiya</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/#xizmatlar"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Xizmatlar
                </Link>
                <Link
                  href="/#ustunliklar"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Ustunliklar
                </Link>
                <Link
                  href="/#narxlar"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Narxlar
                </Link>
                <Link
                  href="/#boglanish"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Bog'lanish
                </Link>
                <Button asChild className="mt-4">
                  <Link href="/form/demo" onClick={() => setIsOpen(false)}>
                    Demo versiya
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
