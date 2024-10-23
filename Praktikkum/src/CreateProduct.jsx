import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(1001); // Nomor awal untuk produk
  const navigate = useNavigate(); // digunakan untuk navigasi
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
    productImage: null, // Tambahkan untuk menyimpan gambar
  });

  const handleChange = (e) => {
    // Mengambil informasi dari input yang diubah
    const inputName = e.target.name; // Nama input (productName, productCategory, dll.)
    const inputValue = e.target.value; // Nilai dari input teks
    const inputFiles = e.target.files; // File yang diunggah jika input adalah file

    // Memperbarui state formData
    setFormData((prevData) => {
      // Membuat salinan dari data sebelumnya
      const updatedData = { ...prevData };

      // Memeriksa jika input adalah tipe file
      if (inputFiles && inputFiles.length > 0) {
        // Jika ada file yang diunggah, simpan file pertama
        updatedData[inputName] = inputFiles[0]; // Menyimpan file yang diunggah
      } else {
        // Jika input bukan file, simpan nilai teks
        updatedData[inputName] = inputValue; // Menyimpan nilai input teks
      }

      return updatedData; // Mengembalikan data yang sudah diperbarui
    });
  };

  const validateInputs = () => {
    const {
      productName,
      productCategory,
      productFreshness,
      productPrice,
      productImage,
    } = formData;

    const nameRegex = /^[a-zA-Z\s]+$/; // Regex untuk nama produk (hanya huruf dan spasi)
    const categoryRegex = /^[a-zA-Z\s]+$/; // Regex untuk kategori produk
    const freshnessRegex = /^[a-zA-Z\s]+$/; // Regex untuk kesegaran produk
    const priceRegex = /^[0-9]+(\.[0-9]{1,2})?$/; // Regex untuk harga produk (angka, dengan dua desimal maksimal)

    if (!nameRegex.test(productName)) {
      alert("Product name must only contain letters and spaces.");
      return false;
    }
    if (!categoryRegex.test(productCategory)) {
      alert("Product category must only contain letters and spaces.");
      return false;
    }
    if (!freshnessRegex.test(productFreshness)) {
      alert("Product freshness must only contain letters and spaces.");
      return false;
    }
    if (!priceRegex.test(productPrice)) {
      alert("Product price must be a valid number.");
      return false;
    }
    if (!productImage) {
      alert("Please upload an image.");
      return false;
    }

    return true; // Semua validasi lulus
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return; // Jika validasi gagal, hentikan proses
    }

    const newProduct = {
      id: counter,
      ...formData,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setCounter(counter + 1);

    setFormData({
      productName: "",
      productCategory: "",
      productFreshness: "",
      productPrice: "",
      productImage: null, // Reset gambar setelah submit
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Apakah kalian ingin menghapus?");
    if (confirmDelete) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    }
  };

  const handleProductDetail = (id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      navigate(`/createproduct/${id}`, { state: { product } });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          required
          className="border rounded w-full p-2"
        />
        <input
          type="text"
          name="productCategory"
          placeholder="Product Category"
          value={formData.productCategory}
          onChange={handleChange}
          required
          className="border rounded w-full p-2"
        />
        <input
          type="text"
          name="productFreshness"
          placeholder="Product Freshness"
          value={formData.productFreshness}
          onChange={handleChange}
          required
          className="border rounded w-full p-2"
        />
        <input
          type="number"
          name="productPrice"
          placeholder="Product Price"
          value={formData.productPrice}
          onChange={handleChange}
          required
          className="border rounded w-full p-2"
        />
        <input
          type="file" // Input untuk upload file
          name="productImage"
          onChange={handleChange}
          accept="image/*" // Hanya menerima file gambar
          className="border rounded w-full p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-8">List Product</h2>
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">No</th>
            <th className="py-2 px-4 border-b text-left">Product Name</th>
            <th className="py-2 px-4 border-b text-left">Product Category</th>
            <th className="py-2 px-4 border-b text-left">Product Freshness</th>
            <th className="py-2 px-4 border-b text-left">Product Price</th>
            <th className="py-2 px-4 border-b text-left">Product Image</th>{" "}
            {/* Tambahkan kolom untuk gambar */}
            <th className="py-2 px-4 border-b text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-left">
                <button
                  onClick={() => handleProductDetail(product.id)}
                  className="text-blue-500 underline"
                >
                  {product.id}
                </button>
              </td>
              <td className="py-2 px-4 border-b text-left">
                {product.productName}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {product.productCategory}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {product.productFreshness}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {product.productPrice}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {product.productImage && product.productImage.name}{" "}
                {/* Menampilkan nama gambar */}
              </td>
              <td className="py-2 px-4 border-b text-left">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CreateProduct;
