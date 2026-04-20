export function Loader() {
  return (
    <div className="absolute inset-0 bg-space-dark z-50 flex items-center justify-center pointer-events-none">
      <div className="flex flex-col items-center">
        {/* Shimmering planet placeholder */}
        <div className="w-64 h-64 rounded-full bg-white/5 animate-pulse mb-8 border border-white/10"></div>
        {/* Shimmering text blocks */}
        <div className="w-48 h-8 bg-white/10 animate-pulse rounded mb-4"></div>
        <div className="flex gap-4">
          <div className="w-24 h-4 bg-white/5 animate-pulse rounded"></div>
          <div className="w-24 h-4 bg-white/5 animate-pulse rounded"></div>
          <div className="w-24 h-4 bg-white/5 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  );
}
