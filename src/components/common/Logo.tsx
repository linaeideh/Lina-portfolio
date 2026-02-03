"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import logoLina from "../../assets/images/logo-lina.png";

const Logo: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-32 sm:h-10 sm:w-40" />;
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center group">
      <div className="h-8 sm:h-10 relative" style={{ width: '150px' }}>
        <Image 
          src={logoLina} 
          alt="Lina Eideh Developer Logo" 
          fill
          priority
          sizes="150px"
          className={`object-contain transition-all duration-300 group-hover:scale-105 ${
            isDark ? "invert brightness-[2] contrast-[1.2]" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Logo;
