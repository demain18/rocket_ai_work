"use client";

import Cartoon from "@/components/organisms/cartoon/Cartoon";
import Layout from "@/components/organisms/layout/Layout";
import Table from "@/components/organisms/table/Table";

export default function Home() {
  return (
    <Layout>
      <Cartoon />
      <Table />
    </Layout>
  );
}
