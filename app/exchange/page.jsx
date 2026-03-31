import Exchange from "@/components/exchange/Exchange";
import Header1 from "@/components/headers/Header1";
import LeftMenu from "@/components/headers/LeftMenu";
export const metadata = {
  title: "Exchange || Critso - Crypto Dashboard React Nextjs Template",
  description: "Critso - Crypto Dashboard React Nextjs Template",
};
export default function page() {
  return (
    <>
      <LeftMenu />

      <div className="section-content-right">
        <Header1 />

        <div className="main-content">
          <div className="main-content-inner">
            <Exchange />
          </div>
        </div>
      </div>
    </>
  );
}
