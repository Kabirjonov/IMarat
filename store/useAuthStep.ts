import { create } from "zustand";
interface AuthStepState {
	step: "login" | "forgotPassword";
	setStep: (step: "login" | "forgotPassword") => void;
}

export const useAuthStep = create<AuthStepState>(set => ({
	step: "login",
	setStep: step => set({ step }),
}));
