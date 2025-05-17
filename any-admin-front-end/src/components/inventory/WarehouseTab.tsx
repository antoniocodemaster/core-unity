import Table from '../UI/Table';
import { wharehouseProducts } from '../../lib/fakes/wharehouse-products';
import Button from '../UI/Button';

const WarehouseTab = () => {
  return (
    <>
      <Table
        columns={[
          { key: 'nombre', label: 'Nombre' },
          { key: 'cantidad', label: 'Cantidad' },
          { key: 'precio', label: 'Precio' },
        ]}
        tableItems={wharehouseProducts}
      />
      <Button className="mt-4" onClick={() => console.log('Agregar Producto')}>
        Agregar Producto
      </Button>
    </>
  );
};

export default WarehouseTab;
