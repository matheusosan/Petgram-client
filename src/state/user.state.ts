import { create } from "zustand";

interface UserProps {
  sub: string;
  email: string;
  username: string;
}

interface StoreProps {
  user: UserProps | null;
  isAuthenticated: boolean;
  setUser: (user: UserProps) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<StoreProps>((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) => set({ user }),
  clearAuth: () => {
    localStorage.removeItem("token");
    set({ user: null, isAuthenticated: false });
  },
}));
