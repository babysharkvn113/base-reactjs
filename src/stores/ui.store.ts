import { create } from "zustand";
interface IUIStore {
    asideStatus: boolean;
    setAsideStatus: (status: boolean) => void
}
const useUIStore = create<IUIStore>((set) => ({
    asideStatus: true,
    setAsideStatus: (status: boolean) => set({ asideStatus: status }),
}));

export default useUIStore;