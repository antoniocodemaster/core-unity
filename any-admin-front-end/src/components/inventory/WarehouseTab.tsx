import Table from '../UI/Table';
import { wharehouseProducts } from '../../lib/fakes/wharehouse-products';

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
    </>
  );
};

export default WarehouseTab;
