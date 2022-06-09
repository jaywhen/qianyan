import Link from "next/link";
import { FC } from "react";

const NavItem: FC<NavItemProps> = (props: NavItemProps) => {
  return (
    <li>
      <Link href={props.url}>{props.name}</Link>
    </li>
  )
}

export default NavItem;