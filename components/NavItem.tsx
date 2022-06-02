import { FC } from "react";

const NavItem: FC<NavItemProps> = (props: NavItemProps) => {
  return (
    <li>
      <a href={props.url} target="_blank" rel="noreferrer">{props.name}</a>
    </li>
  )
}

export default NavItem;