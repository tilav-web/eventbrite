import type { IUser } from "@/interfaces/user.interface";
import { create } from "zustand";

interface UserState {
  user: undefined | null | IUser;
  setUser: (user: IUser | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
