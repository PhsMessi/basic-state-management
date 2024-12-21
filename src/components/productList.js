export default function ProductLists({ products, addCart, addItem }) {
  function triggerAddCart(item, name, id) {
    addCart(item, name, id);
  }

  function triggerAddItem() {
    addItem(1);
  }
  return (
    <div className="w-4/5 flex flex-wrap p-4 gap-2">
      {products.map((gun, index) => (
        <div key={index} className="border p-2">
          {
            <>
              <img src={gun.img} className="h-52" />
              <p className="text-sm">{gun.name}</p>
              <div className="flex">
                <button
                  onClick={() => {
                    triggerAddCart(gun.img, gun.name, gun.id);
                    triggerAddItem();
                  }}
                  className="px-4 p-1 border bg-black text-white text-sm"
                >
                  Add to cart
                </button>
              </div>
            </>
          }
        </div>
      ))}
    </div>
  );
}
