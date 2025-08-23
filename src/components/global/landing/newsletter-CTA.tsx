// src/components/global/landing/newsletter-CTA.tsx
'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function NewsletterCTA() {
  return (
    <section className='relative overflow-hidden'>
      {/* Фон */}
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700' />
      <div className='absolute inset-0 opacity-20 [background-image:radial-gradient(40rem_40rem_at_-10%_-10%,#fff_0,transparent_40%),radial-gradient(30rem_30rem_at_110%_110%,#fff_0,transparent_40%)] sm:[background-image:radial-gradient(60rem_60rem_at_-10%_-10%,#fff_0,transparent_40%),radial-gradient(40rem_40rem_at_110%_110%,#fff_0,transparent_40%)]' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center'>
          {/* Левый блок: текст + форма */}
          <div className='text-white text-center lg:text-left'>
            <div className='flex items-center justify-center lg:justify-start gap-2 text-indigo-100/90 text-sm font-medium'>
              <span className='inline-block h-2 w-2 rounded-full bg-yellow-300' />
              Будьте в курсе!
            </div>

            <h2 className='mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight'>
              Подпишитесь на новости Corinna AI и обновления.
            </h2>

            {/* Форма */}
            <form
              className='mt-6 sm:mt-8 max-w-xl mx-auto lg:mx-0'
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: обработка формы
              }}
            >
              <div className='flex flex-col sm:flex-row rounded-2xl bg-white/10 ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-yellow-300 transition'>
                <input
                  type='email'
                  required
                  placeholder='Введите ваш email ...'
                  className='flex-1 bg-transparent placeholder-white/70 text-white px-4 sm:px-5 py-3 sm:py-4 outline-none'
                />
                <button
                  type='submit'
                  className='mt-2 sm:mt-0 sm:m-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 sm:px-5 py-3 bg-yellow-300 text-indigo-900 font-semibold hover:bg-yellow-200 transition'
                >
                  Подписаться
                  <ArrowRight className='h-4 w-4' />
                </button>
              </div>
            </form>
          </div>

          {/* Правый блок: изображение */}
          <div className='relative h-56 sm:h-64 md:h-72 lg:h-80'>
            <Image
              src='/images/newsletter-banner.png'
              alt='Subscribe visual'
              fill
              className='object-contain drop-shadow-xl'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
