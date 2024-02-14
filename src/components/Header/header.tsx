interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({
  title,
  description,
}: HeaderProps) => {
  return (

<header className="fixed top-0 left-0 right-0 bg-white shadow px-4 py-2 z-50">
  <nav className="container mx-auto flex justify-between items-center">
    <a href="/" className="font-bold text-xl">{title}</a>
    <ul className="hidden lg:flex space-x-4">
    <li><a href="/" className="hover:text-gray-700">Home</a></li>
    <li><a href="/about" className="hover:text-gray-700">About</a></li>
    <li><a href="/services" className="hover:text-gray-700">Services</a></li>
    <li><a href="/contact" className="hover:text-gray-700">Contact</a></li>
    </ul>
  </nav>
</header>

  );
};
