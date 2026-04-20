export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full p-12 flex justify-between items-end z-50 text-white/60 text-sm">
      <div className="max-w-md">
        <div className="flex items-center gap-3 mb-4 opacity-50">
          <div className="relative w-6 h-6 rounded-full border border-white/30">
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full"></div>
          </div>
          <h2 className="text-xl font-light tracking-[0.2em] uppercase">Planetrix</h2>
        </div>
        <p className="leading-relaxed text-xs">
          Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet curabitur eget quam. Tortor nam volutpat tincidunt nibh lacus vitae sed mi. Viverra eu commodo sed sed commodo commodo urna sed.
        </p>
      </div>
      <div className="flex flex-col gap-2 text-right">
        <a href="#" className="hover:text-white transition-colors">About Us</a>
        <a href="#" className="hover:text-white transition-colors">Blog</a>
        <a href="#" className="hover:text-white transition-colors">Career</a>
        <a href="#" className="hover:text-white transition-colors">FAQ</a>
        <a href="#" className="hover:text-white transition-colors">Contact us</a>
      </div>
    </footer>
  );
}
