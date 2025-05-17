import { useState } from 'react';
import Nav from '../components/Nav';
import Title from '../components/typography/Title';
import Text from '../components/typography/Text';
import Button from '../components/UI/Button';
import { toast } from 'react-hot-toast';

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      <header className="bg-white text-[#3a5081] py-4 sticky top-0 z-10 shadow">
        <nav className="flex justify-between items-center px-6">
          <div className="text-xl font-bold">AnyAdmin</div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden focus:outline-none"
          >
            ☰
          </button>
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => scrollTo('hero')}
              className="hover:underline"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="hover:underline"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="hover:underline"
            >
              Quienes somos
            </button>
            <button
              onClick={() => scrollTo('testimonials')}
              className="hover:underline"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:underline"
            >
              Contáctenos
            </button>
            <a
              href="http://localhost:4000/admin-dashboard"
              className="hover:underline"
            >
              AdminZone
            </a>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 space-y-4 text-[#3a5081]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mb-4 text-right w-full"
            >
              ✕
            </button>
            <button
              onClick={() => {
                scrollTo('hero');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => {
                scrollTo('services');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left"
            >
              Servicios
            </button>
            <button
              onClick={() => {
                scrollTo('about');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left"
            >
              Quienes somos
            </button>
            <button
              onClick={() => {
                scrollTo('testimonials');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left"
            >
              Testimonios
            </button>
            <button
              onClick={() => {
                scrollTo('contact');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left"
            >
              Contáctenos
            </button>
            <a
              href="http://localhost:4000/admin-dashboard"
              className="block w-full text-left"
            >
              AdminZone
            </a>
          </div>
        </div>
      )}

      <section id="hero" className="bg-[#e5ebf5] text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3a5081] mb-4">
          AnyAdmin
        </h1>
        <p className="text-xl md:text-2xl text-[#4b66a5]">
          Herramientas tecnológicas para la administración de tu negocio
        </p>
      </section>

      <section id="services" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3a5081]">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            'Reportes',
            'Inventario',
            'Planilla',
            'Ventas',
            'Clientes',
            'Tareas',
          ].map((service) => (
            <div
              key={service}
              className="bg-[#e5ebf5] p-6 rounded shadow text-center"
            >
              <div className="h-32 bg-[#88b0ed] mb-4 rounded"></div>
              <h3 className="text-xl font-semibold text-[#3a5081]">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-[#f8f9fa]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#3a5081]">
          ¿Quiénes somos?
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia neque at justo facilisis, id vehicula arcu efficitur.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#dbdad9] p-6 rounded">
            <h3 className="text-xl font-semibold mb-2 text-[#3a5081]">
              Nuestra Visión
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-[#dbdad9] p-6 rounded">
            <h3 className="text-xl font-semibold mb-2 text-[#3a5081]">
              Nuestra Misión
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3a5081]">
          Testimonios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[1, 2].map((i) => (
            <div key={i} className="bg-[#f5f5f5] p-6 rounded shadow">
              <p className="italic mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <p className="font-semibold text-right">– Usuario {i}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-[#e5ebf5]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#3a5081]">
          Contáctenos
        </h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 border border-gray-300 rounded h-32"
          ></textarea>
          <Button onClick={() => toast.success('Mensaje enviado')}>
            Enviar
          </Button>
        </form>
      </section>

      <footer className="bg-[#3a5081] text-white text-center py-4">
        <p>
          © {new Date().getFullYear()} AnyAdmin. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
