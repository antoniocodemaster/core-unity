import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TasksSchema, tasksSchema } from '../../lib/schemas/tasks-schemas';
import InputText from '../UI/InputText';
import Button from '../UI/Button';
const UpsertTasksForm = () => {
  const taskForm = useForm<TasksSchema>({
    resolver: zodResolver(tasksSchema),
    defaultValues: {
      titulo: '',
      descripcion: '',
    },
  });

  const onSubmit = (data: TasksSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={taskForm.handleSubmit(onSubmit)}>
      <InputText
        name="titulo"
        label="Título"
        register={taskForm.register}
        placeholder="Título de la tarea"
        type="text"
      />

      <InputText
        name="descripcion"
        label="Descripción"
        register={taskForm.register}
        placeholder="Descripción de la tarea"
        type="text"
      />

      <Button type="submit" variant="go">
        Agregar Tarea
      </Button>
    </form>
  );
};

export default UpsertTasksForm;
