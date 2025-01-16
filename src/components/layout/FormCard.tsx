import ThankyouImage from "../../resources/assets/images/icon-thank-you.svg";

function FormCard({ cardTitle, cardText, children, finishForm }) {
  return (
    <div className="flex min-h-96 flex-col justify-center gap-4 rounded-lg border bg-slate-50 p-6">
      {finishForm ? (
        <>
          {/* Card header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div>
              <img src={ThankyouImage} />
            </div>
            <h3 className="bg-inherit text-2xl font-bold text-blue-950">
              Thank you!
            </h3>
            <p className="max-w-64 text-slate-400">
              Thanks for confirming your subscription! we hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Card header */}
          <div className="flex flex-col gap-2">
            <h3 className="bg-inherit text-2xl font-bold text-blue-950">
              {cardTitle}
            </h3>
            <p className="max-w-64 text-slate-400">{cardText}</p>
          </div>
          {/* Card content */}
          {children}
        </>
      )}
    </div>
  );
}

export default FormCard;
