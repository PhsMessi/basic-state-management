export default function NavigationBar({ cartItem, toggleModal, toggleHome }) {
  const links = ["Home", "Shop", "Pages", "About", "Blog", "Contact"];

  function triggerModal() {
    toggleModal();
  }

  function triggerHome() {
    toggleHome();
  }
  return (
    <div className="w-full p-3 px-16 border border-black flex justify-between items-center">
      {/* title & logo */}
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
          <path
            fill-rule="evenodd"
            d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z"
            clip-rule="evenodd"
          />
        </svg>

        <p onClick={() => triggerHome()} className="cursor-pointer">
          FireTrade
        </p>
      </div>
      {/* list */}
      <ul className="flex">
        {links.map((link, index) => (
          <li key={index} className="mr-12 last:mr-0">
            {link}
          </li>
        ))}
      </ul>
      {/* search & notif */}
      <div className="flex items-center">
        {/* search */}
        <div className="relative w-64">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <input
            type="text"
            className="p-1 w-full border border-slate-500 rounded-md pl-9"
            placeholder="Search..."
          />
        </div>
        {/* heart */}
        <p className="mx-3">Like</p>
        {/* cart */}
        <p onClick={() => triggerModal()} className="mx-3 cursor-pointer">
          Cart ({cartItem})
        </p>
        {/* account */}
        <p className="mx-3">Account</p>
      </div>
    </div>
  );
}
