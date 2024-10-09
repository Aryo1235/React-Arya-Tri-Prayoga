const ProductForm = () => {
  return (
    <div className="col-md-6 p-4 ">
      <p className="h4 fw-bold">Detail Product</p>
      <form className="needs-validation" noValidate="">
        {/* Row untuk input pertama dengan lebar col-6 */}
        <div className="row mb-3">
          <div className="col-md-5">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              id="productName"
              className="form-control"
              type="text"
              placeholder="Enter product name"
              required=""
            />
            <div className="invalid-feedback">
              Please enter the product name.
            </div>
          </div>
        </div>
        {/* Row untuk input kedua dengan lebar col-8 */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select id="productCategory" className="form-select" required="">
              <option selected="" disabled="" value="">
                Choose category
              </option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
            <div className="invalid-feedback">
              Please select a product category.
            </div>
          </div>
        </div>
        {/* Row untuk input file dengan lebar col-6 */}
        <div className="row mb-3">
          <div className="col-md-5">
            <label htmlFor="formFile" className="form-label">
              Image Of Product
            </label>
            <input
              className="form-control text-bg-primary"
              type="file"
              id="formFile"
              required=""
            />
            <div className="invalid-feedback">
              Please upload a product image.
            </div>
          </div>
        </div>
        {/* Row untuk radio button */}
        <div className="row mb-3">
          <div className="col-md-5">
            <label htmlFor="form-check" className="form-label">
              Product Freshness
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                required=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Brand new
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                required=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                required=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Refurbished
              </label>
            </div>
            <div className="invalid-feedback">
              Please select the product freshness.
            </div>
          </div>
        </div>
        {/* Row untuk textarea dengan lebar col-12 */}
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              required=""
              defaultValue={""}
            />
            <div className="invalid-feedback">
              Please provide a product description.
            </div>
          </div>
        </div>
        {/* Row untuk input price dengan lebar col-4 */}
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              id="price"
              type="text"
              className="form-control"
              placeholder="Enter price"
              required=""
            />
            <div className="invalid-feedback">
              Please enter a price for the product.
            </div>
          </div>
        </div>
        {/* Tombol Submit */}
        <div className="d-grid col-11 mx-auto">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;