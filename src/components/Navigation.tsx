import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const featurePages = [
    { path: "/project-management", label: "Project Management" },
    { path: "/procurement", label: "Procurement" },
    { path: "/inventory", label: "Inventory Management" },
    { path: "/asset-management", label: "Asset Management" },
    { path: "/analytics", label: "Analytics & Reporting" },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            Bizsutra ERP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {featurePages.map((feature) => (
                        <li key={feature.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={feature.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{feature.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-foreground px-2">Features</div>
              {featurePages.map((feature) => (
                <Link
                  key={feature.path}
                  to={feature.path}
                  className={`block py-2 px-4 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === feature.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {feature.label}
                </Link>
              ))}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Request Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
