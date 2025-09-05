import PageTitle from "@/components/common/page-title";
import { profileMenu } from "@/pages/profile/utils/profile-menu";
import { Link, Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className="">
      <PageTitle title="My account" />
      <div className="max-w-[1200px] mx-auto px-4 py-12 min-h-[1000px] flex items-start lg:flex-row flex-col gap-y-12">
        <aside className="flex flex-col lg:border-r max-w-[270px] gap-6 w-full">
          {profileMenu.map((menu, index) => {
            return (
              <Link
                key={menu.target + index}
                to={menu.target}
                className="flex items-center gap-4"
              >
                <menu.icon />
                {menu.title}
              </Link>
            );
          })}
        </aside>
        <div className="flex-1 lg:px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
