import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
function Work() {
  
  const [images, setImages] = useState(
    [
      {
        url: "data:image/jpeg;base64,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",
        top: "50%",
        left: "50%",
        isActive: false,
      },
      {
        url: "data:image/jpeg;base64,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",
        top: "56%",
        left: "44%",
        isActive: false,
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVhjmtEhKqjFM9egdoFJH-KGSfowG_5qu_g&s",
        top: "45%",
        left: "57%",
        isActive: false,
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-i9MjGsgxSaVM643UrRr0cjOKXDsfElhWA&s",
        top: "43%",
        left: "39%",
        isActive: false,
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4i-TlYgGskhbT6zXqQSoMYqaP-sk4cxiIbA&s",
        top: "60%",
        left: "52%",
        isActive: false,
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbqTaZADL6Z1WF72i-T_sYECG8zoiD-jcsQ&s",
        top: "78%",
        left: "47%",
        isActive: false,
      },
    ]
  )
              //   react libraries :- framer-motion  / / 
  const { scrollYProgress } = useScroll();
    scrollYProgress.on('change', (data) => {
        function imagesShow(arr) {
          setImages((pre) => (
            pre.map((item, index) => (
               arr.indexOf(index) === -1 ? 
                {...item, isActive: false}
                : {...item, isActive: true}
            ))
          ))
        }
        switch (Math.floor(data * 100)) {
          case 0:
            imagesShow([]);
            break;
          case 1:
            imagesShow([0]);
            break;
          case 2:
            imagesShow([0, 1]);
            break;
          case 3:
            imagesShow([0, 1, 2]);
            break;
          case 4:
            imagesShow([0, 1, 2, 3]);
            break;
          case 5:
            imagesShow([0, 1, 2, 3, 4]);
            break;
          case 6:
            imagesShow([0, 1, 2, 3, 4, 5]);
            break;
        }
    });
  

  return (
    <div className="w-full mt-20">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none">
          work
        </h1>
        <div className="w-full h-full absolute top-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                key={index}
                  className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
