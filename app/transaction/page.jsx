import Header1 from "@/components/headers/Header1";
import LeftMenu from "@/components/headers/LeftMenu";
import Transections from "@/components/transections/Transections";
export const metadata = {
  title: "Transection || Critso - Crypto Dashboard React Nextjs Template",
  description: "Critso - Crypto Dashboard React Nextjs Template",
};
export default function page() {
  return (
    <>
      <LeftMenu />

      <div className="section-content-right">
        <Header1 />

        <div className="main-content">
          {/* main-content-wrap */}
          <div className="main-content-inner">
            <Transections />
          </div>
        </div>
      </div>
    </>
  );
}
