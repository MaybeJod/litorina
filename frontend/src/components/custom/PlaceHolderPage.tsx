import { useNavigate } from "react-router-dom";
import constructionImg from "@/assets/construction.jpg"; // Adjust the path as necessary
import { Button } from "../ui/button";

const PlaceHolderPage = () => {
  const navigate = useNavigate();

  // Function to handle the "Go Back" button click
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col h-[100vh) relative mb-8">
      <Button onClick={handleGoBack} className="absolute top-8 left-12 px-10 py-6 text-2xl cursor-pointer rounded-full bg-[var(--button-primary)]">
        ← Go Back
      </Button>
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <img
          src={constructionImg}
          alt="Under Construction"
          className="w-[300px] max-w-full h-auto mb-5"
        />
        <h1 className="text-[28px] text-[#333333] mb-2.5">
          This page is under construction
        </h1>
        <p className="text-lg text-gray-500 max-w-[600px] leading-relaxed">
          We're working hard to bring you new features. Please check back soon!
        </p>
      </div>
    </div>
  );
};

export default PlaceHolderPage;
