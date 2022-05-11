import { useState, useEffect } from "react";

export const useIntersection = (element) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setState(entry.isIntersecting);
    });

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
};
