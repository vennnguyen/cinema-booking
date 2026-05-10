// src/hooks/useBookingTimer.ts
import { useEffect, useRef, useState } from "react";

const HOLD_DURATION = 5 * 60; // 5 phút = 300 giây

export const useBookingTimer = (
  active: boolean,
  onExpire: () => void
) => {
  const [timeLeft, setTimeLeft] = useState(HOLD_DURATION);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!active) return;

    // Reset về 5 phút mỗi khi active
    setTimeLeft(HOLD_DURATION);

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [active]);

  const formatted = `${String(Math.floor(timeLeft / 60)).padStart(2, "0")}:${String(timeLeft % 60).padStart(2, "0")}`;

  return { timeLeft, formatted };
};