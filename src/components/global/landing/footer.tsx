// src/components/global/landing/footer.tsx
import { Youtube, Twitter, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <h3 className='text-lg sm:text-xl font-bold mb-4 sm:mb-6'>Corinna AI</h3>
            <p className='text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-sm'>
              Будущее маркетинга начинается здесь
            </p>

            {/* Social Media Icons */}
            <div className='flex gap-3 sm:gap-4'>
              <a
                href='#'
                className='w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors'
              >
                <Youtube className='w-4 h-4 sm:w-5 sm:h-5' />
              </a>
              <a
                href='#'
                className='w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors'
              >
                <Twitter className='w-4 h-4 sm:w-5 sm:h-5' />
              </a>
              <a
                href='#'
                className='w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors'
              >
                <Facebook className='w-4 h-4 sm:w-5 sm:h-5' />
              </a>
              <a
                href='#'
                className='w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors'
              >
                <MessageCircle className='w-4 h-4 sm:w-5 sm:h-5' />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className='text-lg sm:text-xl font-bold mb-4 sm:mb-6'>Полезные ссылки</h3>
            <ul className='space-y-3 sm:space-y-4'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Начать бесплатно
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Как это работает
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Истории успеха
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Частые вопросы
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Цена & планы
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className='text-lg sm:text-xl font-bold mb-4 sm:mb-6'>Сообщество</h3>
            <ul className='space-y-3 sm:space-y-4'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Corinna AI Discord
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Чат для идей
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Конкурс креативов
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Corinna Talks
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                >
                  Newsletters
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram Posts */}
          <div>
            <h3 className='text-lg sm:text-xl font-bold mb-4 sm:mb-6'>Instagram post</h3>
            <div className='grid grid-cols-3 gap-1 sm:gap-2'>
              <div className='aspect-square rounded-lg overflow-hidden group cursor-pointer'>
                <img
                  src='/images/insta-post-1.jpg'
                  alt='Instagram post 1'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='aspect-square rounded-lg overflow-hidden group cursor-pointer'>
                <img
                  src='/images/insta-post-2.jpg'
                  alt='Instagram post 2'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='aspect-square rounded-lg overflow-hidden group cursor-pointer'>
                <img
                  src='/images/insta-post-3.jpg'
                  alt='Instagram post 3'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='aspect-square rounded-lg overflow-hidden group cursor-pointer'>
                <img
                  src='/images/insta-post-4.jpg'
                  alt='Instagram post 4'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='aspect-square rounded-lg overflow-hidden group cursor-pointer'>
                <img
                  src='/images/insta-post-5.jpg'
                  alt='Instagram post 5'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm'>
            <p className='text-gray-400 text-center md:text-left'>
              ©2025 Corinna AI. Все права защищены экосистемой ZEPHYR.
            </p>

            <div className='flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6'>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                Terms and conditions
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                Privacy policy
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                Login / Signup
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
