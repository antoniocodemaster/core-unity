import Table from '../UI/Table';
import { storeProducts as products } from '../../lib/fakes/store-products';
import Button from '../UI/Button';

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
      <Button className="mt-4" onClick={() => console.log('Agregar Producto')}>
        Agregar Producto
      </Button>
    </>
  );
};

export default StoreTab;
