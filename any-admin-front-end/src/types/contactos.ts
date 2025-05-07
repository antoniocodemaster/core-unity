export type Contacto = {
  id: string;
  primerNombre: string;
  apellido: string;
  telefonoPrincipal: string;
  telefonoSecundario: string;
  correoElectronico: string;
  direccion: string;
  ciudad: string;
  estado: string;
  codigoPostal: string;
  pais: string;
  fechaCreacion: string;
  fechaActualizacion: string;
  estaActivo: boolean;
  tipoContacto: TipoContacto;
};

export type TipoContacto = 'cliente' | 'proveedor' | 'otro';