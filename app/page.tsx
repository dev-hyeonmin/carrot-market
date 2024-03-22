
export default function Home() {
  return (
    <main className="
      bg-slate-100 h-screen flex items-center justify-center p-5
      dark:bg-gray-700 flex-col gap-2">
      <div className="flex flex-col gap-2 bg-white shadow-lg p-5 rounded-xl w-full max-w-md">
        <input type="text" placeholder="Sarch here..."
          className="w-full h-10 bg-gray-200 px-5 rounded-full outline-none ring
          ring-transparent focus:ring-offset-orange-500 focus:ring-offset-2 transition-shadow"/>
        <button className="bg-black text-white w-full py-2 rounded-full font-medium
          transition-transform active:scale-90 focus:scale-90 outline-none">Search</button>
      </div>

      <div className="
        bg-white shadow-lg p-5 rounded-xl w-full
        dark:bg-gray-600 max-w-md">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="
              text-gray-600 font-semibold -mb-1
              dark:text-white">In transit</span>
            <span className="
              text-4xl font-semibold
              dark:text-white">Coolblue</span>
          </div>

          <div className="size-12 bg-orange-400 rounded-full" />
        </div>

        <div className="my-2 flex items-center">
          <span className="
            bg-green-400 text-white rounded-full px-2.5 py-1.5 text-xs font-medium mr-2 
            transition hover:bg-green-500 hover:scale-125
            ">TODAY</span>
          <span className="dark:text-white">9:30-10:30u</span>
        </div>

        <div className="relative mt-3">
          <div className="bg-gray-200 w-full h-2 rounded-full absolute" />
          <div className="bg-green-400 w-1/2 h-2 rounded-full absolute" />
        </div>

        <div className="
          flex justify-between items-center mt-6 text-gray-600
          dark:text-gray-300">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400 dark:text-gray-500">Delivered</span>
        </div>
      </div>
    </main>
  );
}
