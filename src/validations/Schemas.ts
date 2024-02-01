import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email({
        message: 'Por favor, ingrese un correo electrónico válido.',
    }),
    password: z.string().min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres.',
    }),
});

export const registerSchema = z.object({
    email: z.string().email({
        message: 'Por favor, ingrese un correo electrónico válido.',
    }),
    password: z.string().min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres.',
    }),
});

export const ForgotSchema = z.object({
    email: z.string().email({
        message: 'Por favor, ingrese un correo electrónico válido.',
    }),
});

export const CodeSentSchema = z.object({
    code: z.string().array().length(6, { message: "El código debe tener 6 caracteres" }),
    password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
    passwordConfirmation: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
}).refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: 'Las contraseñas deben coincidir.',
});

