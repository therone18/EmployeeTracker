import React from "react";
import axios from "axios";
const { PrismaClient } = require("@prisma/client");
import Link from "next/link";
import Head from 'next/head';

export default async function page({ params }: { params: { id: string } }) {
  const prisma = new PrismaClient();
  var id = params.id;
  const deletedDocument = await prisma.employee.delete({
    where: {
      id: parseInt(id),
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Head>
        <title>Deleting Employee</title>
      </Head>
      <div className="z-10 max-w-5xl max-h-5xl  w-full items-center justify-between bg-slate-300 rounded-md p-5">
        <div>Deleting Employee</div>
        <Link href={"/"}>
          <div className="bg-blue-500 flex  items-center p-5 hover:bg-blue-600" >go back to home</div>
          </Link>
      </div>
    </main>
  );
}
    