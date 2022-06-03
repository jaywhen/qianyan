import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import NavItem from "./NavItem";

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
    <header className="flex justify-between py-2 items-center text-sans w-full">
      <Image src="/logo.svg" alt='logo' width='180' height='44' />
      <nav className="flex w-full justify-end text-xl font-semibold">
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
