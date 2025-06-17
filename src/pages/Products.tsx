import { useState } from 'react';
import { Search, Star, ArrowRight, Zap, Award, Shield } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏆' },
    { id: 'balls', name: 'Sports Balls', icon: '⚽' },
    { id: 'uniforms', name: 'Team Uniforms', icon: '👕' },
    { id: 'gloves', name: 'Gloves & Gear', icon: '🧤' },
    { id: 'equipment', name: 'Training Equipment', icon: '🏋️' },
    { id: 'accessories', name: 'Accessories', icon: '🎯' }
  ];

  const products = [
    {
      id: 1,
      name: 'Professional Football',
      category: 'balls',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'FIFA approved professional football for matches and training',
      features: ['FIFA Approved', 'Hand-stitched', 'Waterproof', 'Size 5'],
      customizable: true,
      bulkAvailable: true,
      rating: 5,
      delay: '0.1s'
    },
    {
      id: 2,
      name: 'Custom Team Jersey',
      category: 'uniforms',
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Fully customizable team jerseys with your logo and colors',
      features: ['Moisture-wicking', 'Custom design', 'Durable fabric', 'All sizes'],
      customizable: true,
      bulkAvailable: true,
      rating: 5,
      delay: '0.2s'
    },
    {
      id: 3,
      name: 'Goalkeeper Gloves',
      category: 'gloves',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Professional goalkeeper gloves with superior grip',
      features: ['Latex palm', 'Finger protection', 'Breathable', 'Multiple sizes'],
      customizable: false,
      bulkAvailable: true,
      rating: 4,
      delay: '0.3s'
    },
    {
      id: 4,
      name: 'Training Cones Set',
      category: 'equipment',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Durable training cones for agility and skill development',
      features: ['Weather resistant', 'Bright colors', 'Stackable', '50-piece set'],
      customizable: false,
      bulkAvailable: true,
      rating: 5,
      delay: '0.4s'
    },
    {
      id: 5,
      name: 'Basketball',
      category: 'balls',
      image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Official size basketball for indoor and outdoor play',
      features: ['Official size', 'Composite leather', 'Deep channels', 'Size 7'],
      customizable: true,
      bulkAvailable: true,
      rating: 5,
      delay: '0.5s'
    },
    {
      id: 6,
      name: 'Team Shorts',
      category: 'uniforms',
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Comfortable team shorts with custom design options',
      features: ['Quick-dry fabric', 'Elastic waistband', 'Custom colors', 'All sizes'],
      customizable: true,
      bulkAvailable: true,
      rating: 4,
      delay: '0.6s'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50 page-container page-bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-gliker-bold text-4xl sm:text-5xl font-bold text-black mb-6 text-gradient">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional sports equipment and apparel for teams, clubs, and distributors worldwide
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between animate-slide-in-left">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 animate-bounce-in ${
                  selectedCategory === category.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="card-enhanced bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: product.delay }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {product.customizable && (
                    <span className="badge bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                      <Zap size={12} />
                      <span>Customizable</span>
                    </span>
                  )}
                  {product.bulkAvailable && (
                    <span className="badge bg-green-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                      <Award size={12} />
                      <span>Bulk Available</span>
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-gliker text-xl font-bold text-black">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center space-x-1">
                    <Shield size={16} />
                    <span>Features:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="badge bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="btn-primary flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                    Request Quote
                  </button>
                  <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 btn-secondary border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 animate-gradient text-white rounded-2xl p-8 text-center animate-fade-in-up">
          <h2 className="font-gliker-bold text-3xl font-bold mb-4">Need Custom Products?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We specialize in custom manufacturing for teams, clubs, and distributors. 
            Get a personalized quote for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Request Custom Quote
            </button>
            <button className="btn-secondary border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Download Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;