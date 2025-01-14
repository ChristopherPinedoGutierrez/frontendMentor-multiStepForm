import { useState } from "react";
import sidebarImageMobile from "../../resources/assets/images/bg-sidebar-mobile.svg";
import FormPage1 from "../presentational/FormPage1";
import FormPage2 from "../presentational/FormPage2";
import FormPage3 from "../presentational/FormPage3";
import FormPage4 from "../presentational/FormPage4";

function FormMultiPage() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({});

  const nextPage = () => setPage((prevState) => prevState + 1);
  const prevPage = () => setPage((prevState) => prevState - 1);
  const navToPage = (pageSelected) => setPage(pageSelected);

  const formPages = [
    <FormPage1 />,
    <FormPage2 />,
    <FormPage3 />,
    <FormPage4 />,
  ];

  return (
    // Container
    <div className="flex min-h-screen flex-col justify-between">
      {/* Content - form, navigation & background */}
      <div className="container mx-auto flex flex-1 flex-col items-center bg-slate-200 px-4">
        {/* Top Image */}
        <div className="absolute top-0">
          <img src={sidebarImageMobile} alt="Top image mobile" />
        </div>
        {/* Content */}
        <div className="z-10 mt-7 flex w-full flex-col gap-7">
          {/* Button group */}
          <div className="flex justify-center gap-2 border-slate-50 text-sm font-semibold text-slate-50">
            <button
              onClick={() => navToPage(0)}
              className="h-9 w-9 rounded-full border p-2 hover:border-none hover:bg-sky-200 hover:text-black"
            >
              1
            </button>
            <button
              onClick={() => navToPage(1)}
              className="h-9 w-9 rounded-full border p-2 hover:border-none hover:bg-sky-200 hover:text-black"
            >
              2
            </button>
            <button
              onClick={() => navToPage(2)}
              className="h-9 w-9 rounded-full border p-2 hover:border-none hover:bg-sky-200 hover:text-black"
            >
              3
            </button>
            <button
              onClick={() => navToPage(3)}
              className="h-9 w-9 rounded-full border p-2 hover:border-none hover:bg-sky-200 hover:text-black"
            >
              4
            </button>
          </div>
          {/* Display de cards */}
          {formPages[page]}
        </div>
      </div>
      {/* Bottom Actions */}
      <div className="flex w-full justify-end bg-slate-50 p-4">
        <button
          onClick={nextPage}
          className="rounded bg-blue-950 px-4 py-2 text-white"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default FormMultiPage;
