import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCardItem from "./singleCardItem";

const CardItemPage = () => {
  const [cardItems, setCardItems] = useState([]);
  const data = useLoaderData();
  // console.log(data);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    if (data) {
      const findCard = data?.find((cardItem) => cardItem.id === id);
      setCardItems(findCard);
    }
  }, [data, id]);

  return (
    <div>
      {
        <SingleCardItem cardItem={cardItems} ></SingleCardItem>
      }
    </div>
  );
};

export default CardItemPage;
