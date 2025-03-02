import React from "react";
import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";

type IngredientItem = Pick<Ingredient, "id" | "name">;

interface ReturnProps {
  ingredients: IngredientItem[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<
    ReturnProps["ingredients"]
  >([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);
  return {
    ingredients,
    loading,
  };
};
