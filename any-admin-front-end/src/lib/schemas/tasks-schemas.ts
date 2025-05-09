import { z } from 'zod';

export const tasksSchema = z.object({
  titulo: z.string().min(1, { message: 'Título es requerido' }),
  descripcion: z.string().min(1, { message: 'Descripción es requerida' }),
});

export type TasksSchema = z.infer<typeof tasksSchema>;
