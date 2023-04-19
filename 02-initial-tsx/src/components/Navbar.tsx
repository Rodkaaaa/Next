import Style from "../components/Navbar.module.css";
import ActiveLink from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <>
      <nav className={Style["menu-container"]}>
        {menuItems.map((data, key) => (
          <ActiveLink text={data.text} href={data.href} key={key} />
        ))}
      </nav>
    </>
  );
};
