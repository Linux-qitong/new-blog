import { useEffect, useRef } from 'react';

interface TwikooProps {
  envId: string;
  region?: string;
}

export function Twikoo({ envId, region }: TwikooProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTwikoo = () => {
      const commentsContainer = ref.current;
      if (commentsContainer) {
        const script = document.createElement('script');
        script.src = 'https://cdn.staticfile.org/twikoo/1.6.40/twikoo.all.min.js';
        script.async = true;
        script.onload = () => {
          if (window.twikoo) {
            window.twikoo.init({
              envId,
              el: '#tcomment',
              region,  // Add the region parameter
            });
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTwikoo();
  }, [envId, region]);

  return <div id="tcomment" ref={ref}></div>;
}
