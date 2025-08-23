// src/components/global/landing/header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full bg-white/90 backdrop-blur z-50 border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-xl sm:text-2xl font-semibold tracking-tight text-blue-900'>
          Corinna AI
        </Link>

        {/* Nav */}
        <nav className='hidden md:flex items-center gap-4 lg:gap-6'>
          <Link href='/' className='text-gray-600/80 hover:text-blue-700 font-medium transition'>
            Home
          </Link>
          <Link
            href='/services'
            className='text-gray-600/80 hover:text-blue-700 font-medium transition'
          >
            Services
          </Link>
          <Link
            href='/features'
            className='text-gray-600/80 hover:text-blue-700 font-medium transition'
          >
            Features
          </Link>
          <Link
            href='/portfolio'
            className='text-gray-600/80 hover:text-blue-700 font-medium transition'
          >
            Portfolio
          </Link>
          <Link
            href='/blog'
            className='text-gray-600/80 hover:text-blue-700 font-medium transition'
          >
            Blog
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href='/login'
          className='inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition shadow-sm'
        >
          <span>Войти в платформу</span>
        </Link>
      </div>
    </header>
  );
}
