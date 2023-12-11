"use client";


export default function Page({ params }: { params: { id: string } }) {
  var taskRender = [
    {
      taskID: "1234",
      taskName: "Task 1",
      taskStatus: "Active",
    },
    {
      taskID: "5678",
      taskName: "Task 2",
      taskStatus: "Delayed",
    },
    {
      taskID: "9012",
      taskName: "Task 3",
      taskStatus: "Cancelled",
    },
  ];

  function handleDelete(){
    if (window.confirm('Are you sure you want to delete this employee?')) {
      alert("Employee Deleted")
      window.location.href = "/"
    } else {
      
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl max-h-5xl  w-full items-center justify-between bg-slate-300 rounded-md p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-5">NAME HERE</div>
            <div> {params.id}</div>
          </div>

          <div> STATUS HERE</div>
        </div>  

        <div> POSITION HERE HERE</div>

        <div className="pt-10">
          <div> TASKS</div>
          <div className="bg-slate-200 rounded-md h-[500px] overflow-auto">
            {taskRender.map((task, index) => (
              <div className="flex border-solid border-4 border-black w-full h-[100px] my-2 drop-shadow-lg items-center p-5 justify-between">
                <div className="flex">
                  <div className="pr-2 font-bold">{index + 1}</div>
                  <div>{task.taskID}</div>
                </div>

                <div>{task.taskName}</div>
                <div>{task.taskStatus}</div>
              </div>
            ))}
          </div>

          <button className="bg-red-500 flex  items-center p-5 hover:bg-red-600" onClick={handleDelete}>DELETE EMPLOYEE</button>
        </div> 
      </div>
    </main>
  );
}
