"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function EnhancedNavbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "bg-background/80 shadow-lg dark:shadow-indigo-500/10" : "bg-background/50"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="EduCRM" width={40} height={40} className="h-10 w-10 drop-shadow-lg" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10"></div>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500">
              EduCRM
            </span>
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex items-center gap-6"
        >
          {["xizmatlar", "ustunliklar", "narxlar", "boglanish"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link href={`/#${item}`} className="text-sm font-medium transition-all hover:text-primary relative group">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <div className="flex items-center gap-2">
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-2 relative"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="hidden md:inline-flex bg-gradient-to-r from-primary to-indigo-600 shadow-lg shadow-primary/20"
            >
              <Link href="/form/demo" className="flex items-center gap-1">
                <Sparkles className="h-4 w-4 mr-1" />
                Demo versiya
              </Link>
            </Button>
          </motion.div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="backdrop-blur-lg bg-background/90">
              <nav className="flex flex-col gap-4 mt-8">
                {["xizmatlar", "ustunliklar", "narxlar", "boglanish"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={`/#${item}`}
                      className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <Button asChild className="mt-4 w-full bg-gradient-to-r from-primary to-indigo-600">
                    <Link href="/form/demo" onClick={() => setIsOpen(false)} className="flex items-center gap-1">
                      <Sparkles className="h-4 w-4 mr-1" />
                      Demo versiya
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
