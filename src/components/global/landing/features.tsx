// src/components/global/landing/features.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const features = [
  { title: 'ИИ-Копирайтер', icon: '/images/service-icon-1.png' },
  { title: 'Ветвящийся ИИ-чат', icon: '/images/service-icon-2.png' },
  { title: 'Единое пространство', icon: '/images/service-icon-3.png' },
  { title: 'Автопостинг Автопилот', icon: '/images/service-icon-4.png' },
  { title: 'Креативная библиотека', icon: '/images/service-icon-5.png' },
  { title: 'Панель инсайтов', icon: '/images/service-icon-6.png' },
  { title: 'Умный планировщик', icon: '/images/service-icon-7.png' },
  // Особая карточка
  { title: '04 More Service', icon: '' },
];

export default function Features() {
  return (
    <section id='features' className='relative py-16 sm:py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 text-center'>
        <span className='text-sm text-indigo-500 font-semibold tracking-wide'>Наши услуги!</span>
        <h2 className='mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900'>
          Услуги, разработанные{' '}
          <span className='underline decoration-yellow-300'>для вашего успеха</span>
        </h2>

        <div className='mt-10 sm:mt-12 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
          {features.map((item, index) => {
            const isMore = index === 7;
            if (isMore) {
              return (
                <Link
                  href='/services'
                  key={index}
                  className='group relative rounded-2xl p-4 sm:p-6 text-left bg-indigo-50 ring-1 ring-inset ring-indigo-100 hover:ring-indigo-200 transition block'
                >
                  <div className='text-xs font-medium text-indigo-600 mb-4 sm:mb-6'>
                    04 More Service
                  </div>
                  <ArrowUpRight className='h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 opacity-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                  <span className='sr-only'>Ko‘proq xizmatlar</span>
                </Link>
              );
            }

            return (
              <div
                key={index}
                className='rounded-2xl bg-white p-4 sm:p-6 shadow hover:shadow-md transition flex flex-col items-center justify-center text-center'
              >
                <div className='h-12 w-12 sm:h-14 sm:w-14 mb-3 sm:mb-4 flex items-center justify-center rounded-xl bg-gray-50'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                    className='sm:w-10 sm:h-10'
                  />
                </div>
                <h3 className='text-sm sm:text-base font-medium text-gray-900'>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
