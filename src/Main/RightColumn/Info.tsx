import React from "react";
import avax from "../../resources/avax.svg";
import Vector from "../../resources/Vector.svg";
import Wallet from "../../resources/Wallet.svg"
export default function Info() {
  return (
    <div className="rc-info">
     <div className="poppins avalanche">
         <img src={avax} alt="avax" />
         Avalanche
        <img src={Vector} alt="downcarret" />
     </div>
      <div className="user-ac">
        <img src={Wallet} alt="wallet" />
        0XF6..1353
        <img src={Vector} alt="downcarret" />
      </div>
    </div>
  );
}
