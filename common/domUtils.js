export const animateValue = (obj, start, end, duration, lastValue) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else if (progress === 1 && typeof lastValue !== "undefined") {
      obj.innerHTML = lastValue;
    }
  };
  window.requestAnimationFrame(step);
};
