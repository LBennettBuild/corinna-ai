import { create } from 'zustand';

interface AuthUIState {
  loading: boolean;
  setLoading: (v: boolean) => void;
  lastEmail?: string;
  setLastEmail: (e?: string) => void;
  oauthLoading: boolean;
  setOauthLoading: (v: boolean) => void;
}

export const useAuthUI = create<AuthUIState>((set) => ({
  loading: false,
  setLoading: (v) => set({ loading: v }),
  lastEmail: undefined,
  setLastEmail: (e) => set({ lastEmail: e }),
  oauthLoading: false,
  setOauthLoading: (v) => set({ oauthLoading: v }),
}));
