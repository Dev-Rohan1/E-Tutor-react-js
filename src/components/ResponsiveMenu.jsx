import NavLink from "../data/NavLink.json";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`absolute transition_property ${
        showMenu ? "top-[15%]" : "top-[-100%] "
      }  w-full `}
    >
      {showMenu && (
        <nav className="  w-[93%]  m-auto">
          <ul className="w-full  m-auto text-center bg-primary rounded-lg py-10">
            {NavLink.map((menu) => {
              return (
                <li key={menu.id} className="mb-5 last:mb-0">
                  <a href={menu.path} className="text-xl font-semibold ">
                    {menu.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default ResponsiveMenu;
