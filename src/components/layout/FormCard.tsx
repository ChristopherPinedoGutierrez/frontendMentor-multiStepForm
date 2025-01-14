function FormCard({ cardImage, cardTitle, cardText, children }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-slate-50 p-6">
      {/* Card image */}
      <img src={cardImage.src} alt={cardImage.alt} />
      {/* Card header */}
      <div className="flex flex-col gap-2">
        <h3 className="bg-inherit text-4xl font-bold">{cardTitle}</h3>
        <p className="max-w-64 text-slate-400">{cardText}</p>
      </div>
      {/* Card content */}
      {children}
    </div>
  );
}

export default FormCard;
