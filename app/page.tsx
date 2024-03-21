
export default function Home() {
  return (
    <main className="bg-slate-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-xl w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold -mb-1">In transit</span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>

          <div className="size-12 bg-orange-400 rounded-full" />
        </div>

        <div className="my-2 flex items-center">
          <span className="bg-green-400 text-white rounded-full px-2.5 py-1.5 text-xs font-medium mr-2">TODAY</span>
          <span>9:30-10:30u</span>
        </div>

        <div className="relative mt-3">
          <div className="bg-gray-200 w-full h-2 rounded-full absolute" />
          <div className="bg-green-400 w-1/2 h-2 rounded-full absolute" />
        </div>

        <div className="flex justify-between items-center mt-6 text-gray-600">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}
