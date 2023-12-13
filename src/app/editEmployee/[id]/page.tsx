"use client"

import { useState, useRef, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

export default async function Page({ params }: { params: { id: string } }) {
  const prisma = new PrismaClient();
  
  var urlLink = "http://localhost:4000/documents/" + params.id 

  const nameRef = useRef(null);
  const positionRef = useRef(null);
  const statusRef = useRef(null);

  const createEmployee = async () => {
    await prisma.employee.create({
      data: {
        name: "Test Name 3",
        position: "Test Position 1",
        status: "Test Status 1",
      },
    });
  };

  const handleAdd = async () => {
    const nameValue = nameRef.current.value;
    const positionValue = positionRef.current.value;
    const statusValue = statusRef.current.value;

    if (window.confirm("Are you sure you want to add this employee?")) {
      alert(nameValue + positionValue + statusValue);
      try {
        await axios.put(urlLink, {
          name: nameValue,
          position: positionValue,
          status: statusValue,
        });
      } catch (error) {
        console.error('Error creating document:', error);
      }

      window.location.href = "/";
    } else {
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl max-h-5xl  w-full items-center justify-between bg-slate-300 rounded-md p-5">
        <div>NEW EMPLOYEE</div>

        <div>
          <input
            type="text"
            placeholder="Enter Employee Name"
            id="name"
            ref={nameRef}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Employee Position"
            id="position"
            ref={positionRef}
          />
        </div>

        <div>
          <select id="status" ref={statusRef}>
            <option value="">Set Employee Status</option>
            <option value="active">Active</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>

        <button
          className="bg-green-500 flex  items-center p-5 hover:bg-green-600"
          onClick={handleAdd}
        >
          ADD EMPLOYEE
        </button>
      </div>
    </main>
  );
}


