import Image from "next/image"

export function FullscreenHero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(#111_0%,#000_80%)] opacity-90" aria-hidden="true" />
      <Image
        src="/bg/world-map.png"
        alt="World map background"
        fill
        className="absolute inset-0 object-cover object-center mix-blend-soft-light opacity-10 blur-[2px]"
      />
      <div className="animate-pan absolute inset-0 bg-[url('/bg/grid.png')] bg-repeat opacity-5" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8">
          <Image
            src="/logo-animated.svg"
            alt="RedCellAdvisory Animated Logo"
            width={128}
            height={128}
            className="animate-pulse-glow rounded-full"
            priority
          />
        </div>
        <h1 className="animate-fade-down text-3xl font-extrabold leading-tight text-white drop-shadow-lg md:text-5xl">
          Stop cross-border fraud
          <br />
          <span className="text-[#e00c33]">and unlock stuck payments faster</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          AI + human intelligence for frozen funds, OFAC holds and counterparty checks that out-perform
        </p>
      </div>
    </section>
  )
}
