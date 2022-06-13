import Link from "next/link";
import { FC } from "react";

export interface NavItemProps {
  readonly key?: number;
  readonly name: string;
  readonly url: string;
}

const NavItem: FC<NavItemProps> = (props: NavItemProps) => {
  return (
    <li>
      <Link href={props.url}>{props.name}</Link>
    </li>
  )
}

export default NavItem;