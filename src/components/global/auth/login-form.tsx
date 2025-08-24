'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema, type LoginInput } from '@/lib/validations/auth';
import { useAuthUI } from '@/stores/auth-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import OAuthButtons from './OAuth-buttons';
import Link from 'next/link';

export default function LoginForm() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', remember: true },
  });
  const { loading, setLoading, setLastEmail } = useAuthUI();

  async function onSubmit(values: LoginInput) {
    setLoading(true);
    try {
      // TODO: sign-in call
      // await signIn(values)
      setLastEmail(values.email);
      // redirect to /dashboard
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='space-y-4'>
      <OAuthButtons />
      <div className='relative my-2 text-center'>
        <span className='px-2 text-xs text-muted-foreground bg-background relative z-10'>или</span>
        <div className='absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border' />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Электронная почта</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='you@example.com'
                    autoComplete='email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='••••••••'
                    autoComplete='current-password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex items-center justify-between'>
            <FormField
              control={form.control}
              name='remember'
              render={({ field }) => (
                <FormItem className='flex items-center space-x-2'>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className='font-normal'>Запомнить меня</FormLabel>
                </FormItem>
              )}
            />
            <Link href='/reset-password' className='text-sm underline'>
              Забыли пароль?
            </Link>
          </div>

          <Button type='submit' className='w-full' disabled={loading}>
            Войти
          </Button>
        </form>
      </Form>
    </div>
  );
}
