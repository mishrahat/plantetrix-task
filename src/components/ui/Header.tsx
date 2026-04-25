import logo from "../../assets/logo.png"


export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-8 flex justify-center items-center z-50">
      <div className="flex items-center gap-3">
        {/* Simple Planetrix Logo */}
        <img src={logo} alt="planetrix logo" className="max-w-[200px]" />
      </div>
    </header>
  );
}
