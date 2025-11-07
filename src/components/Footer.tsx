import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Bizsutra ERP</h3>
            <p className="text-sm opacity-80">
              The complete ERP solution designed specifically for Indian manufacturers. 
              Enterprise features at SME pricing.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/bizsutraerp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="/project-management" className="hover:opacity-100 transition-opacity">Project Management</a></li>
              <li><a href="/procurement" className="hover:opacity-100 transition-opacity">Procurement</a></li>
              <li><a href="/inventory" className="hover:opacity-100 transition-opacity">Inventory</a></li>
              <li><a href="/asset-management" className="hover:opacity-100 transition-opacity">Asset Management</a></li>
              <li><a href="/analytics" className="hover:opacity-100 transition-opacity">Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="/blog" className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="/case-studies" className="hover:opacity-100 transition-opacity">Case Studies</a></li>
              <li><a href="/contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="h-4 w-4" />
                sales@bizsutraerp.com
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="h-4 w-4" />
                <a 
                  href="https://wa.me/919574516060?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Bizsutra%20ERP%20for%20my%20manufacturing%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  +91 95745 16060
                </a>
              </li>
              <li><a href="#" className="hover:opacity-100 transition-opacity opacity-80">Help Center</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity opacity-80">Documentation</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity opacity-80">API Reference</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© 2025 Bizsutra ERP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>

        {/* Final tagline */}
        <div className="text-center mt-8 pt-8 border-t border-background/20">
          <p className="text-lg font-semibold">
            Premium ERP. SME Pricing. ₹2,500/month or ₹24,000/year.
          </p>
          <p className="text-sm opacity-80 mt-2">
            Made in India for Indian manufacturers 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
