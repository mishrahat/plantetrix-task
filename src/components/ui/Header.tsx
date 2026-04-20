export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-8 flex justify-center items-center z-50">
      <div className="flex items-center gap-3">
        {/* Simple Planetrix Logo */}
        <div className="relative w-8 h-8 rounded-full border border-white/30">
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></div>
        </div>
        <h1 className="text-2xl font-light tracking-[0.3em] uppercase opacity-80">
          Planetrix
        </h1>
      </div>
    </header>
  );
}
