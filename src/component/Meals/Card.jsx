export default function Card({price, name, description, image}) {
  return (
    <article  className="bg-yellow-900 text-center rounded-lg h-full">
      <img src={image} loading="lazy" className=" object-fit "></img>
      <h4 className=" text-2xl my-4">{name}</h4>
      <div className="text-yellow-500 my-4">{price} $</div>
      <p>{description}</p>
      <button className="my-4 bg-yellow-500 text-slate-950 p-2 rounded-xl"> Add to cart</button>
    </article>
  );
}
