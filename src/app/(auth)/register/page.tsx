import RegisterForm from '../../../components/global/auth/register-form';

export default function RegisterPage() {
  return (
    <div className='min-h-screen grid place-items-center bg-muted/30 py-10'>
      <div className='w-full max-w-md rounded-2xl bg-background p-6 shadow-sm'>
        <h1 className='text-2xl font-bold mb-1'>Создайте свой аккаунт</h1>
        <p className='text-sm text-muted-foreground mb-6'>
          Начните свое путешествие в мир Corrina AI
        </p>
        <RegisterForm />
        <p className='mt-6 text-center text-sm text-muted-foreground'>
          У вас уже есть аккаунт?{' '}
          <a className='underline' href='/login'>
            Войти
          </a>
        </p>
      </div>
    </div>
  );
}
