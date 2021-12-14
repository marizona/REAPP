import React from "react";
import {Link} from "react-router-dom"

function AddProduct() {
  return (
    <div>
      <Link
        to=""
        class=" text-white py-3 px-3 btn btn-green cursor-pointer text-extrabold rounded transition duration-300 type=button "
      >
       +  Add a product
      </Link>

    </div>
  );
}

export default AddProduct;
