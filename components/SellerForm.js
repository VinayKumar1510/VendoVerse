'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SellerForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    businessName: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value.trim() !== '') {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key] = 'This field is required';
      }
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent double submit

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/sellers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (res.status === 201) {
        // Success toast
        toast.custom((t) => (
          <div
            className={`bg-green-600 text-white px-6 py-4 rounded-lg shadow-md flex items-center space-x-3 transition-all ${
              t.visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <CheckCircle className="w-6 h-6 text-black" />
            <span>Application submitted successfully!</span>
          </div>
        ));

        setForm({
          name: '',
          email: '',
          countryCode: '',
          phone: '',
          businessName: '',
          description: '',
        });

        setTimeout(() => {
          router.push('/add-product');
        }, 1500);
      } else if (res.status === 409) {
        // Conflict (seller exists) toast and redirect
        toast.custom((t) => (
          <div
            className={`bg-yellow-600 text-white px-6 py-4 rounded-lg shadow-md flex items-center space-x-3 transition-all ${
              t.visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m0-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"
              />
            </svg>
            <span>Seller already exists! Redirecting to Add Product page...</span>
          </div>
        ));

        setTimeout(() => {
          router.push('/add-product');
        }, 1500);
      } else {
        toast.error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Failed to submit. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Become a Seller on VendorVerse
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Join our platform to reach a wider audience and grow your business.
          Fill out the form below to get started.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 ${
                errors.name ? 'focus:ring-red-500' : 'focus:ring-blue-500'
              }`}
              placeholder="John Doe"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'
              }`}
              placeholder="john@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <div className="flex gap-2">
              <input
                id="countryCode"
                type="text"
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                placeholder="+91"
                className={`w-1/3 px-4 py-3 border ${
                  errors.countryCode ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 ${
                  errors.countryCode ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
                aria-invalid={!!errors.countryCode}
                aria-describedby={
                  errors.countryCode ? 'countryCode-error' : undefined
                }
              />
              <input
                id="phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className={`w-2/3 px-4 py-3 border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 ${
                  errors.phone ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
            </div>
            {(errors.countryCode || errors.phone) && (
              <p className="text-red-500 text-sm mt-1">
                {errors.countryCode || errors.phone}
              </p>
            )}
          </div>

          {/* Business Name */}
          <div>
            <label htmlFor="businessName" className="block font-medium mb-1">
              Business Name
            </label>
            <input
              id="businessName"
              type="text"
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.businessName ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 ${
                errors.businessName ? 'focus:ring-red-500' : 'focus:ring-blue-500'
              }`}
              placeholder="My Awesome Store"
              aria-invalid={!!errors.businessName}
              aria-describedby={
                errors.businessName ? 'businessName-error' : undefined
              }
            />
            {errors.businessName && (
              <p id="businessName-error" className="text-red-500 text-sm mt-1">
                {errors.businessName}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block font-medium mb-1">
              Business Description
            </label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-3 border ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 ${
                errors.description ? 'focus:ring-red-500' : 'focus:ring-blue-500'
              } resize-none`}
              placeholder="Tell us a bit about your business..."
              aria-invalid={!!errors.description}
              aria-describedby={
                errors.description ? 'description-error' : undefined
              }
            />
            {errors.description && (
              <p id="description-error" className="text-red-500 text-sm mt-1">
                {errors.description}
              </p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold px-6 py-3 rounded-lg shadow transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-busy={loading}
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
