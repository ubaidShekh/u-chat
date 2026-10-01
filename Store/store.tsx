import { create } from 'zustand';

interface StoreState {
  visibleTabBar: boolean;
  setVisibleTabBar: (visible: boolean) => void;
}
export const useStore = create<StoreState>((set) => ({
  visibleTabBar: true,
  setVisibleTabBar: (visible: boolean) => set({ visibleTabBar: visible }),
}))