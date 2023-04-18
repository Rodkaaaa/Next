import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";
import { DarkLAyout } from "@/components/layouts/DarkLAyout";

const about = () => {
  about.getLayout = function getLayout(page) {
    return (
      <MainLayout>
        <DarkLAyout>
            {page}
        </DarkLAyout>
      </MainLayout>
    );
  };
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

export default about;
