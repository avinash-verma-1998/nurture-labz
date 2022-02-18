import React from "react";

type chain = {
  img: string;
  name: string;
};
type state = "expired" | "active";
export type tabDataProps = {
  img: string;
  amount: Number;
  asset: string;
  referral_earnings: Number;
  state: state;
  type: string;
  user: string;
  chain: chain;
};

function formatUsername(name: string) {
  let newName = name;
  if (name.length > 12) {
    newName =
      name.slice(0, 5) + ".." + name.slice(name.length - 7, name.length);
  }
  return newName;
}
export default function TabData({ data }: { data: tabDataProps }) {
  return (
    <>
      <table className="tab-data">
        <tbody>
          <tr>
            <th>ASSET</th>
            <th>AMOUNT</th>
            <th>USER ACCOUNT</th>
            <th>REFERRAL EARNING</th>
          </tr>
          <tr className="tab-data-entry">
            <td className="asset">
              <img src={data.img} alt=" bitcoin" />
              <div>
                <span>{data.asset}</span>
                <div className="asset-entry">
                  <span className="tab-data-entry-info">{data.type}</span>
                  <img src={data.chain.img} alt={data.chain.name} />
                  <span className="poppins-600 chain-name">
                    {data.chain.name}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div>{data.amount} BNB</div>
              <div className="tab-data-entry-info">
                {data.state.charAt(0).toUpperCase() +
                  data.state.slice(1, data.state.length)}
              </div>
            </td>
            <td>
              <div>{formatUsername(data.user)}</div>
            </td>
            <td>
              <div>{data.referral_earnings} BNB</div>
              <div className="tab-data-entry-info">View on BSC Scan</div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
