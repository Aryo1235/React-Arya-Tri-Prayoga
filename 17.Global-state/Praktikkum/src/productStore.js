import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  counter: 1001, // counter untuk produk
  formData: {
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
    productImage: null,
  },
  editMode: false,
  editId: null,

  // Actions
  setFormData: (formData) => set({ formData }),
  setEditMode: (editMode) => set({ editMode }),
  setEditId: (editId) => set({ editId }),
  addProduct: (newProduct) =>
    set((state) => ({
      products: [...state.products, newProduct],
      counter: state.counter + 1,
    })),
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
      editMode: false,
      editId: null,
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  resetForm: () =>
    set({
      formData: {
        productName: "",
        productCategory: "",
        productFreshness: "",
        productPrice: "",
        productImage: null,
      },
    }),
}));

export default useProductStore;
