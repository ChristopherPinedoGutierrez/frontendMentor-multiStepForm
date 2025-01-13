import TopImgMobile from "./resources/assets/images/bg-sidebar-mobile.svg";

function App() {
  return (
    // Container
    <div className="flex min-h-screen flex-col justify-between">
      <div className="container mx-auto flex flex-1 flex-col items-center bg-slate-200 px-4">
        {/* Top Image */}
        <div className="absolute top-0">
          <img src={TopImgMobile} alt="Top image mobile" />
        </div>
        {/* Content */}
        <div className="z-10 mt-7 flex w-full flex-col gap-7">
          {/* Button group */}
          <div className="flex justify-center gap-2 border-slate-50 text-sm font-semibold text-slate-50">
            <button className="h-9 w-9 rounded-full border p-2 hover:border-none hover:bg-sky-200 hover:text-black">
              1
            </button>
            <button className="h-9 w-9 rounded-full border p-2 hover:border-none hover:bg-sky-200 hover:text-black">
              2
            </button>
            <button className="h-9 w-9 rounded-full border p-2 hover:border-none hover:bg-sky-200 hover:text-black">
              3
            </button>
            <button className="h-9 w-9 rounded-full border p-2 hover:border-none hover:bg-sky-200 hover:text-black">
              4
            </button>
          </div>
          {/* Card */}
          <div className="flex flex-col gap-4 rounded-lg border bg-slate-50 p-6">
            <div className="flex flex-col gap-2">
              <h3 className="bg-inherit text-4xl font-bold">Personal info</h3>
              <p className="max-w-64 text-slate-400">
                Please provide your name, email address and phone number.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="nameIpt">Name</label>
                <input
                  type="text"
                  name="nameInput"
                  id="nameIpt"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="emailIpt">Email Address</label>
                <input
                  type="email"
                  name="emailInput"
                  id="emailIpt"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phoneIpt">Phone Number</label>
                <input
                  type="tel"
                  name="phoneInput"
                  id="phoneIpt"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Actions */}
      <div className="flex w-full justify-end bg-slate-50 p-4">
        <button className="rounded bg-blue-950 px-4 py-2 text-white">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default App;
