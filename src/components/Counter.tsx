import { MotionValue, useSpring, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

const Counter = ({ value }: { value: number }) => {
  return (
    <div
      style={{ fontSize }}
      className="flex divide-x-2 overflow-hidden rounded bg-white leading-none text-gray-900">
      <Digit place={2} value={value} />
      <Digit place={1} value={value} />
      <Digit place={0} value={value} />
    </div>
  );
};

export default Counter;

const Digit = ({ place, value }: { place: number; value: number }) => {
  const number = Math.floor(value / Math.pow(10, place)) % 10;

  const animatedValue = useSpring(number);

  useEffect(() => {
    animatedValue.set(number);
  }, [animatedValue, number]);

  return (
    <div style={{ height }} className="relative w-[2.5ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} number={i} mv={animatedValue} />
      ))}
    </div>
  );
};

const Number = ({ mv, number }: { mv: MotionValue; number: number }) => {
  const y = useTransform(mv, (latest) => {
    const place = latest % 10;
    const offset = (10 + number - place) % 10;

    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center">
      {number}
    </motion.span>
  );
};
