// utils/fetchData.js
import axios from "axios";

export const fetchDatas = async (setProducts, setLoading) => {
  setLoading(true);
  try {
    const response = await axios.get(
      "https://6718aacc7fc4c5ff8f4a7ab2.mockapi.io/coba"
    );
    setProducts(response.data);
  } catch (error) {
    console.log(error);
  }
  setLoading(false);
};

export const deleteData = async (id, setProducts, setLoading) => {
  try {
    await axios.delete(
      `https://6718aacc7fc4c5ff8f4a7ab2.mockapi.io/coba/${id}`
    );
    alert("Data berhasil dihapus.");
    // Panggil fetchData untuk memuat ulang data setelah penghapusan
    fetchDatas(setProducts, setLoading);
  } catch (error) {
    console.error("Error saat menghapus data:", error);
    alert("Gagal menghapus data.");
  }
};

export const postData = async (formData, setProducts, setLoading) => {
  try {
    // Mapping data untuk sesuai dengan format backend
    const mappedData = {
      productname: formData.productName,
      productcategory: formData.productCategory,
      productfresh: formData.productFreshness,
      productprice: formData.productPrice,
      productfile: formData.productImage, // Pastikan sudah dalam URL atau path yang benar jika file gambar
    };

    await axios.post(
      "https://6718aacc7fc4c5ff8f4a7ab2.mockapi.io/coba",
      mappedData
    );
    alert("Data berhasil ditambahkan.");

    // Panggil fetchData untuk memuat ulang data setelah penambahan
    fetchDatas(setProducts, setLoading);
  } catch (error) {
    console.error("Error saat menambahkan data:", error);
  }
};

export const updateData = async (id, formData, setProducts, setLoading) => {
  try {
    const mappedData = {
      productname: formData.productName,
      productcategory: formData.productCategory,
      productfresh: formData.productFreshness,
      productprice: formData.productPrice,
      productfile: formData.productImage,
    };

    await axios.put(
      `https://6718aacc7fc4c5ff8f4a7ab2.mockapi.io/coba/${id}`,
      mappedData
    );
    alert("Data berhasil diperbarui.");

    // Panggil fetchDatas untuk memuat ulang data setelah pembaruan
    fetchDatas(setProducts, setLoading);
  } catch (error) {
    console.error("Error saat memperbarui data:", error);
  }
};
