import { create } from 'zustand';
import { Tarea as Task } from '../../types/tareas';

interface TasksState {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  selectedTask: Task | null;
  setSelectedTask: (task: Task | null) => void;
  isUpsertTaskModalOpen: boolean;
  setIsUpsertTaskModalOpen: (isOpen: boolean) => void;
}

const useTasksState = create<TasksState>((set) => ({
  tasks: [],
  setTasks: (tasks: Task[]) => set({ tasks }),
  selectedTask: null,
  setSelectedTask: (task: Task | null) => set({ selectedTask: task }),
  isUpsertTaskModalOpen: false,
  setIsUpsertTaskModalOpen: (isOpen: boolean) =>
    set({ isUpsertTaskModalOpen: isOpen }),
}));

export default useTasksState;
