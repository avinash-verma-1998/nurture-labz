import React from "react";

type TabProps = {
  name: string;
  id: string;
  active?: Boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export default function Tab({ name, id, active = false, setActive }: TabProps) {
  return (
    <div
      onClick={() => {
        setActive(id);
      }}
      className={active ? "tab active" : "tab"}
    >
      {name}
    </div>
  );
}
