'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerSchema, type RegisterInput } from '@/lib/validations/auth';
import { useAuthUI } from '@/stores/auth-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import OAuthButtons from './OAuth-buttons';
import PasswordStrength from './password-strength';
import Link from 'next/link';

export default function RegisterForm() {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '', confirm: '', agree: false },
    mode: 'onChange',
  });
  const { loading, setLoading, setLastEmail } = useAuthUI();

  async function onSubmit(values: RegisterInput) {
    setLoading(true);
    try {
      // TODO: call your API /auth/register
      // await fetch("/api/auth/register", { method: "POST", body: JSON.stringify(values) })
      setLastEmail(values.email);
      // redirect to verify or to agency/create
    } finally {
      setLoading(false);
    }
  }

  const pwd = form.watch('password');

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
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Полное имя</FormLabel>
                <FormControl>
                  <Input placeholder='Your name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                    autoComplete='new-password'
                    {...field}
                  />
                </FormControl>
                <PasswordStrength value={pwd} />
                <FormDescription>Используйте 8+ символов с буквами и цифрами.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='confirm'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Подтвердите пароль</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='••••••••'
                    autoComplete='new-password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='agree'
            render={({ field }) => (
              <FormItem className='flex items-center space-x-2'>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className='leading-none'>
                  <FormLabel className='font-normal'>
                    Я согласен с{' '}
                    <Link className='underline' href='/terms'>
                      Условия
                    </Link>
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-full' disabled={loading}>
            Зарегистрироваться
          </Button>
        </form>
      </Form>
    </div>
  );
}
