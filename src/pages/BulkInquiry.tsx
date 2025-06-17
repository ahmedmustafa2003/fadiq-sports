import React, { useState } from 'react';
import { Upload, FileText, Package, Users } from 'lucide-react';

const BulkInquiry = () => {
  const [formData, setFormData] = useState({
    organizationType: '',
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    quantity: '',
    customization: '',
    budget: '',
    timeline: '',
    description: '',
    logoFile: null
  });

  const organizationTypes = [
    'Sports Club/Team',
    'Academy/School',
    'University',
    'Professional Team',
    'Sports Facility',
    'Event Organizer',
    'Government/Municipal',
    'Other'
  ];

  const productCategories = [
    'Sports Balls (Football, Basketball, etc.)',
    'Team Uniforms & Jerseys',
    'Training Equipment',
    'Protective Gear & Gloves',
    'Accessories & Merchandise',
    'Complete Team Package',
    'Custom Products'
  ];

  const budgetRanges = [
    'Under €1,000',
    '€1,000 - €5,000',
    '€5,000 - €10,000',
    '€10,000 - €25,000',
    '€25,000 - €50,000',
    'Over €50,000'
  ];

  const timelines = [
    'ASAP (Rush Order)',
    'Within 2 weeks',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    'Flexible timing'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        logoFile: e.target.files[0] as any
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Bulk inquiry submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours with a detailed quote.');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-6">Bulk Order Inquiry</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a custom quote for your team, club, or organization. We specialize in bulk orders 
            with competitive pricing and full customization options.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <Package className="w-12 h-12 text-black mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Bulk Pricing</h3>
            <p className="text-gray-600 text-sm">Special rates for large quantity orders</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <FileText className="w-12 h-12 text-black mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Full Customization</h3>
            <p className="text-gray-600 text-sm">Your logo, colors, and design specifications</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <Users className="w-12 h-12 text-black mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Dedicated Support</h3>
            <p className="text-gray-600 text-sm">Personal account manager for your project</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Organization Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Organization Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Type *
                  </label>
                  <select
                    name="organizationType"
                    required
                    value={formData.organizationType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select organization type</option>
                    {organizationTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    required
                    value={formData.organizationName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter organization name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter contact name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter country"
                  />
                </div>
              </div>
            </div>

            {/* Product Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Category *
                  </label>
                  <select
                    name="productCategory"
                    required
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select product category</option>
                    {productCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Quantity *
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="e.g., 50 jerseys, 100 balls"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline *
                  </label>
                  <select
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customization Requirements
                </label>
                <textarea
                  name="customization"
                  value={formData.customization}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Describe your customization needs (colors, logos, text, etc.)"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Logo/Design Files
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-sm text-gray-600 mb-2">
                    Drag and drop your files here, or{' '}
                    <label className="text-black font-medium cursor-pointer hover:underline">
                      browse
                      <input
                        type="file"
                        className="hidden"
                        accept=".jpg,.jpeg,.png,.pdf,.ai,.eps"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    Supported formats: JPG, PNG, PDF, AI, EPS (Max 10MB)
                  </p>
                  {formData.logoFile && (
                    <p className="mt-2 text-sm text-green-600">
                      File uploaded: {(formData.logoFile as any).name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Any additional information about your requirements, special requests, or questions..."
                />
              </div>
            </div>

            {/* Submit */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-black text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Submit Bulk Inquiry
                </button>
                <button
                  type="button"
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Save as Draft
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                We'll respond to your inquiry within 24 hours with a detailed quote and timeline.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BulkInquiry;