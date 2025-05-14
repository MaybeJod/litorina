import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchNavigationItems from "@/api/fetchNavigationItems";
import type { NavigationItem } from "@/interfaces/NavitemsInterface";
import Logo from "@/components/custom/Logo";

const Footer = () => {
  const [navItems, setNavItems] = useState<NavigationItem[]>([]);

  useEffect(() => {
    const fetchNavItems = async () => {
      const data = await fetchNavigationItems();
      setNavItems(data);
    };
    fetchNavItems();
  }, []);
  return (
    <footer className="w-full bg-[#5FA9A3] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed">
            Join Litorina folkhögskola and transform your skills into a promising future.
            Your journey to success begins here. Enroll today!
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-1 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={item.url} className="hover:text-gray-300">{item.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/about" className="hover:text-gray-300">About Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contacts</h3>
          <ul className="text-sm space-y-1">
            <li>📞 0455-36 76 00</li>
            <li>📍 Backsippevägen 4<br />371 54 Karlskrona</li>
            <li>✉️ info@litorina.fhsk.se</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Follow Us On</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-300">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t border-white my-6" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">
        <p>Copyright © 2025 Litorina folkhögskola. All Rights Reserved</p>
        <div className="flex space-x-4">
          <Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-gray-300">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
