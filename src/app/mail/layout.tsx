import Body from "@/components/SelectedEmailColumn";
import EmailListColumn from "@/components/EmailListColumn";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { type Metadata } from "next";
import React from "react";

const metaData: Metadata = {
  title: "Paths Mailer",
  description: "A mailer client app",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="">
      <Header></Header>
      <section className="flex flex-row">
        <Sidebar></Sidebar>
        <EmailListColumn></EmailListColumn>
        <Body></Body>
        {children}
      </section>
    </main>
  );
}
