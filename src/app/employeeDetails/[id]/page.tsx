export default function Page({params}: {
  params: {id: string}
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl max-h-5xl  w-full items-center justify-between bg-slate-300 rounded-md p-5">
        <div> {params.id} TEST </div>
      </div>
    </main>
  );
}
