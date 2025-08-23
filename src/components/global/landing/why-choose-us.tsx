// src/components/global/landing/why-choose-us.tsx
import Image from 'next/image';
import { Zap, Users, LifeBuoy } from 'lucide-react';

const benefits = [
  {
    title: 'Простота и скорость',
    desc: 'Без обучения — готовый результат за минуты.',
    icon: <Zap className='w-5 h-5 sm:w-6 sm:h-6 text-cyan-500' />,
  },
  {
    title: 'Умный ИИ-помощник',
    desc: 'Создаёт тексты и идеи под вашу аудиторию.',
    icon: <Users className='w-5 h-5 sm:w-6 sm:h-6 text-purple-500' />,
  },
  {
    title: 'Всё в одном месте',
    desc: 'Планирование, контент и постинг без лишних сервисов.',
    icon: <LifeBuoy className='w-5 h-5 sm:w-6 sm:h-6 text-pink-500' />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className='py-16 sm:py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
        {/* Изображение (теперь responsive) */}
        <div className='relative order-2 md:order-1 aspect-square md:aspect-auto w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mx-auto md:mx-0'>
          <Image
            src='/images/feature-banner.png'
            alt='Why Choose Us'
            fill
            className='object-contain md:object-cover'
          />
        </div>

        {/* Текстовая часть */}
        <div className='order-1 md:order-2'>
          <span className='text-sm text-indigo-500 font-semibold tracking-wide'>
            Почему выбирают Corinna AI
          </span>
          <h2 className='mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900'>
            Почему с <span className='underline decoration-yellow-300'>Corinna AI</span>
            <br /> работать проще и эффективнее
          </h2>

          <div className='mt-8 sm:mt-10 space-y-5 sm:space-y-6'>
            {benefits.map((item, i) => (
              <div key={i} className='flex items-start gap-3 sm:gap-4'>
                <div className='p-2 sm:p-3 rounded-full bg-gray-100'>{item.icon}</div>
                <div>
                  <h3 className='text-base sm:text-lg font-semibold text-gray-900'>{item.title}</h3>
                  <p className='text-gray-600 text-sm sm:text-base'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
