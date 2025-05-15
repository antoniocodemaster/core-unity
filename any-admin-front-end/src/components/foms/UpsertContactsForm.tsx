import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactSchema,
  ContactSchema,
} from '../../lib/schemas/contacts-schemas';
import InputText from '../UI/InputText';
import { forwardRef } from 'react';
import TwoRowsFieldContainer from '../UI/TwoRowsFieldContainer';
interface UpsertContactsFormProps {
  onSubmit: (data: ContactSchema) => void;
}

const UpsertContactsForm = forwardRef<HTMLFormElement, UpsertContactsFormProps>(
  ({ onSubmit }, ref) => {
    const contactForm = useForm<ContactSchema>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        nombre: '',
        apellido: '',
        telefonoPrincipal: '',
        correoElectronico: '',
        direccion: '',
        ciudad: '',
        estado: '',
        codigoPostal: '',
        pais: '',
      },
    });

    const handleSubmit = (data: ContactSchema) => {
      onSubmit(data);
    };

    return (
      <form ref={ref} onSubmit={contactForm.handleSubmit(handleSubmit)}>
        <TwoRowsFieldContainer>
          <InputText
            name="nombre"
            label="Nombre"
            type="text"
            placeholder="Enter your name"
            register={contactForm.register}
            error={contactForm.formState.errors.nombre?.message}
          />

          <InputText
            name="apellido"
            label="Apellido"
            type="text"
            placeholder="Enter your last name"
            register={contactForm.register}
            error={contactForm.formState.errors.apellido?.message}
          />

          <InputText
            name="telefonoPrincipal"
            label="Teléfono principal"
            type="text"
            placeholder="Enter your phone number"
            register={contactForm.register}
            error={contactForm.formState.errors.telefonoPrincipal?.message}
          />

          <InputText
            name="correoElectronico"
            label="Correo electrónico"
            type="email"
            placeholder="Enter your email"
            register={contactForm.register}
            error={contactForm.formState.errors.correoElectronico?.message}
          />

          <InputText
            name="streetAddress"
            label="Dirección"
            type="text"
            placeholder="Direccion de contacto"
            register={contactForm.register}
            error={contactForm.formState.errors.direccion?.message}
          />

          <InputText
            name="city"
            label="Ciudad"
            type="text"
            placeholder="Enter your city"
            register={contactForm.register}
            error={contactForm.formState.errors.ciudad?.message}
          />
        </TwoRowsFieldContainer>
      </form>
    );
  }
);

export default UpsertContactsForm;
