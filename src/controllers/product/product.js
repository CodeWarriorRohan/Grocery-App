import Product from "../../models/product.js";

export const getProductByCategoryId = async (req, reply) => {
   const { categoryId } = req.params;

   try {
    const products = await Product.find({ category: categoryId }).select("-category").exac();

    return reply.send(products);
   } catch (error) {
    return reply.status(500).send({ message: "An error occurred", error });
   }
};

