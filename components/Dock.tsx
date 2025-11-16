'use client';

import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { FiHome, FiUser, FiMail, FiGithub, FiLinkedin, FiTool, FiFolderPlus } from 'react-icons/fi';
import Link from 'next/link';
import { Separator } from '@/components/magicui/separator';
import { cn } from '@/lib/utils';

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const navIcons = {
  navbar: [
    { href: '/', icon: FiHome, label: 'Home' },
    { href: '/about', icon: FiUser, label: 'Me' },
    { href: '/?scrollTo=contact', icon: FiMail, label: 'Contact' },
    { href: '/?scrollTo=tools', icon: FiTool, label: 'Tools' },
    { href: '/?scrollTo=experience', icon: FiFolderPlus, label: 'Experience' },
  ],
  social: [
    { href: 'https://github.com/seu-usuario', icon: FiGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/seu-usuario', icon: FiLinkedin, label: 'LinkedIn' },
  ],
};

export default function Dock() {
  return (
    <DockContainer>
      {navIcons.navbar.map(({ icon: Icon, href, label }) => (
        <DockIcon key={label}>
          <Link href={href}><Icon className="h-5 w-5 text-black" /></Link>
        </DockIcon>
      ))}

      <Separator orientation="vertical" className="mx-1 h-6 bg-black" />

      {navIcons.social.map(({ icon: Icon, href, label }) => (
        <DockIcon key={label}>
          <Link href={href}><Icon className="h-5 w-5 text-black" /></Link>
        </DockIcon>
      ))}
    </DockContainer>
  );
}

function DockContainer({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'rounded-full flex h-[58px] w-max items-center justify-center gap-2 border-2 border-black p-2 backdrop-blur-md'
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<DockIconProps>(child) && child.type === DockIcon) {
          // TypeScript now knows child accepts DockIconProps
          return React.cloneElement(child, { mouseX });
        }
        return child;
      })}
    </motion.div>
  );
}


interface DockIconProps extends HTMLMotionProps<'div'> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: any;
}

function DockIcon({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  children,
  ...props
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(2, size * 0.1);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(distanceCalc, [-distance, 0, distance], [size, magnification, size]);
  const scaleSize = useSpring(sizeTransform, { mass: 0.5, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-[#5F9EA0]"
      {...props}
    >
      {children}
    </motion.div>
  );
}
