import { useEffect, useRef, useState } from 'react';

export function useCountUp(end, { duration = 1400, start = 0 } = {}) {
  const [value, setValue] = useState(start);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun) return;

        setHasRun(true);
        const startedAt = performance.now();

        const frame = (now) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(start + (end - start) * eased));

          if (progress < 1) {
            requestAnimationFrame(frame);
          }
        };

        requestAnimationFrame(frame);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, end, hasRun, start]);

  return { ref, value };
}
