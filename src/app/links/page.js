import React from "react";
import LinkCreateForm from "./createForm";
import LinksHTMLTable from "./table";

const Home = () => {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <LinksHTMLTable />
    </main>
  );
};

export default Home;
