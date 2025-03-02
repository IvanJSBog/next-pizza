"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import Link from "next/link";

interface Props {
  className?: string;
}

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((category, i) => (
        <Link
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === i + 1 &&
              "bg-white shadow-md shadow-gray-200 text-primary",
          )}
          href={`/#${category}`}
          key={i}
        >
          <button>{category}</button>
        </Link>
      ))}
    </div>
  );
};
