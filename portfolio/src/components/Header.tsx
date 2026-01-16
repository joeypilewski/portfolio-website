"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open (with scrollbar compensation)
  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 pb-8">
        {/* Fading blur overlay - extends beyond header */}
        <div
          className="absolute inset-x-0 top-0 h-32 backdrop-blur-md pointer-events-none -z-10"
          style={{
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            background: 'linear-gradient(to bottom, black 0%, transparent 100%)'
          }}
        />
        <nav className="relative z-10 max-w-content mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight hover:text-accent transition-colors"
            >
              Joey Pilewski
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-full text-sm transition-all ${isActive
                        ? "bg-accent/10 text-accent"
                        : "text-text-muted hover:text-text hover:bg-card/50"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Placeholder for mobile button spacing */}
            <div className="md:hidden w-10 h-10" />
          </div>
        </nav>
      </header>

      {/* Mobile Menu Button - Fixed position so it's always on top */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-4 right-6 z-[60] w-10 h-10 flex items-center justify-center text-text-muted hover:text-white transition-colors"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <div className="w-5 flex flex-col gap-1.5">
          <span
            className={`block h-0.5 bg-current transition-all duration-300 origin-center ${isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-0" : ""
              }`}
          />
          <span
            className={`block h-0.5 bg-current transition-all duration-300 origin-center ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        style={{ backgroundColor: "#0a0a0a" }}
        aria-hidden={!isMenuOpen}
      >
        <nav
          className="flex flex-col items-center justify-center h-full gap-8"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-3xl font-semibold transition-all duration-300 ${isActive ? "text-accent" : "text-white hover:text-accent"
                  }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isMenuOpen ? 1 : 0,
                }}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

