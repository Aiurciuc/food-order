export default function CartButton({numberOfItems = 0}) {
  return <button className="text-yellow-500">
    Cart ({numberOfItems})
  </button>
}