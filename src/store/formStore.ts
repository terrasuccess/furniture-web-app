
import { create } from 'zustand';
import { FurnitureFormData, FormStep } from '../types/form';

interface FormState {
  currentStep: FormStep;
  formData: FurnitureFormData;
  setCurrentStep: (step: FormStep) => void;
  updateFormData: (data: Partial<FurnitureFormData>) => void;
  addItem: () => void;
  resetForm: () => void;
}

const initialFormData: FurnitureFormData = {
  items: [{
    quantity: 0,
    model: '',
    designer: '',
    manufacturer: '',
    condition: '',
    materials: '',
    price: 0
  }]
};

export const useFormStore = create<FormState>((set) => ({
  currentStep: 'welcome',
  formData: initialFormData,
  
  setCurrentStep: (step) => set({ currentStep: step }),
  
  updateFormData: (data) => 
    set((state) => ({
      formData: { ...state.formData, ...data }
    })),
    
  addItem: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        items: [
          ...state.formData.items,
          {
            quantity: 0,
            model: '',
            designer: '',
            manufacturer: '',
            condition: '',
            materials: '',
            price: 0
          }
        ]
      }
    })),
    
  resetForm: () => 
    set({ 
      currentStep: 'welcome',
      formData: initialFormData
    })
}));
