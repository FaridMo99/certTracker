import { useState, useEffect } from "react";
import type { Category } from "@/lib/types";
import { Check, X } from "lucide-react";

function Categories({
  categories: initialCategories,
  certName,
}: {
  categories: Category[];
  certName: string;
}) {
  const localStorageKey = `${certName}categories`;

  const [list, setList] = useState<Category[]>(() => {
    const saved = localStorage.getItem(localStorageKey);
    return saved ? JSON.parse(saved) : initialCategories;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(list));
  }, [list, localStorageKey]);

  const toggleCategory = (name: string) => {
    setList((prev) =>
      prev.map((cat) =>
        cat.name === name ? { ...cat, done: !cat.done } : cat,
      ),
    );
  };

  return (
    <div className="absolute w-screen left-0 top-10 justify-center flex items-center">
      <ul className="bg-neutral-900 text-white h-[40vh] overflow-scroll p-4 rounded-lg border border-neutral-700">
        {list.map((category) => (
          <li
            className="flex items-center cursor-pointer hover:bg-neutral-800 p-2 rounded transition-colors"
            key={category.name}
            onClick={() => toggleCategory(category.name)}
          >
            {category.done ? (
              <Check className="text-green-500" />
            ) : (
              <X className="text-red-500" />
            )}
            <p
              className={`ml-2 ${category.done ? "line-through text-neutral-500" : ""}`}
            >
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
