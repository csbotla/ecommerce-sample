import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import { useState } from "react";
import CardList from "./components/CardList";

function App() {
  // https://source.unsplash.com/random
  // const [images, setImages] = useState([]);

  const images = [
    {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url:
        "http://placehold.jp/ffffff/dddddd/1920x400.png?text=Sample1%20",
    },
    {
      id: "1",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      download_url:
        "http://placehold.jp/ffffff/dddddd/1920x400.png?text=Sample2%20",
    },
    {
      id: "10",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/6J--NXulQCs",
      download_url:
        "http://placehold.jp/ffffff/dddddd/1920x400.png?text=Sample3%20",
    },
    {
      id: "100",
      author: "Tina Rataj",
      width: 2500,
      height: 1656,
      url: "https://unsplash.com/photos/pwaaqfoMibI",
      download_url:
        "http://placehold.jp/ffffff/dddddd/1920x400.png?text=Sample4%20",
    },
    {
      id: "1000",
      author: "Lukas Budimaier",
      width: 5626,
      height: 3635,
      url: "https://unsplash.com/photos/6cY-FvMlmkQ",
      download_url:
        "http://placehold.jp/ffffff/dddddd/1920x400.png?text=Sample5%20",
    },
  ];
  const cardImages = [
    {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url:
        "http://placehold.jp/f2f2f2/a1a1a1/200x300.png?text=Deal%0A",
    },
    {
      id: "1",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      download_url:
        "http://placehold.jp/f2f2f2/a1a1a1/200x300.png?text=Deal%0A",
    },
    {
      id: "10",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/6J--NXulQCs",
      download_url:
        "http://placehold.jp/f2f2f2/a1a1a1/200x300.png?text=Deal%0A",
    },
    {
      id: "100",
      author: "Tina Rataj",
      width: 2500,
      height: 1656,
      url: "https://unsplash.com/photos/pwaaqfoMibI",
      download_url:
        "http://placehold.jp/f2f2f2/a1a1a1/200x300.png?text=Deal%0A",
    },
    {
      id: "1000",
      author: "Lukas Budimaier",
      width: 5626,
      height: 3635,
      url: "https://unsplash.com/photos/6cY-FvMlmkQ",
      download_url:
        "http://placehold.jp/f2f2f2/a1a1a1/200x300.png?text=Deal%0A",
    },
  ];

  return (
    <div className="App">
      {/* <VStack>
        <Flex align={"center"} justify={"center"}>
        </Flex>
      </VStack> */}
      <Nav />
      <Carousel images={images} hello="hello" />
      <CardList images={cardImages} cardListHeading="Deals of the day" />
      <CardList images={cardImages} cardListHeading="End of Season sale" />
      <CardList images={cardImages} cardListHeading="Top Brands" />
      <CardList images={cardImages} cardListHeading="Trending" />
      {/* <Carousel
        images={[
          "https://picsum.photos/1920/500",
          "https://picsum.photos/1920/500",
          "https://picsum.photos/1920/500",
        ]}
      /> */}
    </div>
  );
}

export default App;
