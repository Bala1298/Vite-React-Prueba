import CrossIcons from "./components/icons/CrossIcons";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-gray-300 bg-no-repeat min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-red-400" />
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center mt-8">
          <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>

      <main className="container max-auto mt-8 px-4">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
            <p className="text-gray-600">Complete Online Javascript curse</p>
            <button className="flex-none">
              <CrossIcons />
            </button>
          </article>

          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
            <p className="text-gray-600">Complete Online Javascript curse</p>
            <button className="flex-none">
              <CrossIcons />
            </button>
          </article>

          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
            <p className="text-gray-600">Complete Online Javascript curse</p>
            <button className="flex-none">
              <CrossIcons />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <section className="text-center">Drag and Drop</section>
    </div>
  );
};

export default App;
