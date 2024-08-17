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
  console.log(number);
  return (
    <div style={{ height }} className="relative w-[2.5ch] tabular-nums">
      {[...Array(1).keys()].map((i) => (
        <Number key={i} number={i} />
      ))}
    </div>
  );
};

const Number = ({ number }: { number: number }) => {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      {number}
    </span>
  );
};
