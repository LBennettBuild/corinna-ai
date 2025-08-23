import LoginForm from '../../../components/global/auth/login-form';

export default function LoginPage() {
  return (
    <div className='min-h-screen grid place-items-center bg-muted/30 py-10'>
      <div className='w-full max-w-md rounded-2xl bg-background p-6 shadow-sm'>
        <h1 className='text-2xl font-bold mb-1'>Welcome back</h1>
        <p className='text-sm text-muted-foreground mb-6'>Sign in to continue</p>
        <LoginForm />
        <p className='mt-6 text-center text-sm text-muted-foreground'>
          New here?{' '}
          <a className='underline' href='/register'>
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
