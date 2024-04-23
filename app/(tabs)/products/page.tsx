import db from "@/lib/db";

async function getProducts() {
  const products = await db.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      description: true,
      photo: true
    }
  });

  return products;
}

export default async function Products() {
  const products = await getProducts();
  
  return (
    <h1>Products</h1>
  )
}