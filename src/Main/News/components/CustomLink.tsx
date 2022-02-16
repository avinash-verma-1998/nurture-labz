import React from "react";
import { Url } from "url";
import enter from "../../../resources/enter.svg";

type CustomLinkProps = {
  url: string;
  linkName: string;
};

export default function CustomLink({ url, linkName }: CustomLinkProps) {
  return (
    <div className="custom-link">
      <img src={enter} alt="enter" />
      <a href={url}> {linkName}</a>
    </div>
  );
}
