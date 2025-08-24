import { ResetRequestForm } from '../../../components/global/auth/reset-request-form';

export default function ResetPasswordRequestPage() {
  return (
    <div className='min-h-screen grid place-items-center bg-muted/30 py-10'>
      <div className='w-full max-w-md rounded-2xl bg-background p-6 shadow-sm'>
        <h1 className='text-2xl font-bold mb-1'>Сбросить пароль</h1>
        <p className='text-sm text-muted-foreground mb-6'>
          Мы отправим вам ссылку для сброса пароля по электронной почте.
        </p>
        <ResetRequestForm />
        <p className='mt-6 text-center text-sm text-muted-foreground'>
          Помните это?{' '}
          <a href='/login' className='underline'>
            Вернуться к входу
          </a>
        </p>
      </div>
    </div>
  );
}
