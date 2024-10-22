import { useNavigate } from "react-router-dom";
import useProductStore from "./productStore";

function CreateProduct() {
  const navigate = useNavigate();

  // Mengambil state dan actions dari Zustand store
  const {
    products,
    counter,
    formData,
    editMode,
    editId,
    setFormData,
    setEditMode,
    setEditId,
    addProduct,
    updateProduct,
    deleteProduct,
    resetForm,
  } = useProductStore();

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const inputFiles = e.target.files;
    console.log(inputName);
    console.log(inputValue);
    console.log(inputFiles);
    setFormData({
      ...formData,
      [inputName]:
        inputFiles && inputFiles.length > 0 ? inputFiles[0] : inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editMode) {
      const newProduct = {
        id: counter,
        ...formData,
      };
      addProduct(newProduct);
    } else {
      const updatedProduct = {
        id: editId,
        ...formData,
      };
      updateProduct(updatedProduct);
    }

    resetForm();
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Apakah kalian ingin menghapus?");
    if (confirmDelete) {
      deleteProduct(id);
    }
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    if (productToEdit) {
      setFormData(productToEdit);
      setEditMode(true);
      setEditId(id);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        {editMode ? "Edit Product" : "Create Product"}
      </h1>
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
          {editMode ? "Update Product" : "Add Product"}
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
                  onClick={() => navigate(`/createproduct/${product.id}`)}
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
                {product.productImage && product.productImage.name}
              </td>
              <td className="py-2 px-4 border-b text-left">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(product.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
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
