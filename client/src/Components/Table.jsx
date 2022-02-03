import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

function Table({ history, match }) {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/signin");
    }

    if (successCreate) {
      history.push(`/dashboard/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts(""));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
  ]);

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <div className="mx-auto lg:mt-12 md:mt-34 sm:mt-44 text-center">
      {loadingDelete && <Loader />}
      {errorDelete && toast(errorDelete)}
      {loadingCreate && <Loader />}
      {errorCreate && toast(errorCreate)}
      {loading ? (
        <Loader />
      ) : error ? (
        toast(error)
      ) : (
        <>
          <button
            className="block text-white btn btn-green  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            data-modal-toggle="authentication-modal"
          >
            + Add a product
          </button>
          {/* toogle */}
          <div
            id="authentication-modal"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
          >
            <div className="relative px-4 w-full max-w-xl h-full lg:h-auto">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-end px-2">
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="authentication-modal"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <form
                  className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                  action="#"
                >
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Add a new Product
                  </h3>
                  <div className="flex space-x-10">
                    <div>
                      <div>
                        <label
                          for="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="eg. house on Riverside Avenue"
                          required
                        />
                      </div>
                      <div>
                        <label
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="user_avatar"
                        >
                          Upload images
                        </label>
                        <input
                          class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          multiple
                          aria-describedby="user_avatar_help"
                          id="user_avatar"
                          type="file"
                        />
                      </div>
                      <div>
                        <label
                          for="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Owner
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Name"
                          required
                        />
                      </div>

                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Select a Category
                      </label>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option>House</option>
                        <option>Villa</option>
                        <option>Flat</option>
                        <option>TownHouse</option>
                      </select>

                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Description
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a description ..."
                      ></textarea>
                    </div>
                    <div>
                      <div>
                        <label
                          for="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="City"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Surface
                        </label>
                        <input
                          type="number"
                          name="title"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="ft²"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Bathrooms
                        </label>
                        <input
                          type="number"
                          name="title"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="ft²"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Bedrooms
                        </label>
                        <input
                          type="number"
                          name="title"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="ft²"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          name="title"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="ft²"
                          required
                        />
                      </div>
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Status
                      </label>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option>Available</option>
                        <option>Sold</option>
                      </select>
                      <button
                        type="submit"
                        onClick={createProductHandler}
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* end toogle */}
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          location
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          price
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-600"
                          key={product._id}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {product.location}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {product.category}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {product.price}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button
                              onClick={() => {
                                setModalOpen(true);
                              }}
                              className="text-red-600 hover:text-red-900 dark:text-blue-500 dark:hover:underline"
                            >
                              Delete
                            </button>
                            {modalOpen && (
                              <div setOpenModal={setModalOpen}>
                                <div
                                  onClick={() => {
                                    setModalOpen(false);
                                  }}
                                  class="bg-slate-800 bg-opacity-10  rounded-lg shadow bg-gray-700 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0"
                                >
                                  <div class="bg-white px-16 py-14 shadow border-2 rounded-md text-center">
                                    <div className="titleCloseBtn"></div>
                                    <h1 class="text-xl font-bold text-slate-500">
                                      Do you Want Delete this product ?
                                    </h1>
                                    <p className="py-4">
                                      This action cannot be undone
                                    </p>
                                    <button class="bg-red-500 px-4 py-2 rounded-md text-md text-white">
                                      Cancel
                                    </button>
                                    <button
                                      onClick={() => deleteHandler(product._id)}
                                      class=" btn btn-green px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                                    >
                                      Ok
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                            <Link
                              to={`/dashboard/product/${product._id}/edit`}
                              className="text-blue-600 px-2 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                            >
                              Edit
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Table;
