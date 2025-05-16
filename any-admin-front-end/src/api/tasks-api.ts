import api from './api';
import { Tarea as Task } from '../types/tareas';

export const getTasksApi = async (): Promise<Task[]> => {
  try {
    const response = await api.get('/tasks');
    return response.data;
  } catch (error) {
    console.error('Error getting tasks', error);
    throw error;
  }
};

export const createTaskApi = async (task: Task) => {
  try {
    const response = await api.post('/tasks', task);
    return response.data;
  } catch (error) {
    console.error('Error creating task', error);
    throw error;
  }
};

export const updateTaskApi = async (task: Task) => {
  try {
    const response = await api.put(`/tasks/${task.id}`, task);
    return response.data;
  } catch (error) {
    console.error('Error updating task', error);
    throw error;
  }
};

export const deleteTaskApi = async (id: string) => {
  try {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task', error);
    throw error;
  }
};
