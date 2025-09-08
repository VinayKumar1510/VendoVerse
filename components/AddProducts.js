'use client';

import { useState } from "react";
import { AddProductButton } from "@/components/Buttons";
import toast from "react-hot-toast";
import { CheckCircle, XCircle } from "lucide-react";

export default function AddProducts() {
  const [formData, setFormData] = useState({ name: "", price: "", category: "" });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle text input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Toast helpers
  const showSuccessToast = (message) =>
    toast.custom((t) => (
      <div className={`bg-green-600 text-white px-6 py-4 rounded-lg shadow-md flex items-center space-x-3 transition-all ${t.visible ? "opacity-100" : "opacity-0"}`}>
        <CheckCircle className="w-6 h-6 text-white" /> <span>{message}</span>
      </div>
    ));

  const showErrorToast = (message) =>
    toast.custom((t) => (
      <div className={`bg-red-600 text-white px-6 py-4 rounded-lg shadow-md flex items-center space-x-3 transition-all ${t.visible ? "opacity-100" : "opacity-0"}`}>
        <XCircle className="w-6 h-6 text-white" /> <span>{message}</span>
      </div>
    ));

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!image) throw new Error("Please upload a product image");

      const data = new FormData();
      data.append("name", formData.name);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("image", image);

      const res = await fetch("/api/products", { method: "POST", body: data });
      const result = await res.json();

      if (res.ok && result.success) {
        showSuccessToast("✅ Product added successfully!");
        setFormData({ name: "", price: "", category: "" });
        setImage(null);
      } else {
        showErrorToast(`❌ Failed to add product: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      showErrorToast(error.message || "❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 pt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Add Product</h2>

        {/* Product Name */}
        <label className="block mb-2 text-gray-700 font-medium">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg w-full p-3 mb-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition duration-200"
          placeholder="Enter product name"
          required
        />

        {/* Price */}
        <label className="block mb-2 text-gray-700 font-medium">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg w-full p-3 mb-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition duration-200"
          placeholder="Enter product price"
          required
        />

        {/* Category */}
        <label className="block mb-2 text-gray-700 font-medium">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg w-full p-3 mb-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition duration-200"
          placeholder="Enter product category"
          required
        />

        {/* Image Upload */}
        <label className="block mb-2 text-gray-700 font-medium">Product Image</label>
        <div
          className="relative w-full h-48 border-2 border-dashed rounded-xl flex items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition duration-200"
        >
          <span className="text-gray-500 text-center">
            {image ? image.name : "Click to upload image"}
          </span>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            required
          />
        </div>

        {/* Submit Button */}
        <AddProductButton type="submit" disabled={loading} className="mt-6" />
      </form>
    </div>
  );
}
