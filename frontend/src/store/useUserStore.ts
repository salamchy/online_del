import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";
import axios from "axios";
import { SignUpInput } from "@/schema/userSchema";
import { toast } from "sonner";

const API_END_POINTS = "http://localhost:8003/api/user"
axios.defaults.withCredentials = true;

export const useUserStore = create<any>()(persist((set) => ({
  user: null,
  isAuthenticated: false,
  isCheckingAuth: true,
  loading: false,
  //signup api implementation
  signup: async (input: SignUpInput) => {
    try {
      set({ loading: true });
      const response = await axios.post(`${API_END_POINTS}/signup`, input, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data.success) {
        console.log(response.data);
        toast.success(response.data.message);
        set({ loading: false, user: response.data.user, isAuthenticated: true });
      }
    } catch (error) {
      set({ loading: false })
    }
  }
}
}),
{
  name: 'user-name',
    storage: createJSONStorage(() => localStorage),
  }

))