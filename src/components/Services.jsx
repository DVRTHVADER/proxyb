import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { useToast } from "@/components/ui/use-toast";

export function Services() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  const servicesData = [
    {
      titleKey: "service1Title",
      descriptionKey: "service1Description",
      image:
        "Family caregiver receiving professional support while caring for elderly parent",
    },
    {
      titleKey: "service2Title",
      descriptionKey: "service2Description",
      image:
        "Professional explaining home support services to elderly person and family",
    },
    {
      titleKey: "service3Title",
      descriptionKey: "service3Description",
      image:
        "Happy elderly person enjoying independence in their comfortable home",
    },
    {
      titleKey: "service4Title",
      descriptionKey: "service4Description",
      image: "Adult child lovingly caring for elderly parent in home setting",
    },
  ];

  const services = servicesData.map((service) => ({
    ...service,
    title: t(service.titleKey),
    description: t(service.descriptionKey),
  }));

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleLearnMore = (serviceTitle) => {
    toast({
      title: `Learn More: ${serviceTitle}`,
      description: t("bookingToast"),
      duration: 4000,
    });
  };
  const handleAbout = () => {
    window.location.href = "#about";
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t("servicesTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="service-card border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="relative h-64 lg:h-96">
                          <img
                            className="w-full h-full object-cover"
                            alt={service.image}
                            src="AF.jpg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                        </div>

                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            {service.title}
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <Button
                            onClick={handleAbout)}
                            variant="outline"
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full self-start">
                            {t("learnMore")}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-blue-200 text-blue-600 rounded-full shadow-lg z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-blue-200 text-blue-600 rounded-full shadow-lg z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 w-6"
                    : "bg-blue-200 hover:bg-blue-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
