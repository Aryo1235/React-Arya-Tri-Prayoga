import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteData,
  fetchDatas,
  postData,
  updateData,
} from "./utils/fetchData";

function CreateProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
    productImage: "", // Ubah menjadi string untuk menyimpan nama file
  });

  useEffect(() => {
    fetchDatas(setProducts, setLoading);
  }, []);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const inputFiles = e.target.files;

    setFormData((prevData) => {
      const updatedData = { ...prevData };
      if (inputFiles && inputFiles.length > 0) {
        // Menyimpan nama file, bukan objek file penuh
        updatedData[inputName] = inputFiles[0].name;
      } else {
        updatedData[inputName] = inputValue;
      }
      return updatedData;
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

    const nameRegex = /^[a-zA-Z\s]+$/;
    const categoryRegex = /^[a-zA-Z\s]+$/;
    const freshnessRegex = /^[a-zA-Z\s]+$/;
    const priceRegex = /^[0-9]+(\.[0-9]{1,2})?$/;

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

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }

    if (editingProductId) {
      // Update existing product
      updateData(editingProductId, formData, setProducts, setLoading);
    } else {
      // Create new product
      postData(formData, setProducts, setLoading);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      productName: "",
      productCategory: "",
      productFreshness: "",
      productPrice: "",
      productImage: "",
    });
    setEditingProductId(null); // Reset editing state
  };

  const handleEdit = (product) => {
    setFormData({
      productName: product.productname,
      productCategory: product.productcategory,
      productFreshness: product.productfresh,
      productPrice: product.productprice,
      productImage: product.productfile,
    });
    setEditingProductId(product.id); // Set the current editing product ID
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Apakah kalian ingin menghapus?");
    if (confirmDelete) {
      deleteData(id, setProducts, setLoading);
    }
  };

  const handleProductDetail = (id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      navigate(`/${id}`, { state: { product } });
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
          type="file"
          name="productImage"
          onChange={handleChange}
          accept="image/*"
          className="border rounded w-full p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingProductId ? "Update Product" : "Add Product"}
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
            <th className="py-2 px-4 border-b text-left">Product Image</th>
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
                {product.productname}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {product.productcategory}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {product.productfresh}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {product.productprice}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {product.productfile}
              </td>
              <td className="py-2 px-4 border-b text-left">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
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
