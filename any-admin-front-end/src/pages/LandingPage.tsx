import { useState } from 'react';

import Nav from '../components/Nav';
import Title from '../components/typography/Title';
import Text from '../components/typography/Text';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import { toast } from 'react-hot-toast';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-[100svh]">
        <Nav />

        <main className="px-6">
          <Title title="Welcome to my React App" className="mt-6" />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </Text>

          <div className="flex gap-4 mt-6">
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

            <Button onClick={() => toast.success('Hello, world!')}>
              Show Toast
            </Button>
          </div>
        </main>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Title title="Modal Title" />
        <Text>Modal Content</Text>
      </Modal>
    </>
  );
};

export default LandingPage;
