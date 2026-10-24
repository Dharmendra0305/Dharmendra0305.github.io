import { useEffect, useRef } from 'react';

/**
 * Hook that triggers a count-up animation when the element enters the viewport.
 */
export function useCountUp(target: number, duration: number = 2000, start: boolean = true) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!start || !ref.current) return;

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (ref.current) {
        const hasDecimal = target % 1 !== 0;
        ref.current.textContent = hasDecimal ? current.toFixed(1) : Math.floor(current).toString();
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else if (ref.current) {
        const hasDecimal = target % 1 !== 0;
        ref.current.textContent = hasDecimal ? target.toFixed(1) : target.toString();
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start]);

  return ref;
}
