import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#ededeb]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Woostify
            </h3>
            <p className="text-gray-600 text-md leading-8 tracking-wide">
              You can easily edit this paragraph to talk about your brand as
              well as your products to your potential customers.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Refund and Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account Section */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">
              My Account
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/account"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  My account
                </Link>
              </li>
              <li>
                <Link
                  to="/orders"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/lost-password"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Lost password
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-12 py-4">
          <p className="text-center text-sm text-gray-500">
            Copyright © 2025 Made by Tilav_web
          </p>
        </div>
      </div>
    </footer>
  );
}
