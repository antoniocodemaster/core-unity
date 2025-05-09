import { z } from 'zod';

export const contactSchema = z.object({
  nombre: z.string().min(1, { message: 'Nombre es requerido' }),
  apellido: z.string().min(1, { message: 'Apellido es requerido' }),
  telefonoPrincipal: z
    .string()
    .min(1, { message: 'Teléfono principal es requerido' }),
  correoElectronico: z
    .string()
    .min(1, { message: 'Correo electrónico es requerido' }),
});

export type ContactSchema = z.infer<typeof contactSchema>;