import { HomeLink } from './NavBar/Links/HomeLink';
import { CgCopyright } from 'react-icons/cg';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto text-center text-xs text-white md:text-lg">
      <ul className="flex flex-row items-center justify-center space-x-2 bg-secondary">
        <li className="py-2 text-sm">
          <HomeLink textSize="sm" />
        </li>

        <li className=" flex flex-row ">
          <CgCopyright />
          <span>2024 The Sad Bois. Melancholie Music Inc.</span>
        </li>
        <li>
          <span>All rights reserved</span>
        </li>
      </ul>
    </footer>
  );
};
