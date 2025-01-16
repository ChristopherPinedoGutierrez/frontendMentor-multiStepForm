import FormCard from "../layout/FormCard";

function FormPage1() {
  return (
    <FormCard
      cardTitle="Personal info"
      cardText="Please provide your name, email address and phone number."
    >
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
    </FormCard>
  );
}

export default FormPage1;
