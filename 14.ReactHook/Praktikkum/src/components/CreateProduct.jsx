import React, { useState } from "react";

function CreateProduct() {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(1000); // Nomor awal untuk produk

  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
  });

  // Fungsi untuk menangani perubahan pada form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk menambahkan produk ke dalam tabel
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: counter, // Menggunakan counter untuk nomor produk
      ...formData,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setCounter(counter + 1); // Increment counter agar nomor tidak duplikat

    // Reset form
    setFormData({
      productName: "",
      productCategory: "",
      productFreshness: "",
      productPrice: "",
    });
  };

  // Fungsi untuk menghapus produk dengan konfirmasi
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Apakah kalian ingin menghapus?");
    if (confirmDelete) {
      setCounter(counter); // Kurangi counter agar nomor tidak duplikat
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={formData.productName}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <input
            type="text"
            name="productCategory"
            placeholder="Product Category"
            value={formData.productCategory}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <input
            type="text"
            name="productFreshness"
            placeholder="Product Freshness"
            value={formData.productFreshness}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <input
            type="number"
            name="productPrice"
            placeholder="Product Price"
            value={formData.productPrice}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>
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
            <th className="py-2 px-4 border-b text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-left">{product.id}</td>
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
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Delete
                </button>
                <button className="bg-green-500 text-white px-2 py-1 rounded">
                  Edit
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
