import Logo from "../assets/Logo.svg"

export default function Header() {
  return (
    <div className="flex items-center justify-center w-screen bg-gray-700">
      <div className="mt-[72px] mb-20">
        <img className="bg-transparent" src={Logo} alt="logo do projeto todo" />
      </div>
    </div>
  );
}
