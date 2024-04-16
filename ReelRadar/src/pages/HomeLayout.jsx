import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <main className="w-full">
      <section className="w-[90vw] max-w-[1170px] text-white  mx-auto">
        <Outlet />
      </section>
    </main>
  );
};

export default HomeLayout;
