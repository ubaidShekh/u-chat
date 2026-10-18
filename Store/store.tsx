import { create } from 'zustand';

interface StoreState {
  camera: boolean;
  setCamera: (newCameraValue: boolean) => void;
  visibleTabBar: boolean;
  setVisibleTabBar: (visible: boolean) => void;
}
export const useStore = create<StoreState>((set) => ({
  camera: false,
  setCamera: (newCameraValue) => {
    set({ camera: newCameraValue });
  },

  visibleTabBar: true,
  setVisibleTabBar: (visible: boolean) => set({ visibleTabBar: visible }),
}))