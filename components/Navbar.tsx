import Image from "next/image";
import { FC } from "react";
import NavItem from "./NavItem";
import { NavItemProps } from "./NavItem";

const navs: NavItemProps[] = [
  {
    key: 1,
    name: "About",
    url: "/about"
  },
  {
    key: 0,
    name: "Github",
    url: "https://github.com/jaywhen"
  },
]

const Navbar: FC = () => {
  return (
    <header className="flex justify-between px-6 py-2 items-center w-full border-b-2 border-solid">
      <Image src="/logo.svg" alt='logo' width='180' height='44' />
      <nav className="flex w-full justify-end text-xl font-serif text-[#5a5a5a]">
        <ul className="pl-6 flex justify-between items-center w-2/12">
          {navs.map((nav: NavItemProps) => {
            return (
              <NavItem key={nav.key} {...nav} />
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
