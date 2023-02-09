import { useState, useEffect } from "react";
import { GoTriangleUp } from "react-icons/go";


export const BtnUp = () => {
  const [backToUp, setBackToUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToUp(true);
      } else {
        setBackToUp(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToUp && (
        <button
          className="w-[80px] h-[65px] bg-black-gradient rounded-[100%] fixed bottom-[50px] right-[50px] z-[9999] border-secondary transition-all border-2 sm:block hidden"
          onClick={scrollUp}
        >
          <GoTriangleUp className="fill-secondary  w-[40px] h-[35px] absolute top-[12px] left-[18px]" />
        </button>
      )}
    </>
  );
};
