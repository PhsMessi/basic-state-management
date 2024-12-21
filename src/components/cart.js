export default function Cart({ cartList, toggleDelete, deleteCart }) {
  function triggerDelete(id) {
    toggleDelete(id);
  }

  function quantityChange() {
    deleteCart();
  }
  return (
    <div className="w-4/5 p-4 gap-2">
      {cartList.map((item, index) => (
        <div
          className="px-8 flex items-center justify-between border"
          key={index}
        >
          <figure className="w-3/12">
            <img src={item.gun} />
          </figure>
          <p>{item.name}</p>
          <button
            onClick={() => {
              triggerDelete(item.id);
              quantityChange();
            }}
            className="px-4 p-1 bg-red-500 text-white"
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
