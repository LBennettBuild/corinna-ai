// src/components/global/landing/hero.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Play, Facebook, Youtube, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section className='relative pt-20 sm:pt-24 md:pt-32 pb-10 md:pb-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center'>
        {/* Left: Copy */}
        <div className='text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-neutral-900'>
            Умная
            <span className='block mt-1 sm:mt-2'>
              <span className='[background-image:linear-gradient(transparent_70%,#fde68a_70%)]'>
                платформа
              </span>{' '}
              для маркетинга и продаж
            </span>
          </h1>

          <p className='mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0'>
            <span className='[background-image:linear-gradient(transparent_70%,#fde68a_70%)]'>
              Corinna AI
            </span>{' '}
            помогает создавать контент, управлять социальными сетями, находить клиентов и
            автоматизировать бизнес-процессы. Всё в одном месте!
          </p>

          <div className='mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4'>
            <Link
              href='#how-it-works'
              className='rounded-md bg-indigo-600 text-white px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold shadow hover:bg-indigo-700 transition'
            >
              Попробовать
            </Link>

            <Link
              href='#backstage'
              className='inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md border border-gray-300 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition'
            >
              <Play className='h-4 w-4' />
              <span>Посмотреть демо</span>
            </Link>
          </div>

          {/* Socials */}
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 text-sm text-gray-600'>
            <span className='text-xs uppercase tracking-wide'>Мы есть в социальных сетях.</span>
            <div className='flex items-center gap-4'>
              <Link href='#' aria-label='Facebook' className='hover:text-gray-900'>
                <Facebook className='h-5 w-5' />
              </Link>
              <Link href='#' aria-label='YouTube' className='hover:text-gray-900'>
                <Youtube className='h-5 w-5' />
              </Link>
              <Link href='#' aria-label='Twitter' className='hover:text-gray-900'>
                <Twitter className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Mosaic */}
        <div className='relative hidden md:block'>
          <Image
            src='/images/hero-banner.png'
            alt='Hero Banner'
            width={740}
            height={740}
            className='absolute -right-10 lg:-right-28 -top-20 lg:-top-72 max-w-none w-[500px] lg:w-[740px] h-auto'
          />
        </div>
      </div>
    </section>
  );
}
