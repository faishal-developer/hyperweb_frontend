// components/Navbar.js
import Link from 'next/link';
import { paths } from '../../paths/Paths';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="text-white text-2xl font-bold">Recipe App</span>
        </Link>
        <div className="flex space-x-4">
          <Link href={paths.recipe}>
            <span className="text-white hover:text-gray-300">Recipes</span>
          </Link>
          <Link href={paths.create_recipe}>
            <span className="text-white hover:text-gray-300">create-recipe</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
