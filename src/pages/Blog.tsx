import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import BlogPost1 from "../assets/images/Blog_1.jpeg";
import BlogPost2 from "../assets/images/Blog_2.jpeg";
import BlogPost3 from "../assets/images/Blog_3.jpeg";
import BlogPost4 from "../assets/images/Blog_4.jpg";
import BlogAuthor from "../assets/images/Blog_auth.jpeg";

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Evolution of Sports Equipment: What's New in 2023",
      excerpt:
        "Discover the latest innovations in sports gear technology and how they're changing the game for athletes worldwide.",
      image: BlogPost1,
      category: "Innovation",
      date: "May 15, 2023",
      readTime: "8 min read",
      author: "Alex Johnson",
    },
    {
      id: 2,
      title: "Custom Team Uniforms: Building Identity on the Field",
      excerpt:
        "How professional teams use custom uniforms to enhance performance, team spirit, and brand recognition.",
      image: BlogPost2,
      category: "Team Gear",
      date: "April 28, 2023",
      readTime: "6 min read",
      author: "Maria Rodriguez",
    },
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Choosing the Right Protective Gear for Contact Sports",
      excerpt:
        "A comprehensive guide to selecting the best protective equipment for football, hockey, and other contact sports.",
      image: BlogPost3,
      category: "Safety",
      date: "April 10, 2023",
      readTime: "10 min read",
      author: "James Wilson",
    },
    {
      id: 4,
      title: "Sustainable Materials in Sports Equipment Manufacturing",
      excerpt:
        "How FIDAQ Sports is leading the way in eco-friendly production without compromising quality.",
      image: BlogPost4,
      category: "Sustainability",
      date: "March 22, 2023",
      readTime: "7 min read",
      author: "Sarah Chen",
    },
  ];

  const popularCategories = [
    { name: "Equipment Guides", count: 24 },
    { name: "Team Management", count: 18 },
    { name: "Training Techniques", count: 15 },
    { name: "Product Updates", count: 12 },
    { name: "Industry Trends", count: 9 },
  ];

  const tags = [
    "Football",
    "Basketball",
    "Training",
    "Performance",
    "Design",
    "Materials",
    "Customization",
    "Youth Sports",
    "Professional",
    "Innovation",
  ];

  return (
    <div className="pt-20 page-container">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden hero-bg-pattern">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 transform rotate-45 animate-float"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-white/20 transform rotate-45 animate-float-delayed"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="font-gliker-bold text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-shadow">
              FIDAQ SPORTS BLOG
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300 mt-4">
                Insights, Trends & Expert Advice
              </span>
            </h1>

            <p
              className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in-left"
              style={{ animationDelay: "0.3s" }}
            >
              Discover the latest in sports equipment innovation, team
              management strategies, and industry trends from FIDAQ Sports
              professionals.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-right"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                to="/blog/categories"
                className="btn-primary bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
              >
                <span>Browse Categories</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/newsletter"
                className="btn-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold text-black mb-6 text-gradient">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked content from our sports equipment experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className="card-enhanced bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-gliker-bold text-2xl font-bold text-black mb-4 hover:text-gray-700 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={BlogAuthor}
                        alt={post.author}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-black font-semibold hover:underline flex items-center space-x-1 transition-all duration-300"
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts & Sidebar */}
      <section className="py-20 bg-gray-50 page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="font-gliker-bold text-3xl font-bold text-black mb-8">
                Recent Articles
              </h2>

              <div className="space-y-12">
                {recentPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="card-enhanced bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-in-left"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="mr-4">{post.date}</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-gliker-bold text-xl font-bold text-black mb-3 hover:text-gray-700 transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm">
                            <User className="w-4 h-4 mr-1 text-gray-500" />
                            <span className="text-gray-600">{post.author}</span>
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="text-black font-semibold hover:underline flex items-center space-x-1 transition-all duration-300 text-sm"
                          >
                            <span>Continue Reading</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12 animate-fade-in-up">
                <nav className="flex items-center space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8 animate-slide-in-right">
              {/* About Widget */}
              <div className="card-enhanced bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-gliker-bold text-xl font-bold text-black mb-4">
                  About FIDAQ Sports Blog
                </h3>
                <p className="text-gray-600 mb-4">
                  Our blog provides expert insights into sports equipment, team
                  management, and industry trends from FIDAQ Sports
                  professionals with decades of experience.
                </p>
                <Link
                  to="/about"
                  className="text-black font-semibold hover:underline flex items-center space-x-1 transition-all duration-300"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Categories Widget */}
              <div className="card-enhanced bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-gliker-bold text-xl font-bold text-black mb-4">
                  Popular Categories
                </h3>
                <ul className="space-y-3">
                  {popularCategories.map((category, index) => (
                    <li
                      key={category.name}
                      className="animate-bounce-in"
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <Link
                        to={`/blog/categories/${category.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex justify-between items-center text-gray-700 hover:text-black transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Widget */}
              <div className="card-enhanced bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-gliker-bold text-xl font-bold text-black mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Link
                      key={tag}
                      to={`/blog/tags/${tag.toLowerCase()}`}
                      className="animate-bounce-in inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-black px-3 py-1 rounded-full text-sm transition-colors"
                      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Widget */}
              <div className="card-enhanced bg-black text-white p-6 rounded-xl shadow-lg animate-pulse-glow">
                <h3 className="font-gliker-bold text-xl font-bold mb-4">
                  Subscribe to Newsletter
                </h3>
                <p className="text-gray-300 mb-4">
                  Get the latest articles and product updates directly to your
                  inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-black px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 animate-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold mb-6">
              Want to Contribute to Our Blog?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Are you a sports professional, coach, or industry expert? We're
              always looking for valuable content from experienced contributors.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/blog/contribute"
                className="btn-primary bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Become a Contributor
              </Link>
              <Link
                to="/contact"
                className="btn-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300"
              >
                Contact Our Editors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
