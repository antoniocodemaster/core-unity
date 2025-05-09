export type Tarea = {
  id: string;
  titulo: string;
  descripcion: string;
  estado: EstadoTarea;
  asignadoA: string;
  creadoPor: string;
  estaActiva: boolean;
  fechaCreacion: string;
  fechaActualizacion: string;
};

export type EstadoTarea = 'pendiente' | 'en_progreso' | 'completada';
export type TipoTarea = 'tarea' | 'proyecto' | 'orden_de_produccion' | 'otro';