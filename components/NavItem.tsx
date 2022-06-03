import Link from "next/link";
import { FC } from "react";

const NavItem: FC<NavItemProps> = (props: NavItemProps) => {
  return (
    <li>
      <Link href={props.url}>{props.name}</Link>
      {/* <a href={props.url} target="_blank" rel="noreferrer">{props.name}</a> */}
    </li>
  )
}

export default NavItem;