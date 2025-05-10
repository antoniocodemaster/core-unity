import Table from '../UI/Table';
import { storeProducts as products } from '../../lib/fakes/store-products';

const StoreTab = () => {
  return (
    <>
      <Table
        columns={[
          { key: 'nombre', label: 'Nombre' },
          { key: 'cantidad', label: 'Cantidad' },
          { key: 'precio', label: 'Precio' },
        ]}
        tableItems={products}
      />
    </>
  );
};

export default StoreTab;
