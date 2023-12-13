"use client";

import Link from "next/link";
import { PrismaClient } from '@prisma/client'
import { useState } from "react";
import Head from 'next/head';



export default async function Home() {
  const prisma = new PrismaClient()
  var employeeRender = await prisma.employee.findMany()

  function handleDetails (employeeID: any){
    console.log(employeeID);
    var urlLink = "/employeeDetails/" + employeeID
    //console.log(urlLink)
    window.location.href = urlLink
  }



  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Head>
      <title>Homepage</title>
      </Head>
      <div>Employee Tracker</div>
      <div className="h-[700px] overflow-auto">
        { employeeRender.map((employee, index) => (
          <div className="flex border-solid border-4 border-black w-[1200px] h-[100px] my-2 drop-shadow-lg items-center p-5 justify-between">
            <div>{employee.id}</div>
            <div>{employee.name}</div>
            <div>{employee.position}</div>
            <div>{employee.status}</div>
            
            <Link href={"/employeeDetails/" + employee.id }>
              <div className="bg-blue-500 w-[200px] hover:bg-blue-600 rounded" >
                Details
              </div>
            </Link>
          </div>
        ))}
        
      </div>
      <Link href="/addEmployee">
          <div className="bg-green-500 w-[1200px] hover:bg-green-600 rounded p-5">
            ADD EMPLOYEE{" "}
          </div>
        </Link>

        
    </main>
  );
}
