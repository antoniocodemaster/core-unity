import Button from '../components/UI/Button';
import Nav from '../components/Nav';
import Title from '../components/typography/Title';
import Text from '../components/typography/Text';
import { useRouteError, useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[100svh]">
      <Nav />

      <main className="px-6">
        <Title title="Oops!" className="mt-6" />
        <Text>Page not found</Text>
        <Button className="mt-4" variant="primary" onClick={() => navigate('/')}>
          Volver a la página de inicio
        </Button>
      </main>
    </div>
  );
}
