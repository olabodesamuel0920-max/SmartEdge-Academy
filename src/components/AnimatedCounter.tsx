"use client";

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface Props {
  target: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({ target, suffix = "", label }: Props) {
  const { count, ref } = useAnimatedCounter(target);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-4xl md:text-5xl font-black text-bright-yellow animate-counter-glow">
        {count}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-white/50 mt-1 font-medium">{label}</div>
    </div>
  );
}
