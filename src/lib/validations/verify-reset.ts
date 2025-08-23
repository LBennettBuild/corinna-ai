import { z } from 'zod';
import { passwordSchema } from '@/lib/validations/auth';

export const verifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, 'Enter the 6‑digit code')
    .max(6, 'Code is 6 digits')
    .regex(/^\d{6}$/g, 'Only digits'),
  email: z.string().email(),
});
export type VerifyEmailInput = z.infer<typeof verifyEmailSchema>;

export const resetRequestSchema = z.object({
  email: z.string().email('Enter a valid email'),
});
export type ResetRequestInput = z.infer<typeof resetRequestSchema>;

export const resetConfirmSchema = z
  .object({
    password: passwordSchema,
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, {
    path: ['confirm'],
    message: 'Passwords do not match',
  });
export type ResetConfirmInput = z.infer<typeof resetConfirmSchema>;
