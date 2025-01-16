function FormCard({ cardTitle, cardText, children, finishForm }) {
  return (
    <>
      {finishForm ? (
        <div className="flex flex-col gap-4 rounded-lg border bg-slate-50 p-6">
          {/* Card header */}
          <div className="flex flex-col gap-2">
            <h3 className="bg-inherit text-4xl font-bold">Thank you!</h3>
            <p className="max-w-64 text-slate-400">
              Thanks for confirming your subscription! we hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 rounded-lg border bg-slate-50 p-6">
          {/* Card header */}
          <div className="flex flex-col gap-2">
            <h3 className="bg-inherit text-4xl font-bold">{cardTitle}</h3>
            <p className="max-w-64 text-slate-400">{cardText}</p>
          </div>
          {/* Card content */}
          {children}
        </div>
      )}
    </>
  );
}

export default FormCard;
