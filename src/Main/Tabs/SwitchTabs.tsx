import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import TabData, { tabDataProps } from "./TabData";

type tabDataObject = {
  first:tabDataProps;
  second: tabDataProps;
}
export default function SwitchTabs() {
  enum tabs {
    "first",
    "second",
  }
  const initTabData = {
    img: "",
    amount: 0,
    asset: "",
    referral_earnings: 0,
    state: "expired" as const,
    type: "",
    user: "",
    chain: {
      img: "",
      name: "",
    },
  };
  const init = {first : initTabData, second: initTabData}
  let url = "https://raw.githubusercontent.com/akshita151199/APIs/main/data";
  const [active, setActive] = useState(tabs[0]);
  const [tabData, setTabData] = useState<tabDataObject>(init);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const temp = {first: data.data[0], second:data.data[1]};

        setTabData(temp);
      });
  }, [url]);

  return (
    <>
      <div className="tabs">
        <Tab
          name="First Tab"
          setActive={setActive}
          active={active === tabs[0]}
          id={tabs[0]}
        />
        <Tab
          name="Second Tab"
          setActive={setActive}
          active={active === tabs[1]}
          id={tabs[1]}
        />
      </div>
      {tabData && <TabData data={tabData["first"]} />}
    </>
  );
}
