function FormPage1() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-slate-50 p-6">
      {/* Card header */}
      <div className="flex flex-col gap-2">
        <h3 className="bg-inherit text-4xl font-bold">Page 1</h3>
        <p className="max-w-64 text-slate-400">
          Please provide your name, email address and phone number.
        </p>
      </div>
      {/* Card content */}
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
  );
}

export default FormPage1;
