import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

const contact = () => {
  return (
    <div>
      <MainLayout>
        <h1>Home Page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get starte by editing{" "}
          <code className={'code'}>pages/index.jsx</code>
        </p>
      </MainLayout>
    </div>
  );
};

export default contact;