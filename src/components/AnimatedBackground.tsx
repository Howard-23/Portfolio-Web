"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  driftX: number;
}

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}

// Enhanced FloatingParticles with more colors and effects
export function FloatingParticles({ count = 50, disableAnimation = false }: { count?: number; disableAnimation?: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Expanded color palette with more vibrant colors
    const colors = [
      "#FFD700", // Gold
      "#FFA500", // Orange
      "#228B22", // Forest Green
      "#9932CC", // Dark Orchid
      "#87CEEB", // Sky Blue
      "#FF6B6B", // Coral
      "#4ECDC4", // Teal
      "#FFE66D", // Yellow
      "#C0C0C0", // Silver
      "#e94560", // Theme Red
      "#00FF7F", // Spring Green
      "#FF1493", // Deep Pink
    ];
    
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      driftX: Math.random() * 50 - 25,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full transform-gpu will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}, 0 0 ${particle.size * 6}px ${particle.color}`,
          }}
          animate={
            disableAnimation
              ? { opacity: 0.45 }
              : {
                  y: [-30, -150, -30],
                  opacity: [0, 1, 0],
                  scale: [0.3, 1.2, 0.3],
                  x: [0, particle.driftX, 0],
                }
          }
          transition={
            disableAnimation
              ? undefined
              : {
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}

// Glowing Orbs - Large ambient background orbs
export function GlowingOrbs({ count = 8, disableAnimation = false }: { count?: number; disableAnimation?: boolean }) {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    const orbColors = [
      "rgba(233, 69, 96, 0.15)",   // Red
      "rgba(255, 215, 0, 0.12)",  // Gold
      "rgba(34, 139, 34, 0.1)",    // Green
      "rgba(153, 50, 204, 0.12)",  // Purple
      "rgba(135, 206, 235, 0.1)", // Blue
      "rgba(255, 165, 0, 0.12)",  // Orange
    ];
    
    const newOrbs = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 400 + 200,
      color: orbColors[i % orbColors.length],
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setOrbs(newOrbs);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full transform-gpu will-change-transform ${disableAnimation ? "blur-2xl" : "blur-3xl"}`}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
            transform: "translate(-50%, -50%)",
          }}
          animate={
            disableAnimation
              ? { opacity: 0.18 }
              : {
                  y: [0, -50, 0],
                  x: [0, 30, 0],
                  scale: [1, 1.1, 1],
                }
          }
          transition={
            disableAnimation
              ? undefined
              : {
                  duration: orb.duration,
                  delay: orb.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}

// Star Field - Static twinkling stars
export function StarField({ count = 100, disableAnimation = false }: { count?: number; disableAnimation?: boolean }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          animate={
            disableAnimation
              ? undefined
              : {
                  opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
                  scale: [0.8, 1.2, 0.8],
                }
          }
          transition={
            disableAnimation
              ? undefined
              : {
                  duration: star.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}

// Nebula effect - Subtle color clouds
export function NebulaClouds({ disableAnimation = false, compact = false }: { disableAnimation?: boolean; compact?: boolean }) {
  const firstSize = compact ? "w-[360px] h-[360px]" : "w-[800px] h-[800px]";
  const secondSize = compact ? "w-[460px] h-[460px]" : "w-[1000px] h-[1000px]";
  const thirdSize = compact ? "w-[280px] h-[280px]" : "w-[600px] h-[600px]";

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className={`absolute top-0 left-0 rounded-full opacity-20 transform-gpu will-change-transform ${firstSize}`}
        style={{
          background: "radial-gradient(circle, rgba(233, 69, 96, 0.3) 0%, transparent 70%)",
        }}
        animate={disableAnimation ? { opacity: 0.12 } : { scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={disableAnimation ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute bottom-0 right-0 rounded-full opacity-15 transform-gpu will-change-transform ${secondSize}`}
        style={{
          background: "radial-gradient(circle, rgba(153, 50, 204, 0.3) 0%, transparent 70%)",
        }}
        animate={disableAnimation ? { opacity: 0.1 } : { scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={disableAnimation ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 transform-gpu will-change-transform ${thirdSize}`}
        style={{
          background: "radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%)",
        }}
        animate={disableAnimation ? { opacity: 0.08 } : { scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
        transition={disableAnimation ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// Grid overlay for tech feel
export function GridOverlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-5"
      style={{
        backgroundImage: `
          linear-gradient(rgba(233, 69, 96, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(233, 69, 96, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}

// Parallax Background Wrapper
export function ParallaxSection({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className="relative">
      {children}
    </motion.div>
  );
}

export function MagicCircle({ size = 400, className = "", animate = true, speedMultiplier = 1 }: { size?: number; className?: string; animate?: boolean; speedMultiplier?: number }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer Ring */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        className="absolute inset-0"
        animate={animate ? { rotate: 360 } : {}}
        transition={animate ? { duration: 30 * speedMultiplier, repeat: Infinity, ease: "linear" } : {}}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Main Circle */}
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          strokeDasharray="10 5"
        />
        
        {/* Decorative Runes */}
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 200 200)`}>
            <path
              d="M 200 15 L 205 25 L 195 25 Z"
              fill="#FFD700"
              fillOpacity="0.6"
            />
            <circle cx="200" cy="30" r="3" fill="#FFD700" fillOpacity="0.4" />
          </g>
        ))}
      </motion.svg>

      {/* Middle Ring - Reverse Rotation */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        className="absolute inset-0"
        animate={animate ? { rotate: -360 } : {}}
        transition={animate ? { duration: 25 * speedMultiplier, repeat: Infinity, ease: "linear" } : {}}
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#FFD700"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        
        {/* Inner Runes */}
        {[...Array(8)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 200 200)`}>
            <rect
              x="195"
              y="45"
              width="10"
              height="20"
              fill="#228B22"
              fillOpacity="0.5"
              rx="2"
            />
          </g>
        ))}
      </motion.svg>

      {/* Inner Ring */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        className="absolute inset-0"
        animate={animate ? { rotate: 360 } : {}}
        transition={animate ? { duration: 20 * speedMultiplier, repeat: Infinity, ease: "linear" } : {}}
      >
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
          strokeDasharray="20 10"
          strokeOpacity="0.6"
        />
        
        {/* Clover Symbol */}
        <g transform="translate(200, 200)">
          {[0, 90, 180, 270].map((rotation, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-35"
              rx="20"
              ry="35"
              fill={i === 3 ? "none" : "#228B22"}
              fillOpacity={i === 3 ? 0 : 0.6}
              stroke={i === 3 ? "#FFD700" : "none"}
              strokeWidth={i === 3 ? "2" : "0"}
              transform={`rotate(${rotation})`}
            />
          ))}
        </g>
      </motion.svg>

      {/* Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500]"
          animate={animate ? {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          } : {}}
          transition={animate ? { duration: 3 * speedMultiplier, repeat: Infinity, ease: "easeInOut" } : {}}
          style={{ filter: "blur(20px)" }}
        />
      </div>
    </div>
  );
}

export function MiniMagicCircle({ className = "", animate = true }: { className?: string; animate?: boolean }) {
  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      className={className}
      animate={animate ? { rotate: 360 } : {}}
      transition={animate ? { duration: 10, repeat: Infinity, ease: "linear" } : {}}
    >
      <circle
        cx="30"
        cy="30"
        r="25"
        fill="none"
        stroke="#FFD700"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <circle
        cx="30"
        cy="30"
        r="18"
        fill="none"
        stroke="#FFD700"
        strokeWidth="1"
        strokeDasharray="4 2"
        strokeOpacity="0.4"
      />
      {/* Four leaf clover */}
      <g transform="translate(30, 30)">
        {[0, 90, 180, 270].map((rotation, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-8"
            rx="5"
            ry="8"
            fill={i === 3 ? "#FFD700" : "#228B22"}
            fillOpacity={i === 3 ? 0.8 : 0.6}
            transform={`rotate(${rotation})`}
          />
        ))}
      </g>
    </motion.svg>
  );
}
