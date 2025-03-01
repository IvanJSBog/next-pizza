import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
} from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Фильтры */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/*Карточки товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Пиццы"}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.jpg",
                    price: "550",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.jpg",
                    price: "550",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.jpg",
                    price: "550",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.jpg",
                    price: "550",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.jpg",
                    price: "550",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={"Комбо"}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.jpg",
                    price: "550",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.jpg",
                    price: "550",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.jpg",
                    price: "550",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.jpg",
                    price: "550",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.jpg",
                    price: "550",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
