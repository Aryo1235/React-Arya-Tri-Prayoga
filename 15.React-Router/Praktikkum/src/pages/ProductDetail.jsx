import { useLocation } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product Detail</h1>
      <div className="border rounded-lg p-4 bg-gray-100">
        <p>
          <strong>ID:</strong> {product.id}
        </p>
        <p>
          <strong>Name:</strong> {product.productName}
        </p>
        <p>
          <strong>Category:</strong> {product.productCategory}
        </p>
        <p>
          <strong>Freshness:</strong> {product.productFreshness}
        </p>
        <p>
          <strong>Price:</strong> ${product.productPrice}
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
