import VerifyEmailForm from '../../../components/global/auth/verify-email-form';

export default function VerifyEmailPage({ searchParams }: { searchParams: { email?: string } }) {
  const email = searchParams?.email ?? '';
  return (
    <div className='min-h-screen grid place-items-center bg-muted/30 py-10'>
      <div className='w-full max-w-md rounded-2xl bg-background p-6 shadow-sm'>
        <h1 className='text-2xl font-bold mb-1'>Verify your email</h1>
        <p className='text-sm text-muted-foreground mb-6'>Finish creating your account</p>
        <VerifyEmailForm email={email} />
        <p className='mt-6 text-center text-sm text-muted-foreground'>
          Wrong email?{' '}
          <a className='underline' href='/register'>
            Go back
          </a>
        </p>
      </div>
    </div>
  );
}
