"use client";

import React from "react";
import {
  FilterCheckbox,
  FilterCheckboxProps,
} from "@/shared/components/shared/filter-checkbox";
import { Input, Skeleton } from "../ui";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string;
  className?: string;
  selectedIds?: Set<string>;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  className,
  limit = 5,
  title,
  items,
  searchInputPlaceholder = "Поиск...",
  loading,
  onClickCheckbox,
  defaultValue,
  selectedIds,
  name,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {Array(limit)
          .fill(0)
          .map((_, i) => (
            <Skeleton className="h-6 mb-5" key={i} />
          ))}
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : items.slice(0, limit);

  const onChangeSearchInput = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={(e) => onChangeSearchInput(e.target.value)}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, i) => (
          <FilterCheckbox
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            checked={selectedIds?.has(item.value)}
            key={String(item.value) + i}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            name={name}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3 cursor-pointer"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
