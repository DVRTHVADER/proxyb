import { useState, useEffect } from "react";

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    services: "Our Services",
    contact: "Contact Us",
    bookNow: "Book Now",
    getQuote: "Get a Quote",
    translateTo: "Traduire en Français",

    // Hero Section
    heroTitle: "Quality Home Care for Your Loved Ones",
    heroSubtitle:
      "Reliable, compassionate, and tailored to your family's needs.",
    join: "Join our Team",
    proxyb: "info Proxy B",
    // About Section
    aboutTitle: "About Us",
    aboutDescription:
      "We are dedicated to providing exceptional home care services for the elderly. Our mission is to ensure your loved ones receive the compassionate, professional care they deserve in the comfort of their own homes. With years of experience and a team of qualified caregivers, we are committed to enhancing the quality of life for seniors and providing peace of mind for their families.",
    aboutFeatureCompassionate: "Compassionate Care",
    aboutFeatureCompassionateDesc:
      "We provide care with genuine compassion and understanding.",
    aboutFeatureTrusted: "Trusted & Reliable",
    aboutFeatureTrustedDesc:
      "Our team is thoroughly vetted and highly experienced.",
    aboutFeatureFamily: "Family-Centered",
    aboutFeatureFamilyDesc:
      "We work closely with families to ensure the best outcomes.",
    aboutFeatureQuality: "Quality Excellence",
    aboutFeatureQualityDesc:
      "Committed to the highest standards of care and service.",

    // Services
    servicesTitle: "Our Services",
    service1Title: "Private Home Care Support for Family Caregivers",
    service1Description:
      "Professional assistance to support family members caring for their elderly loved ones.",
    service2Title: "Home Support Services - How to Benefit",
    service2Description:
      "Comprehensive guide to accessing and maximizing home support services.",
    service3Title: "The Benefits of Aging at Home",
    service3Description:
      "Discover why aging in place provides comfort, independence, and better quality of life.",
    service4Title: "Caring for an Elderly Parent",
    service4Description:
      "Expert guidance and support for families navigating elderly parent care.",
    learnMore: "Learn More",

    // Contact
    contactTitle: "Contact Us",
    contactDescription:
      "Get in touch with us to discuss your home care needs. We're here to help.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    messageLabel: "Message",
    sendMessage: "Send Message",
    sendUsMessage: "Send us a Message",
    emergencyContactTitle: "Emergency Contact",
    interactiveMap: "Interactive Map",
    locationMontreal: "Location: Montreal, QC",
    titleLabel: "Request Title",
    sending: "Sending...",
    successTitle: "Message sent!",
    successMessage: "We will get back to you shortly.",
    errorTitle: "Error sending message",
    errorMessage: "Please try again later.",

    // Contact Info
    phoneNumber: "+1 (438) 922-1290 ",
    emailAddress: "info.proxybb@gmail.com",
    address: "21 rue de Grand-pre St-Jacques",
    businessHours: "Business Hours: Monday - Friday, 8:00 AM - 5:00 PM",
    emergencyContact: "Emergency: +1 (438) 787-7143",

    // Footer
    footerDescription:
      "Providing compassionate home care services for the elderly with dedication and professionalism.",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    copyright: "© 2024 PROXYB Soins Montcalm Inc. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    madeWith: "Made with",
    forBetterCare: "for better care",

    // Toast Messages
    bookingToast:
      "This feature isn't implemented yet—but don't worry! You can request it in your next prompt!",
    quoteToastTitle: "Quote Request",
    quoteToastDescription:
      "You will be redirected to your email client to send an inquiry.",
    messageToast:
      "Message sending feature isn't implemented yet—but don't worry! You can request it in your next prompt!",
  },
  fr: {
    // Navigation
    home: "Accueil",
    about: "À propos de ProxyB",
    services: "Nos Services",
    contact: "Contact",
    bookNow: "obtenez un rendez-vous",
    getQuote: "Obtenir un Devis",
    translateTo: "Translate to English",

    // Hero Section
    heroTitle: "Des soins à domicile de qualité pour vos proches",
    heroSubtitle:
      "Fiables, compatissants et adaptés aux besoins de votre famille.",
    join: "Envoie ton CV",

    // About Section
    aboutTitle: "À Propos de Nous",
    aboutDescription:
      "Nous nous consacrons à fournir des services de soins à domicile exceptionnels pour les personnes âgées. Notre mission est de nous assurer que vos proches reçoivent les soins compatissants et professionnels qu'ils méritent dans le confort de leur propre maison. Avec des années d'expérience et une équipe de soignants qualifiés, nous nous engageons à améliorer la qualité de vie des seniors et à offrir la tranquillité d'esprit à leurs familles.",
    aboutFeatureCompassionate: "Soins Compatissants",
    aboutFeatureCompassionateDesc:
      "Nous fournissons des soins avec une compassion et une compréhension sincères.",
    aboutFeatureTrusted: "Fiable et Digne de Confiance",
    aboutFeatureTrustedDesc:
      "Notre équipe est rigoureusement sélectionnée et hautement expérimentée.",
    aboutFeatureFamily: "Axé sur la Famille",
    aboutFeatureFamilyDesc:
      "Nous travaillons en étroite collaboration avec les familles pour garantir les meilleurs résultats.",
    aboutFeatureQuality: "Excellence de la Qualité",
    aboutFeatureQualityDesc:
      "Engagés envers les normes les plus élevées de soins et de services.",

    // Services
    servicesTitle: "Nos Services",
    service1Title:
      "Les soins à domicile privés à la rescousse des proches aidants",
    service1Description:
      "Assistance professionnelle pour soutenir les membres de la famille qui s'occupent de leurs proches âgés.",
    service2Title: "Les services de soutien à domicile, comment en bénéficier?",
    service2Description:
      "Guide complet pour accéder et maximiser les services de soutien à domicile.",
    service3Title: "Les avantages de vieillir chez soi",
    service3Description:
      "Découvrez pourquoi vieillir à domicile offre confort, indépendance et meilleure qualité de vie.",
    service4Title: "Prendre soin d'un parent âgé",
    service4Description:
      "Conseils d'experts et soutien pour les familles naviguant dans les soins aux parents âgés.",
    learnMore: "En Savoir Plus",

    // Contact
    contactTitle: "Contactez-Nous",
    contactDescription:
      "Contactez-nous pour discuter de vos besoins en soins à domicile. Nous sommes là pour vous aider.",
    nameLabel: "Nom Complet",
    emailLabel: "Adresse Email",
    phoneLabel: "Numéro de Téléphone",
    messageLabel: "Message",
    sendMessage: "Envoyer le Message",
    sendUsMessage: "Envoyez-nous un Message",
    emergencyContactTitle: "Contact d'Urgence",
    interactiveMap: "Carte Interactive",
    locationMontreal: "Lieu: Montréal, QC",

    titleLabel: "Objet de la demande",
    sending: "Envoi en cours...",
    successTitle: "Message envoyé !",
    successMessage: "Nous vous contacterons sous peu.",
    errorTitle: "Erreur lors de l’envoi",
    errorMessage: "Veuillez réessayer plus tard.",

    // Contact Info
    phoneNumber: "+1 (438)922 1290",
    emailAddress: "info.proxyb@gmail.com",
    address: "21 Rue deGrand pre St Jacques, J0K 2R0",
    businessHours: "Heures d'ouverture: Lundi - Vendredi, 8h00 - 18h00",
    emergencyContact: "Urgence: +1 (438) 924-7012",

    // Footer
    footerDescription:
      "Fournir des services de soins à domicile compatissants pour les personnes âgées avec dévouement et professionnalisme.",
    quickLinks: "Liens Rapides",
    followUs: "Suivez-Nous",
    copyright: "© 2024 PROXYB Soins Montcalm Inc. Tous droits réservés.",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions de Service",
    madeWith: "Fait avec",
    forBetterCare: "pour de meilleurs soins",

    // Toast Messages
    bookingToast:
      "La fonction de réservation n'est pas encore implémentée—mais ne vous inquiétez pas! Vous pouvez la demander dans votre prochaine demande!",
    quoteToastTitle: "Demande de Devis",
    quoteToastDescription:
      "Vous serez redirigé vers votre client de messagerie pour envoyer une demande.",
    messageToast:
      "L'envoi de messages n'est pas encore implémenté—mais ne vous inquiétez pas! Vous pouvez le demander dans votre prochaine demande!",
  },
};

export function useLanguage() {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return { language, toggleLanguage, t };
}

