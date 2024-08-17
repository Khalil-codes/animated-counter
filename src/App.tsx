import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState<string>("");
  return (
    <main className="container mx-auto flex h-full max-w-lg items-center justify-center">
      <div className="flex w-full flex-col gap-4 max-md:flex-col-reverse max-md:items-center md:flex-row md:items-end">
        <div className="flex w-1/2 flex-col gap-2">
          <label htmlFor="number" className="text-xl text-gray-100">
            Choose a number:
          </label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter a number"
            pattern="\d*"
            className="block rounded border border-gray-500 bg-transparent p-2 outline-none file:w-full focus:border-gray-300 focus:ring-0 md:hidden"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <input
            id="number"
            type="number"
            placeholder="Enter a number"
            className="hidden w-full rounded border border-gray-500 bg-transparent p-2 outline-none focus:border-gray-300 focus:ring-0 md:block"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <div className="flex w-1/2 justify-center max-md:mb-10 md:justify-end">
          <Counter value={+value || 0} />
        </div>
      </div>
    </main>
  );
}

export default App;
