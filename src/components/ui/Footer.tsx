import logo from '../../assets/logo.png'

export function Footer() {
  return (
    <footer className="bg-white/6 backdrop-blur-[1px] absolute bottom-0 left-0 w-full p-12 flex justify-between items-end z-50 text-white/60 text-sm">
      <div className="max-w-md">
        <div className="flex items-center gap-3 mb-4 opacity-50">
          
          <img src={logo} alt="" className="max-w-[317px]" />
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
