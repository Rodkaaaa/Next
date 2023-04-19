import Link from "next/link";
import  MainLayout   from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <h1>Home Page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/about">About</Link>
        </h1>
        <h1 className={'title'}>
          Ir a <Link href="/about">Contact</Link>
        </h1>

        <p className={'description'}>
          Get starte by editing{" "}
          <code className={'code'}>pages/index.jsx</code>
        </p>
      </MainLayout>
    </div>
  );
}
