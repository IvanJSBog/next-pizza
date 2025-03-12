import React from "react";
import qs from "qs";
import { Filters } from "@/shared/hooks/use-filters";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
  const isMounted = React.useRef(false);
  const router = useRouter();

  React.useEffect(() => {
    if (isMounted.current) {
      const query = qs.stringify(
        {
          ...filters.prices,
          pizzaTypes: Array.from(filters.pizzaTypes),
          sizes: Array.from(filters.sizes),
          ingredients: Array.from(filters.selectedIngredients),
        },
        { arrayFormat: "comma" },
      );

      if (query !== window.location.search.slice(1)) {
        router.push(`?${query}`, { scroll: false });
      }
    }
    console.log(filters);
    isMounted.current = true;
  }, [filters]);
};
