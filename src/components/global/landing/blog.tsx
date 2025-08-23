// src/components/global/landing/blog.tsx
import { Calendar } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 bg-gray-50'>
      {/* Header */}
      <div className='text-center mb-8 sm:mb-12'>
        <div className='inline-flex items-center gap-2 text-yellow-500 text-sm font-medium mb-3 sm:mb-4'>
          <div className='w-2 h-2 bg-yellow-400 rounded-full'></div>
          Blog Post
        </div>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900'>
          Идеи и практики <span className='underline decoration-yellow-300'>для маркетинга</span>
        </h2>
      </div>

      {/* Content Grid */}
      <div className='grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12'>
        {/* Main Featured Post */}
        <div className='group cursor-pointer'>
          <div className='relative overflow-hidden rounded-2xl mb-3 sm:mb-4'>
            <img
              src='/images/blog-1.jpg'
              alt='3D Cube in clouds'
              className='w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
          </div>

          <div className='space-y-2'>
            <div className='flex items-center gap-3 sm:gap-4 text-xs sm:text-sm'>
              <span className='px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-medium'>
                DEVELOPMENT
              </span>
              <div className='flex items-center gap-1 text-gray-500'>
                <Calendar className='w-3 h-3 sm:w-4 sm:h-4' />
                July 22, 2022
              </div>
            </div>

            <h3 className='text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors'>
              Как ИИ меняет маркетинг
            </h3>

            <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
              Разбираем реальные кейсы использования искусственного интеллекта в продвижении.
            </p>
          </div>
        </div>

        {/* Sidebar Posts */}
        <div className='space-y-4 sm:space-y-6'>
          {/* Post 1 */}
          <div className='group cursor-pointer'>
            <div className='flex gap-3 sm:gap-4'>
              <div className='flex-shrink-0'>
                <img
                  src='/images/blog-2.jpg'
                  alt='Architecture structure'
                  className='w-20 h-16 sm:w-24 sm:h-20 md:w-36 md:h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='flex-1 space-y-1 sm:space-y-2'>
                <div className='flex items-center gap-2 sm:gap-3 text-xs'>
                  <span className='px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-600 rounded font-medium'>
                    DEVELOPMENT
                  </span>
                  <div className='flex items-center gap-1 text-gray-500'>
                    <Calendar className='w-3 h-3' />
                    July 21, 2020
                  </div>
                </div>
                <h4 className='text-base sm:text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors'>
                  5 шагов к успешному контент-плану
                </h4>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className='group cursor-pointer'>
            <div className='flex gap-3 sm:gap-4'>
              <div className='flex-shrink-0'>
                <img
                  src='/images/blog-3.png'
                  alt='Business blocks'
                  className='w-20 h-16 sm:w-24 sm:h-20 md:w-36 md:h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='flex-1 space-y-1 sm:space-y-2'>
                <div className='flex items-center gap-2 sm:gap-3 text-xs'>
                  <span className='px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-600 rounded font-medium'>
                    DEVELOPMENT
                  </span>
                  <div className='flex items-center gap-1 text-gray-500'>
                    <Calendar className='w-3 h-3' />
                    July 21, 2020
                  </div>
                </div>
                <h4 className='text-base sm:text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors'>
                  Тексты, которые продают
                </h4>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div className='group cursor-pointer'>
            <div className='flex gap-3 sm:gap-4'>
              <div className='flex-shrink-0'>
                <img
                  src='/images/blog-4.png'
                  alt='3D shapes'
                  className='w-20 h-16 sm:w-24 sm:h-20 md:w-36 md:h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='flex-1 space-y-1 sm:space-y-2'>
                <div className='flex items-center gap-2 sm:gap-3 text-xs'>
                  <span className='px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-600 rounded font-medium'>
                    DEVELOPMENT
                  </span>
                  <div className='flex items-center gap-1 text-gray-500'>
                    <Calendar className='w-3 h-3' />
                    July 21, 2020
                  </div>
                </div>
                <h4 className='text-base sm:text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors'>
                  Ошибки SMM-специалистов
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
