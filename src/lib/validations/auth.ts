import { z } from 'zod';

export const emailSchema = z.string().min(1, 'Email is required').email('Invalid email address');

export const passwordSchema = z
  .string()
  .min(8, 'At least 8 characters')
  .regex(/[A-Z]/, 'Add an uppercase letter')
  .regex(/[a-z]/, 'Add a lowercase letter')
  .regex(/[0-9]/, 'Add a number');

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
  remember: z.boolean().optional(),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Enter your name'),
    email: emailSchema,
    password: passwordSchema,
    confirm: z.string(),
    agree: z.boolean().refine((v) => v === true, {
      message: 'You must accept the Terms',
    }),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords do not match',
    path: ['confirm'],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

export function passwordScore(pw: string) {
  let score = 0;
  if (pw.length >= 8) score += 1;
  if (/[A-Z]/.test(pw)) score += 1;
  if (/[a-z]/.test(pw)) score += 1;
  if (/[0-9]/.test(pw)) score += 1;
  if (/[^A-Za-z0-9]/.test(pw)) score += 1;
  return score; // 0..5
}
