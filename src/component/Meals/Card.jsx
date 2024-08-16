import Button from "../shared/Button";

export default function Card({ price, name, description, image, id, handleClick }) {
  return (
    <article id={id} className="bg-yellow-900 text-center rounded-lg h-full">
      <img src={image} alt={name} loading="lazy" className="object-fit" />
      <div className="p-3">
        <h4 className=" text-2xl my-4 ">{name}</h4>
        <div className="text-yellow-500 my-4">{price} $</div>
        <p className="mx-4 h-32">{description}</p>
        <Button className="my-4" onClick={()=> handleClick(id)}>
          Add to cart
        </Button>
      </div>
    </article>
  );
}
