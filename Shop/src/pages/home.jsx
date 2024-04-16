import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch("https://fakestore.com/api/products");
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
      Products(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <ColorRing
            height={"120"}
            width={"120"}
            color={"rgba(255,255,255,"}
            visible={true}
          />
        </div>
      ) : (
        <div className=" h-"></div>
      )}
    </div>
  );
}
