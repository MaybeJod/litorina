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
    <div className="flex justify-center items-center py-4">
      <img src={logoUrl} alt="Site Logo" className="w-48 h-auto" />
    </div>
  );
};

export default Logo;
