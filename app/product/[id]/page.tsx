import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { Container, ProductImage, Title } from "@/components/shared";
import { GroupVariants } from "@/components/shared/group-variants";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage
          imageUrl={product.imageUrl}
          className="w-full h-full"
          size={40}
        />
        <div className="w-[490px] bg-[#FCFCFC] p-7">
          <Title text={product.name} size="md" className="font-extrabold" />

          <p className="text-gray-400">This component in development</p>

          <GroupVariants
            selectedValue="2"
            items={[
              { name: "small", value: "1" },
              { name: "medium", value: "2" },
              { name: "large", value: "3", disabled: true },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
