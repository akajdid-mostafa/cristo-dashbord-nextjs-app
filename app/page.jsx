import Header1 from "@/components/headers/Header1";
import LeftMenu from "@/components/headers/LeftMenu";
import Home from "@/components/home/Home";
export const metadata = {
  title: "Dashboard || Critso - Crypto Dashboard React Nextjs Template",
  description: "Critso - Crypto Dashboard React Nextjs Template",
};
export default function HomePage() {
  return (
    <>
      <LeftMenu />

      <div className="section-content-right">
        <Header1 />

        <div className="main-content">
          {/* main-content-wrap */}
          <div className="main-content-inner">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}
