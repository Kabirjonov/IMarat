import { create } from "zustand";
interface AuthStepState {
	isAuthenticated: boolean;
	setAuthenticated: (isAuthenticated: boolean) => void;
	userRole: "admin" | "user" | null;
	setUserRole: (role: "admin" | "user" | null) => void;
}

export const useAdminSession = create<AuthStepState>(set => ({
	isAuthenticated: false,
	setAuthenticated: isAuthenticated => set({ isAuthenticated }),
	userRole: null,
	setUserRole: role => set({ userRole: role }),
}));
