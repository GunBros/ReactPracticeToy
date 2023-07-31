import React from "react";
import { ReactComponent as Joker } from "../../assets/images/tier/Joker.svg";
import { ReactComponent as A } from "../../assets/images/tier/A.svg";
import { ReactComponent as J } from "../../assets/images/tier/J.svg";
import { ReactComponent as Q } from "../../assets/images/tier/Q.svg";
import { ReactComponent as K } from "../../assets/images/tier/K.svg";

const HostTier = ({ hostTier }) => {
  const hostTierMap = {
    king: K,
    jack: J,
    ace: A,
    queen: Q,
    joker: Joker,
  };

  const HostTierComponent = hostTierMap[hostTier];
  if (!HostTierComponent) return null;

  return (
    <HostTierComponent
      className="block h-auto w-full lg:w-48 flex-none bg-cover"
      style={{ width: "108px" }}
    />
  );
};

export default HostTier;
