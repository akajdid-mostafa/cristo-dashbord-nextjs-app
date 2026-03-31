import Account from "@/components/account/Account";
import WalletActivity from "@/components/account/WalletActivity";
import Header1 from "@/components/headers/Header1";
import LeftMenu from "@/components/headers/LeftMenu";
export const metadata = {
  title: "Account || Critso - Crypto Dashboard React Nextjs Template",
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
            <div className="main-content-wrap">
              <div className="tf-container">
                <Account />
                <WalletActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
