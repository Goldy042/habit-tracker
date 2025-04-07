import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">HabitTracker</h2>
            <p className="mt-2 text-sm">
              Track your habits, build routines, and stay productive every day!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/"
                   className="hover:text-white transition">Home
                </Link>
              </li>
              <li>
                <Link href="/about"
                className="hover:text-white transition"> About
                </Link>
              </li>
              <li>
                <Link href="/features"
                className="hover:text-white transition">Features
                </Link>
              </li>
              <li>
                <Link href="/contact"
                 className="hover:text-white transition">Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-blue-500 transition text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-blue-400 transition text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500 transition text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-300 transition text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} HabitTracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
