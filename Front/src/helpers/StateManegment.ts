import { create } from 'zustand';

export interface StoreState {
    isMobilePOPupOpen: boolean;
    setIsMobilePOPupOpen: (isOpen: boolean) => void;
    SelectedPriceVariant: number;
    setSelectedPriceVariant: (variant: number) => void;
}

export const useStore = create<StoreState>((set) => ({
    isMobilePOPupOpen: false,
    setIsMobilePOPupOpen: (isOpen: boolean) =>
        set({ isMobilePOPupOpen: isOpen }),
    SelectedPriceVariant: 0,
    setSelectedPriceVariant: (variant: number) =>
        set({ SelectedPriceVariant: variant }),
}));
