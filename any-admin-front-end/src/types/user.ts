export type Usuario = {
  id: string;
  nombre: string;
  correoElectronico: string;
  contrasena: string;
  fechaCreacion: Date;
  fechaActualizacion: Date;
  estaActivo: boolean;
  rol: RolUsuario;
};

export type RolUsuario = 'admin' | 'usuario';