import { resolve } from "path";

async function getProduct () {
  await new Promise((reseolve) => {setTimeout(resolve, 1000)});
}

export default async function ProductDetail({
  params: { id }
}: {
  params: { id: string }
}) {
  const product = await getProduct();

  return (
    <>product no {id}</>
  )
}