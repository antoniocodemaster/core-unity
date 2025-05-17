import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Tarea as Task } from '../../types/tareas';

interface TasksState {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  selectedTask: Task | null;
  setSelectedTask: (task: Task | null) => void;
  isUpsertTaskModalOpen: boolean;
  setIsUpsertTaskModalOpen: (isOpen: boolean) => void;
}

const useTasksState = create<TasksState>()(
  devtools(
    (set) => ({
      tasks: [],
      setTasks: (tasks: Task[]) => set({ tasks }),
      selectedTask: null,
      setSelectedTask: (task: Task | null) => set({ selectedTask: task }),
      isUpsertTaskModalOpen: false,
      setIsUpsertTaskModalOpen: (isOpen: boolean) =>
        set({ isUpsertTaskModalOpen: isOpen }),
    }),
    { name: 'TasksState' }
  )
);

export default useTasksState;
