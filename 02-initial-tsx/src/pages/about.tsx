import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import {DarkLAyout} from "../components/layouts/DarkLAyout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get starte by editing <code className={"code"}>pages/index.jsx</code>
      </p>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLAyout>
        {page}
      </DarkLAyout>
    </MainLayout>
  );
};