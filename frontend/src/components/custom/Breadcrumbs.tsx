import { Link, useLocation } from "react-router-dom";

const formatTitle = (slug: string) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="bg-white py-4">
      <div className="max-w-4xl mx-auto text-center">
        <nav className="inline-flex items-center space-x-2 text-sm">
          <Link to="/" className="text-gray-900 font-semibold hover:underline">
            Home
          </Link>
          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            const to = "/" + pathnames.slice(0, index + 1).join("/");

            return (
              <span key={to} className="inline-flex items-center space-x-2">
                <span className="text-gray-400">›</span>
                {isLast ? (
                  <span className="text-gray-500">{formatTitle(value)}</span>
                ) : (
                  <Link to={to} className="text-gray-900 hover:underline">
                    {formatTitle(value)}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
