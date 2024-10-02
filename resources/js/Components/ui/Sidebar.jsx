import {
  ClipboardList,
  Eye,
  LayoutDashboard,
  MapPin,
  Route,
  Search,
  Users,
} from "lucide-react";
import { getSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import NavlinksContainer from "./NavlinksContainer";

function SideBar({ t, open, openHandler }: any) {
  const [shown, setShown] = useState(false);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    async function setUserConnected() {
      const session = await getSession();
      if (session?.user) {
        setUser(session.user);
      }
    }
    setUserConnected();
  }, []);
  return (
    <>
      <nav
        className={
          "flex z-20 gap-2 items-center pl-4 md:hidden w-full h-16 bg-primary"
        }
      >
        <button onClick={() => setShown(true)}>
          <Image src="/icons/menu.svg" alt="ham menu" width={45} height={45} />
        </button>
      </nav>
      <aside
        className={`bg-secondary z-50 translate-transform duration-500 w-full h-screen md:w-[15rem] fixed top-0 left-0 px-2 ${
          shown ? "translate-x-0" : "-translate-x-full"
        } pt-6 ${open ? "sm:translate-x-0" : "sm:-translate-x-block"}`}
      >
        <button
          onClick={openHandler}
          className={`w-9 h-9 sm:flex hidden transition-all duration-500 absolute top-16 bg-white shadow-lg rounded-full items-center justify-center ${
            open ? "-right-4 rotate-0" : "-right-10 rotate-180"
          }`}
        >
          <img
            src="/icons/chevron.svg"
            width="10"
            height="10"
            alt="chevron icon"
          />
        </button>
        <div
          className={`flex transition-opacity duration-500 flex-col h-[calc(100vh-2rem)] ${
            open ? "opacity-100 delay-300" : "opacity-0"
          }`}
        >
          <Link href="/dashboard">
            <Image
              width={79}
              height={79}
              className="block mx-auto mb-8"
              src={"/images/logo.png"}
              alt="carlock logo"
            />
          </Link>

          <div className="flex flex-col">
            {user?.can_view_summary && (
              <NavLink
                showHandler={() => setShown(false)}
                link={"/dashboard"}
                label={t?.sideBar.dashboard}
                icon={<LayoutDashboard size={22} />}
              />
            )}
            <NavLink
              showHandler={() => setShown(false)}
              link={"/matches"}
              absoluteLink={"/matches"}
              label={t?.sideBar.matches}
              icon={<MapPin size={22} />}
            />
            {user?.can_manage_human_status && (
              <NavLink
                showHandler={() => setShown(false)}
                link={"/matches?human_status=new"}
                absoluteLink={"/matches&param=new"}
                label={t?.sideBar.newMatches}
                icon={<MapPin size={22} />}
              />
            )}
            <NavLink
              showHandler={() => setShown(false)}
              link={"/matches/map"}
              absoluteLink={"/matches/map"}
              label={t?.sideBar.matchMap}
              icon={<MapPin size={22} />}
            />
            {user?.can_search_matricule && (
              <NavLink
                showHandler={() => setShown(false)}
                link={"/matricules"}
                label={t?.sideBar.matricules}
                icon={<Search size={22} />}
              />
            )}
            <NavLink
              showHandler={() => setShown(false)}
              link={"/users"}
              label={t?.sideBar.users}
              icon={<Users size={22} />}
            />
            {user?.can_view_agent_route && (
              <NavLink
                showHandler={() => setShown(false)}
                link={"/trajets"}
                label={t?.sideBar.trajets}
                icon={<Route size={22} />}
              />
            )}
            <NavlinksContainer
              title="Reporting"
              icon={<ClipboardList size={22} />}
            >
              <NavLink
                showHandler={() => setShown(false)}
                link={"/matchReport/arrangement"}
                absoluteLink={"/matchReport/arrangement"}
                label={t?.sideBar.arrangement}
                subLink
              />
              <NavLink
                showHandler={() => setShown(false)}
                link={"/matchReport/recuperation"}
                absoluteLink={"/matchReport/recuperation"}
                label={t?.sideBar.recuperation}
                subLink
              />
              <NavLink
                showHandler={() => setShown(false)}
                link={"/agents-performance"}
                label={t?.sideBar["agents-performance"]}
                subLink
              />
            </NavlinksContainer>

            {user?.can_view_agentalert && (
              <NavLink
                showHandler={() => setShown(false)}
                icon={<Eye size={22} />}
                link={"/alerts"}
                label={t?.sideBar.alerts}
              />
            )}
          </div>
          <p className="mt-auto mx-auto pb-5 text-gray-600">
            {t?.sideBar.version + process.env.APP_VERSION}
          </p>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
