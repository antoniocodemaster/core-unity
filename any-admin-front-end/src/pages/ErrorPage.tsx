import { useRouteError } from 'react-router-dom';

import Nav from '../components/Nav';
import Title from '../components/typography/Title';
import Text from '../components/typography/Text';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col min-h-[100svh]">
      <Nav />

      <main className="px-6">
        <Title title="Oops!" className="mt-6" />
        <Text>Page not found</Text>
      </main>
    </div>
  );
}
