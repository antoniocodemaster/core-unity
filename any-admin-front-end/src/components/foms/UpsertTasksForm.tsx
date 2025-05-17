import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TasksSchema, tasksSchema } from '../../lib/schemas/tasks-schemas';
import InputText from '../UI/InputText';
import { forwardRef, useEffect } from 'react';
import useTasksState from '../../lib/states/TasksState';

const formDefaultValues = {
  titulo: '',
  descripcion: '',
};

interface UpsertTasksFormProps {
  onSubmit: (data: TasksSchema) => void;
}

const UpsertTasksForm = forwardRef<HTMLFormElement, UpsertTasksFormProps>(
  ({ onSubmit }, ref) => {
    const taskForm = useForm<TasksSchema>({
      resolver: zodResolver(tasksSchema),
      defaultValues: formDefaultValues,
    });

    const { selectedTask, isUpsertTaskModalOpen, setSelectedTask } =
      useTasksState();

    const handleSubmit = (data: TasksSchema) => {
      onSubmit(data);
    };

    const handleFormReset = () => {
      taskForm.reset(formDefaultValues);
      setSelectedTask(null);
    };

    useEffect(() => {
      if (selectedTask) {
        taskForm.reset(selectedTask);
      }
    }, [selectedTask]);

    useEffect(() => {
      if (!isUpsertTaskModalOpen) handleFormReset();
    }, [isUpsertTaskModalOpen]);

    return (
      <form ref={ref} onSubmit={taskForm.handleSubmit(handleSubmit)}>
        <InputText
          name="titulo"
          label="Título"
          register={taskForm.register}
          placeholder="Título de la tarea"
          error={taskForm.formState.errors.titulo?.message}
          type="text"
        />

        <InputText
          name="descripcion"
          label="Descripción"
          register={taskForm.register}
          placeholder="Descripción de la tarea"
          type="text"
          error={taskForm.formState.errors.descripcion?.message}
        />
      </form>
    );
  }
);

export default UpsertTasksForm;
