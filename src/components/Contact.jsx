import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/hooks/useLanguage";

export function Contact() {
  const formRef = useRef(null);
  const { toast } = useToast();
  const { t } = useLanguage();

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      const result = await emailjs.sendForm(
        "service_4sdx1kp", // Replace with your EmailJS service ID
        "template-aibrvq4", // Replace with your EmailJS template ID
        formRef.current,
        "nUAslNbRMK2UBLanu" // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        toast({
          title: t("successTitle") || "Message envoyé !",
          description:
            t("successMessage") || "Nous vous contacterons sous peu.",
          duration: 4000,
        });
        formRef.current.reset();
      }
    } catch (error) {
      toast({
        title: t("errorTitle") || "Erreur d’envoi",
        description: t("errorMessage") || "Veuillez réessayer plus tard.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Video Section */}
        <div className="w-full h-full">
          <video
            className="w-full h-full rounded-lg shadow-lg object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/ho.mp4"
          />
        </div>

        {/* Contact Form */}
        <div className="max-w-xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              {t("contactTitle")}
            </h2>
            <p className="text-gray-600">{t("contactDescription")}</p>
          </motion.div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("nameLabel")}
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder={t("nameLabel")}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("emailLabel")}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t("emailLabel")}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("phoneLabel")}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t("phoneLabel")}
              />
            </div>

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("titleLabel") || "Objet de la demande"}
              </label>
              <Input
                id="title"
                name="title"
                required
                placeholder={t("titleLabel") || "Objet de la demande"}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("messageLabel")}
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder={t("messageLabel")}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSending}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-md transition-all"
            >
              {isSending
                ? t("sending") || "Envoi en cours..."
                : t("sendMessage")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
