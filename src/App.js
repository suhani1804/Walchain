import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
                Connect.
            </span>
          </h1>

          <p className="description">
            Explore the wallet connection with different services and chains.
          </p>

          <div className="connect">
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
              
            />
          </div>
        </div>
        
      </div>
      
    </main>
  );
}
