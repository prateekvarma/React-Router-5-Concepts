import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
    <p>{params.productId}</p> {/* from the URL params */}
    </section>
  );
};

export default ProductDetail;
