import { ResetConfirmForm } from '../../../../components/global/auth/reset-confirm-form';

export default function ResetPasswordConfirmPage({ params }: { params: { token: string } }) {
  return (
    <div className='min-h-screen grid place-items-center bg-muted/30 py-10'>
      <div className='w-full max-w-md rounded-2xl bg-background p-6 shadow-sm'>
        <h1 className='text-2xl font-bold mb-1'>Создайте новый пароль</h1>
        <p className='text-sm text-muted-foreground mb-6'>Введите и подтвердите новый пароль</p>
        <ResetConfirmForm token={params.token} />
      </div>
    </div>
  );
}
