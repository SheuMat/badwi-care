"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function LogoImage({
  className = "h-10 w-auto object-contain",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span className={`font-bold text-xl ${invert ? "text-white" : "text-purple-700"}`}>
        {siteConfig.name}
      </span>
    );
  }

  return (
    <Image
      src={siteConfig.logo.src}
      alt={siteConfig.logo.alt}
      width={siteConfig.logo.width}
      height={siteConfig.logo.height}
      className={`${className} ${invert ? "brightness-0 invert" : ""}`}
      onError={() => setImgError(true)}
      priority
    />
  );
}
