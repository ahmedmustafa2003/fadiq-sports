import React from 'react';
import { Link } from 'react-router-dom';
import { Package, FileText, MessageSquare, Settings, Download, Plus, Eye } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, isAdmin } = useAuth();

  const recentOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      items: 'Custom Jerseys x50',
      status: 'In Production',
      total: '€2,450'
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      items: 'Footballs x100',
      status: 'Shipped',
      total: '€1,200'
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      items: 'Training Equipment Set',
      status: 'Delivered',
      total: '€850'
    }
  ];

  const quickActions = [
    {
      title: 'Request Quote',
      description: 'Get pricing for custom products',
      icon: FileText,
      link: '/bulk-inquiry',
      color: 'bg-blue-500'
    },
    {
      title: 'Browse Products',
      description: 'View our complete catalog',
      icon: Package,
      link: '/products',
      color: 'bg-green-500'
    },
    {
      title: 'Contact Support',
      description: 'Get help with your orders',
      icon: MessageSquare,
      link: '/contact',
      color: 'bg-purple-500'
    },
    {
      title: 'Download Catalog',
      description: 'PDF catalog for offline viewing',
      icon: Download,
      link: '#',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            {user?.company} • {user?.country}
          </p>
        </div>

        {/* Admin Panel Link */}
        {isAdmin && (
          <div className="mb-8 bg-black text-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Admin Access</h3>
                <p className="text-gray-300 text-sm">Manage products, orders, and users</p>
              </div>
              <Link
                to="/admin"
                className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Admin Panel
              </Link>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <action.icon className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
              <p className="text-gray-600 text-sm">{action.description}</p>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
                <Link
                  to="#"
                  className="text-black hover:underline font-medium flex items-center space-x-1"
                >
                  <span>View All</span>
                  <Eye size={16} />
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">{order.id}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{order.items}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{order.date}</span>
                      <span className="font-semibold text-gray-900">{order.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Account Info & Quick Links */}
          <div className="space-y-6">
            {/* Account Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Account Information</h2>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-900">{user?.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Company</label>
                  <p className="text-gray-900">{user?.company}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Country</label>
                  <p className="text-gray-900">{user?.country}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Account Type</label>
                  <p className="text-gray-900 capitalize">{user?.role}</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                <Settings size={16} />
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <div className="space-y-3">
                <Link
                  to="/bulk-inquiry"
                  className="block text-gray-700 hover:text-black transition-colors"
                >
                  • Bulk Order Form
                </Link>
                <Link
                  to="/distributor-application"
                  className="block text-gray-700 hover:text-black transition-colors"
                >
                  • Distributor Application
                </Link>
                <Link
                  to="/faq"
                  className="block text-gray-700 hover:text-black transition-colors"
                >
                  • FAQ & Support
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-black transition-colors"
                >
                  • Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;