'use client';
import './globals.css';
import Header from '../components/shared/Header';
import Providers from './providers';
import PageWrapper from '@/components/shared/PageWrapper';
import React, { useRef, PropsWithChildren } from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  MotionProps,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { cn } from "@/lib/utils";
import { FiHome, FiFolder, FiUser, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import Link from 'next/link';
import { Separator } from '@/components/magicui/separator';

const navIcons = {
  navbar: [
    { href: '/', icon: FiHome, label: 'Home' },
    { href: '/about', icon: FiUser, label: 'Me' },
    { href: '/?scrollTo=contact', icon: FiMail, label: 'contact' },
  ],
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        href: 'https://github.com/seu-usuario',
        icon: FiGithub,
      },
      LinkedIn: {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/seu-usuario',
        icon: FiLinkedin,
      },
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Providers>
          {/* --- 2. Dock with merged DATA.navbar and social icons --- */}
          <Dock className=' z-50 fixed bottom-2 left-1/2 -translate-x-1/2'>
            {/* Navbar items */}
            {navIcons.navbar.map(({ icon: Icon, label, href }) => (
              <DockIcon key={label}>
                <Link href={href}>
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </Link>
              </DockIcon>

            ))}
            <Separator orientation="vertical" className="mx-1 h-6 bg-muted" />
            {/* Social items */}
            {Object.values(navIcons.contact.social).map(({ icon: Icon, name, href }) => (

              <DockIcon key={name}>
                <Link href={href}>
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </Link>
              </DockIcon>
            ))}
          </Dock>

          <main className="flex-grow mb-24 border border-red-500">
            <PageWrapper>{children}</PageWrapper>
          </main>
        </Providers>
      </body>
    </html>
  );
}

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "rounded-full supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (
          React.isValidElement<DockIconProps>(child) &&
          child.type === DockIcon
        ) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          mouseX.set(e.clientX);
        }}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps
  extends Omit<MotionProps & React.HTMLAttributes<HTMLDivElement>, "children"> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(6, size * 0.2);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size],
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-[#FFB6C1]",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";


