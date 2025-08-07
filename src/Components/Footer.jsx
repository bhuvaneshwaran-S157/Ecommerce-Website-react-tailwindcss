import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-10">
        {/* Brand Info */}
        <div className="md:max-w-sm">
          <img src={assets.logo} alt="QuickCart Logo" className="h-8 mb-4" />
          <p>
            QuickCart is your one-stop destination for the latest electronics and gadgets.
            From smart devices to daily essentials, we deliver quality products at unbeatable
            prices—right to your doorstep.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Get in touch</h3>
          <p className="mb-2">+1-234-567-890</p>
          <p>support@quickcart.com</p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-gray-200 text-center py-4 text-xs text-gray-500">
        Copyright 2025 © QuickCart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
