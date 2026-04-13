import { motion } from "framer-motion";
import SingleBook from "./SingleBook";

const BooksCard = ({ books }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4" 
    >
      {books.map((item, index) => (
        <SingleBook book={item} key={item._id} index={index} />
      ))}
    </motion.div>
  );
};

export default BooksCard;
