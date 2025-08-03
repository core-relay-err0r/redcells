const useCases = [
  {
    title: "Counterparty Vetting Before You Pay",
    description: "Find hidden shell networks & director fraud in 24 h.",
  },
  {
    title: "Red-Flag Review After Funds Sent",
    description: "Diagnose anomalies & decide next tactical move.",
  },
  {
    title: "Frozen Funds & OFAC Holds",
    description: "Map the fastest release path from banks or crypto exchanges.",
  },
]

export function UseCasesStrip() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group rounded-lg border border-zinc-800 p-8 text-gray-200 transition-colors hover:border-rose-500"
            >
              <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
              <p className="mt-4 text-sm text-gray-400">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
