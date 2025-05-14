import { useEffect, useState } from "react";

const fallbackLogoUrl =
  "https://litorina.fhsk.se/wp-content/uploads/2020/06/litorina_logo.png";

const Logo = () => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const url = "https://litorina.onrender.com/api/logo?populate=*";

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        const logoImgUrl = jsonData?.data?.media?.[0]?.formats?.small?.url;
        const finalLogoUrl = logoImgUrl
          ? `https://litorina.onrender.com${logoImgUrl}`
          : fallbackLogoUrl;

        setLogoUrl(finalLogoUrl);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    fetchLogo();
  }, []);

  if (!logoUrl) return <p>Loading logo...</p>;

  return (
    <img
      src={logoUrl}
      alt="Litorina Logo"
      className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto"
      onError={(e) => (e.currentTarget.src = fallbackLogoUrl)}
    />
  );
};

export default Logo;
