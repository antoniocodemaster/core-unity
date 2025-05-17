import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface PointOfSalesState {
  isProcessSalesModalOpen: boolean;
  setIsProcessSalesModalOpen: (isOpen: boolean) => void;
}

const usePointOfSalesState = create<PointOfSalesState>()(
  devtools(
    (set) => ({
      isProcessSalesModalOpen: false,
      setIsProcessSalesModalOpen: (isOpen: boolean) =>
        set({ isProcessSalesModalOpen: isOpen }),
    }),
    { name: 'PointOfSalesState' }
  )
);

export default usePointOfSalesState;
