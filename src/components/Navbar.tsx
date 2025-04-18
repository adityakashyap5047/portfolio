'use client';

import Link from 'next/link';

const items = [
    {
        'name': 'Home',
        'link': '/',
        'icon': 'home.jpg',
    },
    {
        'name': 'About',
        'link': '/about',
        'icon': 'about.jpg',
    },
    {
        'name': 'Projects',
        'link': '/projects',
        'icon': 'projects.jpg',
    },
    {
        'name': 'Contact',
        'link': '/contact',
        'icon': 'contact.jpg',
    },
]

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md border border-white/30 text-white bg-[#342694] rounded-full px-10 py-3 shadow-md">
      <ul className="flex gap-6 !px-6 !py-2 justify-between">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.link}
              className="text-white/90 hover:text-white font-medium transition duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}


