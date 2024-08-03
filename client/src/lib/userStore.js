import { create } from 'zustand'

export const userStore = create((set) => ({
    userName : "",
    userEmail : "",
    setUserName: (userName) => set({ userName }),
    setUserEmail: (userEmail) => set({ userEmail }),
}))


export const sliderStore = create((set) => ({
    slider: true, // Initial state
    setSlider: (value) => set({ slider: value }), // Action to set slider state
  }));