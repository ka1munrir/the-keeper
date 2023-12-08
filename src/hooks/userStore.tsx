import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
    currentUser: userType
    logOut: () => void
    signIn: (by: userType) => void
}

const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            currentUser: {
                "id": -1,
                "username": "none",
                "password": "none",
                "basketballWins": -1,
                "basketballLosses": -1,
                "futballWins": -1,
                "futballLosses": -1,
                "pingpongWins": -1,
                "pingpongLosses": -1
            },
            logOut: () => set((state) => ({
                currentUser: {
                    "id": -1,
                    "username": "none",
                    "password": "none",
                    "basketballWins": -1,
                    "basketballLosses": -1,
                    "futballWins": -1,
                    "futballLosses": -1,
                    "pingpongWins": -1,
                    "pingpongLosses": -1
                }
            })),
            signIn: (by) => {
                
                set((state) => ({ currentUser: by }))
            },
        }),
        { name: 'userStore' }
    )
);

export default useUserStore;