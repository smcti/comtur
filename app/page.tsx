import React from "react";
import { redirect } from "next/navigation";

const page = () => {
  redirect("/inventario");
  return <div></div>;
};

export default page;
