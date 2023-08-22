'use client'

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './NavigationBar.module.css';

interface NavItemProps {
  path: string;
  label: string;
  currentPath: string;
}

export default function NavigationBar () {
    const router = useRouter();
    const pathname = usePathname();

    return(
        <nav>
            <ul className="flex justify-center space-x-6">
                <NavItem path="/" label="Home" currentPath={router} />
                <NavItem path="/About" label="About" currentPath={router} />
                <NavItem path="/Projects" label="Projects" currentPath={router} />
                <NavItem path="/Contact" label="Contact Me" currentPath={router} />
            </ul>
        </nav>
    )
}

const NavItem = ({ path, label, currentPath }: NavItemProps) => (
    <li className={`border-b-2 ${currentPath === path ? 'border-white' : ''}`}>
      <Link className={`text-white ${currentPath === path ? 'font-bold' : ''}`} href={path}>
        {label}
      </Link>
    </li>
  );