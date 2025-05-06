import { useEffect, useState } from "react";

function Logo() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const url = "http://localhost:1337/api/site-settings?populate=logo";

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const logoData = json?.data?.[0]?.logo;
        if (logoData?.url) {
          setLogoUrl(`http://localhost:1337${logoData.url}`);
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
}

export default Logo;
