import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  return (
    <div className="flex items-center gap-2 justify-center my-3">
      <div className="flex items-center">
        <Link to={"/"} className="capitalize text-[#4c4c4c]">
          Home
        </Link>
      </div>
      {location.pathname.split("/") &&
        location.pathname.split("/").length > 0 &&
        location.pathname.split("/").map((item, index) => (
          <div key={item + index} className="flex items-center">
            {index / 2 === 0 ? <span>/</span> : ""}
            <Link to={`/${item}`} className="capitalize text-[#4c4c4c]">
              {item.split("-").join(" ")}
            </Link>
          </div>
        ))}
    </div>
  );
}
