import Link from "next/link";

export default function Home() {
  var employeeRender = [
    {
      id: "214214",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "214214",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "214214",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "214214",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "214214",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "214214",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "214214",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>Employee Tracker</div>
      <div className="h-[700px] overflow-auto">
        {employeeRender.map((employee, index) => (
          <div className="flex border-solid border-4 border-black w-[1200px] h-[100px] my-2 drop-shadow-lg items-center p-5 justify-between">
            <div>{employee.id}</div>
            <div>{employee.name}</div>
            <div>{employee.position}</div>
            <div>{employee.status}</div>
            <Link href='/employeeDetails/${employee.id}'>
              <div className="bg-blue-500 w-[200px] hover:bg-blue-600 rounded">
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
