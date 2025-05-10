import { useEffect, useState } from "react";

const Logo = () => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const url = "https://litorina.onrender.com/api/logo?populate=*";

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const logoImgUrl = data?.data?.media?.[0]?.formats.small.url;
        if (logoImgUrl) {
          setLogoUrl(`https://litorina.onrender.com${logoImgUrl}`);
        }
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    fetchLogo();
  }, []);

  if (!logoUrl) return <p>Loading logo...</p>;

  return (
    <div>
      <img
        src={logoUrl}
        alt="Litorina Logo"
        className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto"
      />
    </div>
  );
};

export default Logo;
