import Counter from "./components/Counter";

function App() {
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
            pattern="\d*"
            min={0}
            className="block rounded border border-gray-500 bg-transparent p-2 outline-none file:w-full focus:border-gray-300 focus:ring-0 md:hidden"
            value="0"
          />
          <input
            id="number"
            type="number"
            className="hidden w-full rounded border border-gray-500 bg-transparent p-2 outline-none focus:border-gray-300 focus:ring-0 md:block"
            value={100}
            min={0}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="flex w-1/2 justify-center max-md:mb-10 md:justify-end">
          <Counter value={100} />
        </div>
      </div>
    </main>
  );
}

export default App;
