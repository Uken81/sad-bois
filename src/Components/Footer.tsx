import { HomeLink } from './NavBar/Links/HomeLink';
import { CgCopyright } from 'react-icons/cg';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      <ul className="flex flex-row items-center justify-center bg-secondary text-sm text-white ">
        <li className="py-2 text-sm">
          <HomeLink textSize="sm" />
        </li>

        <li className=" flex flex-row ">
          <CgCopyright />
          <span className="border-r-2 border-white pr-2">
            2024 The Sad Bois. Melancholie Music Inc.
          </span>
        </li>
        <li>
          <span className="pl-2">All rights reserved</span>
        </li>
      </ul>
    </footer>
  );
};
