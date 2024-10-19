import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';
function Products() {
    var products = [
        {title: "Arquitels", description: "Arquels of products in the product store store with their unique",
          live: true, case: false
        },
        {title: "TTR", description: "Arquels of products in the product store store with their unique",
          live: true, case: false
        },
        {title: "Cula", description: "Arquels of products in the product store store with their unique",
          live: true, case: true
        },
        {title: "YTR 2024", description: "Arquels of products in the product store store with their unique",
          live: true, case: true
        },
        {title: "TTR AI", description: "Arquels of products in the product store store with their unique",
          live: true, case: false
        },
        {title: "Layout Land", description: "Arquels of products in the product store store with their unique",
          live: true, case: false
        },
        {title: "YIR 2022", description: "Arquels of products in the product store store with their unique",
          live: true, case: false
        },
    ];
    const [pos, setPos] = useState(0);
    const mover = (val) => {
      setPos(val*20);
    };
  return (
    <div className="bg-zinc-900 py-32 relative">
      {products.map((val, index) => (
        <Product  val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 py-14 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className=" Window absolute  w-[30rem] h-[20rem] bg-sky-100 left-[44%]   mt-24 overflow-hidden honer:bg-sky-400"
        >
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full bg-sky-900 "
          >
            <video autoPlay loop muted src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm"></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full bg-sky-300 "
          >
            <video autoPlay loop muted src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm"></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full bg-sky-600 "
          >
            <video autoPlay loop muted src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/singularity-43.webm"></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full "
          >
            <video autoPlay loop muted src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-43.webm"></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full "
          >
            <video autoPlay loop muted src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/ttr-169.webm"></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full "
          >
            <video autoPlay loop muted src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/weglotlikemagic-169.webm"></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full "
          >
            <video  src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yir2022-169.webm"></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products