import { useState, useEffect } from "react";
import BookList from "../../components/bookList";
import { HTTP_GET } from "../../utils/http";
import Hero from "../../components/hero";
import Search from "../../components/search/Search";
import styles from "./index.module.scss";

export default function Homepage() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
      HTTP_GET("/subjects/crime.json"),
      HTTP_GET("/subjects/sport.json"),
      HTTP_GET("/subjects/science.json"),
    ]).then((data) => setLists(data));
  }, []);

  return (
    <div className={styles.Homepage}>
      <Hero />
      <Search />
      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
    </div>
  );
}
