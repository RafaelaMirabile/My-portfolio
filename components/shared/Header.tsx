'use client';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Ícones "outline"
import { FiHome, FiFolder, FiUser, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
// Ícones "fill"
import { FaHome, FaFolder, FaUser, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const navItems = [
  {
    href: '/',
    label: 'Home',
    icon: { default: FiHome, hover: FaHome },
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: { default: FiFolder, hover: FaFolder },
  },
  {
    href: '/about',
    label: 'About Me',
    icon: { default: FiUser, hover: FaUser },
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: { default: FiMail, hover: FaEnvelope },
  },
];

const socialItems = [
  {
    href: 'https://github.com/seu-usuario',
    label: 'GitHub',
    icon: { default: FiGithub, hover: FaGithub },
  },
  {
    href: 'https://linkedin.com/in/seu-usuario',
    label: 'LinkedIn',
    icon: { default: FiLinkedin, hover: FaLinkedin },
  },
];

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSocialIndex, setHoveredSocialIndex] = useState<number | null>(null);
  const [hoveredThemeSwitcher, setHoveredThemeSwitcher] = useState(false);

  const isAnyHovered = hoveredIndex !== null || hoveredSocialIndex !== null || hoveredThemeSwitcher;

  return (
    <motion.header
      animate={{ width: isAnyHovered ? '400px' : '370px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="
        fixed bottom-2 left-1/2 -translate-x-1/2
        bg-white-800 text-white px-6 py-3
        rounded-full shadow-md z-50
        pointer-events-auto flex items-center justify-center gap-6
        dark:border dark:border-white/10
      "
    >
      <nav className="flex items-center gap-2">
        {navItems.map(({ href, label, icon }, index) => {
          const IconComponent = hoveredIndex === index ? icon.hover : icon.default;

          return (
            <Link key={href} href={href} title={label}>
              <motion.div
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.1 }}
                className="p-2 rounded-full cursor-pointer transition-all"
              >
                <IconComponent
                  size={24}
                  className={`transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-[#FFB6C1]' : 'text-[#FFB6C1]/80'
                  }`}
                />
              </motion.div>
            </Link>
          );
        })}

        <div className="flex items-center gap-2 px-2 border-x border-[#FFB6C1]-400">
          {socialItems.map(({ href, label, icon }, index) => {
            const IconComponent = hoveredSocialIndex === index ? icon.hover : icon.default;

            return (
              <Link
                key={href}
                href={href}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  onHoverStart={() => setHoveredSocialIndex(index)}
                  onHoverEnd={() => setHoveredSocialIndex(null)}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.1 }}
                  className="p-2 rounded-full cursor-pointer transition-all"
                >
                  <IconComponent
                    size={24}
                    className={`transition-colors duration-300 ${
                      hoveredSocialIndex === index ? 'text-[#FFB6C1]' : 'text-[#FFB6C1]/80'
                    }`}
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>

        <motion.div
          onHoverStart={() => setHoveredThemeSwitcher(true)}
          onHoverEnd={() => setHoveredThemeSwitcher(false)}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.3 }}
          className="p-2 rounded-full cursor-pointer transition-all"
        >
          <ThemeSwitch />
        </motion.div>
      </nav>
    </motion.header>
  );
}
