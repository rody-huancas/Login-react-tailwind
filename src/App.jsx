import { Form } from "./components/Form";

const App = () => {
  return (
    <>
      <div className="bg-gray-300">
        <div className="flex w-full h-screen">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <Form />
          </div>

          <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
            <div className="w-60 h-60 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full animate-bounce"></div>
            <div className="w-full h-1/2 absolute bg-white/10 backdrop-blur-lg bottom-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
