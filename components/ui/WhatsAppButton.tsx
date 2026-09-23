'use client';

import { motion } from 'framer-motion';
import { WHATSAPP_CONTACT, WHATSAPP_LINK } from '@/data/brandData';

export default function WhatsAppButton() {
  const waUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    'Hello Esaren Global, I would like to discuss a project management or infrastructure inquiry.'
  )}`;

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp: ${WHATSAPP_CONTACT}`}
      title={`WhatsApp: ${WHATSAPP_CONTACT}`}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-[9990] w-12 h-12 rounded-full bg-navy-gradient text-white flex items-center justify-center shadow-xl shadow-slate-900/25 border border-gold hover:border-gold-hover hover:text-[#25D366] transition-all duration-300 cursor-pointer group"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.979-.276-.101-.477-.15-.678.15-.2.301-.778.979-.954 1.18-.176.2-.351.226-.652.076-.301-.15-1.272-.469-2.424-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.101-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.508-.678-.517-.176-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.508c0 1.48 1.079 2.909 1.23 3.109.15.201 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.721.23 1.377.198 1.896.12.578-.088 1.78-.727 2.031-1.429.251-.702.251-1.304.176-1.429-.075-.125-.276-.201-.577-.351zM12.04 2C6.516 2 2.023 6.49 2.023 12.013c0 1.888.528 3.654 1.446 5.167L2 22l4.981-1.306a9.96 9.96 0 005.059 1.341h.004c5.522 0 10.016-4.491 10.016-10.015C22.06 6.49 17.562 2 12.04 2z" />
      </svg>
    </motion.a>
  );
}
