import { z } from 'zod';

export const contactSchema = z.object({
  primerNombre: z.string().min(1, { message: 'Nombre es requerido' }),
  apellido: z.string().min(1, { message: 'Apellido es requerido' }),
  telefonoPrincipal: z
    .string()
    .min(1, { message: 'Teléfono principal es requerido' }),
  correoElectronico: z
    .string()
    .min(1, { message: 'Correo electrónico es requerido' }),
  direccion: z.string().optional(),
  ciudad: z.string().optional(),
  estado: z.string().optional(),
  codigoPostal: z.string().optional(),
  pais: z.string().optional(),
  tipoContacto: z.string().optional(),
  notas: z.string().optional(),
});

export type ContactSchema = z.infer<typeof contactSchema>;