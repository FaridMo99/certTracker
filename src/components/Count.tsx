import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

function getPercent(number: number): string {
  const str = number.toString();
  const slice = str.slice(0, 5);

  if (slice.endsWith("00")) return slice.slice(0, 2);

  return slice;
}

function Count({ initialCount, maxLessons, certName }: { initialCount: number, maxLessons: number, certName: string }) {
  const localStorageCountKey = certName + "count"
  const localStorageCount = localStorage.getItem(localStorageCountKey);

  const [count, setCount] = useState( localStorageCount ? JSON.parse(localStorageCount) as number : initialCount);
  const inPercent = getPercent((count / maxLessons) * 100);

  function decrement() {
    if (count === 0) return;
    setCount((pre) => {
      const newVal = pre - 1
      localStorage.setItem(localStorageCountKey, JSON.stringify(newVal))
      return newVal
    });
  }

  function increment() {
    if (count === maxLessons) return;
        setCount((pre) => {
          const newVal = pre + 1;
          localStorage.setItem(localStorageCountKey, JSON.stringify(newVal));
          return newVal;
        });
  }
  
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-neutral-900 text-white">
      <div className="flex justify-center items-center overflow-clip rounded-md bg-neutral-700">
        <Button className="rounded-none bg-blue-950" onClick={decrement}>
          -
        </Button>
        <p className="mx-4">
          {count} / {maxLessons} ({inPercent}%)
        </p>
        <Button className="rounded-none bg-blue-950" onClick={increment}>
          +
        </Button>
      </div>
      <div className="w-screen absolute bottom-2 flex justify-center items-center">
        <ArrowDown className="text-white" />
      </div>
    </div>
  );
}

export default Count;
