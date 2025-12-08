import React, { useRef, useState, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/hooks/useLanguage";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const formRef = useRef(null);
  const { toast } = useToast();
  const { t } = useLanguage();

  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!formRef.current) return;

      setIsSending(true);

      try {
        const result = await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );

        console.log("EmailJS result:", result);

        if (result && result.text === "OK") {
          toast({
            title: t("successTitle") || "Message envoyé !",
            description:
              t("successMessage") || "Nous vous contacterons sous peu.",
            duration: 4000,
          });

          formRef.current.reset();
        } else {
          throw new Error("Réponse inattendue d'EmailJS");
        }
      } catch (err) {
        console.error("Email send error:", err);
        toast({
          title: t("errorTitle") || "Erreur d’envoi",
          description:
            err?.text ||
            err?.message ||
            t("errorMessage") ||
            "Veuillez réessayer plus tard.",
          variant: "destructive",
          duration: 4000,
        });
      } finally {
        setIsSending(false);
      }
    },
    [t]
  );

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

        <div className="max-w-xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 10, y: 40 }}
            whileInView={{ opacity: 10, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              {t("contactTitle")}
            </h2>
            <p className="text-gray-600">{t("contactDescription")}</p>
          </motion.div>

          <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl f text-blue-700 mb-4">
              {t("Pour btenir votre soumission")}
            </h3>
            <p className="text-gray-700 text-lg font-bold">
              {t("Au : (438)922-1290 ") || "Au :"}
            </p>

            <a
              href="tel:+14389221290"
              className="inline-block px-8 py-4 mt-4 bg-blue-500 text-white text-xl  rounded-2xl shadow-md hover:bg-blue-800 transition-all duration-300 cursor-pointer"
            >
              {t("Appeler maintenant")}
            </a>

            <p className="text-gray-700 text-lg mt-8">
              {t("sinon envoyez-nous un message a:")}
            </p>

            <a
              href="mailto:Info.proxyb@gmail.com"
              className="block text-blue-500 text-xl font-bold underline mt-2 hover:text-red-800 transition-all"
            >
              Info.proxyb@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/*import React, { useRef, useState } from "react";
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
        {// Video Section }
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

        {// Contact Form }
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
            {// Name }
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

            {// Email }
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

            {// Phone}
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

            {// Title }
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

            {// Message }
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

            {//Submit Button}
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
}*/

