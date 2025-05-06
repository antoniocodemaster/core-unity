// Almacén
export type TipoAlmacen = 'bodega_principal' | 'tienda';

export type Almacen = {
  id: string;
  nombre: string;
  tipo: TipoAlmacen;
  ubicacion: string;
};

// Categoría de Producto
export type CategoriaProducto = {
  id: string;
  nombre: string;
  descripcion: string;
};

// Producto
export type Producto = {
  id: string;
  nombre: string;
  descripcion: string;
  sku: string;
  categoriaId: string;
  unidad: string;
  stockMinimo: number;
  esMateriaPrima: boolean;
  esProductoTerminado: boolean;
};

// Stock por Almacén
export type StockPorAlmacen = {
  id: string;
  productoId: string;
  almacenId: string;
  cantidad: number;
};

// Movimiento de Inventario
export type MovimientoInventario = {
  id: string;
  productoId: string;
  almacenId: string;
  cantidad: number;
  tipo: TipoMovimientoInventario;
  fechaCreacion: Date;
  fechaActualizacion: Date;
};

export type DetalleMovimientoInventario = {
  id: string;
  movimientoInventarioId: string;
};

// Tipos de Movimiento
export type TipoMovimientoInventario =
  | 'entrada'
  | 'salida'
  | 'traspaso'
  | 'devolucion';
