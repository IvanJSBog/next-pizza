import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";

export const calcTotalPizzaPrice = (
  size: PizzaSize,
  type: PizzaType,
  ingredients: Ingredient[],
  items: ProductItem[],
  selectedIngredients: Set<number>,
) => {
  const pizzaPrice =
    items.find((item) => item.size === size && item.pizzaType === type)
      ?.price ?? 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  return pizzaPrice + totalIngredientsPrice;
};
