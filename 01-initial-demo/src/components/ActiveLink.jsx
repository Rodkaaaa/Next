import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "#0070f3",
  texDecoration: "underline",
};

const ActiveLink = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link style={asPath === href ? style : null} href={href}>
      {text}
    </Link>
  );
};

export default ActiveLink;
