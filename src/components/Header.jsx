import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { useToast } from "@/components/ui/use-toast";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img
              src="pb.png"
              alt="PROXYB Soins Montcalm Inc."
              className="h-20 md:h-15 w-25"
            />
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className={`nav-link font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              {t("home")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`nav-link font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              {t("about")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`nav-link font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              {t("services")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`nav-link font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              {t("contact")}
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className={`language-toggle ${
                isScrolled
                  ? "border-blue-500 text-blue-600 hover:bg-blue-50"
                  : "border-white/50 text-white hover:bg-white/10"
              }`}
            >
              <Globe className="w-4 h-4 mr-2" />
              {t("translateTo")}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {t("getQuote")}
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-3 p-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                {t("home")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                {t("about")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                {t("services")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                {t("contact")}
              </button>
              <div className="pt-3 border-t border-gray-200 space-y-3">
                <Button
                  onClick={toggleLanguage}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {t("translateTo")}
                </Button>

                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  {t("getQuote")}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
