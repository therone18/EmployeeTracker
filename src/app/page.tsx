import Link from "next/link";

export default function Home() {
  var employeeRender = [
    {
      id: "214214",
      name: "test",
    },
    {
      id: "214214",
      name: "test",
    },
    {
      id: "214214",
      name: "test",
    },
    {
      id: "214214",
      name: "test",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>TITLE HERE</div>
      <div>
        {employeeRender.map((employee, index) => (
          <div className="flex bg-gray-500">
            <div>{employee.id}</div>
            <div>{employee.name}</div>
          </div>
        ))}
      </div>
      <div>ADD EMPLOYEE BUTTON HERE</div>
    </main>
  );
}
