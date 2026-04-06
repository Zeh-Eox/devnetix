import { useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const useVelocity = (value: any) => {
  const velocity = useMotionValue(0);
  const prevValue = useRef(value.get());
  const prevTime = useRef(Date.now());

  useEffect(() => {
    const updateVelocity = () => {
      const currentTime = Date.now();
      const currentValue = value.get();
      const deltaTime = currentTime - prevTime.current;

      if (deltaTime > 0) {
        const newVelocity = (currentValue - prevValue.current) / deltaTime;
        velocity.set(newVelocity);
      }

      prevValue.current = currentValue;
      prevTime.current = currentTime;
    };

    const unsubscribe = value.on("change", updateVelocity);
    return unsubscribe;
  }, [value, velocity]);

  return velocity;
}

export default useVelocity;