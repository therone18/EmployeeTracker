"use client";

import { stat } from "fs";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";

export default function Page() {
  const prisma = new PrismaClient();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");

  function handleChangeName(event: any) {
    setName(event.target.value);
  }
  function handleChangePosition(event: any) {
    setPosition(event.target.value);
  }
  function handleChangeStatus(event: any) {
    setStatus(event.target.value);
  }

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
    if (window.confirm("Are you sure you want to add this employee?")) {
      alert(name + position + status);

      try {
        const response = await fetch('http://localhost:5000/api/createEmployee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, position, status }),
        });
  
        if (response.ok) {
          console.log('Employee created!');
          setName('');
          setPosition('');
          setStatus('');
        } else {
          console.error('Failed to create employee');
        }
      } catch (error) {
        console.error('Error creating employee:', error);
      }

      //window.location.href = "/";
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
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Employee Position"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          />
        </div>

        <div>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
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
