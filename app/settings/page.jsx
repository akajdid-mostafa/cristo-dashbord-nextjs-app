import Header1 from "@/components/headers/Header1";
import LeftMenu from "@/components/headers/LeftMenu";
import Settings from "@/components/settings/Settings";
export const metadata = {
  title: "Settings || Critso - Crypto Dashboard React Nextjs Template",
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
            <Settings />
          </div>
        </div>
      </div>
    </>
  );
}
