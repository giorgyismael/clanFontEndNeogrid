import React, { useEffect, useState } from "react";
export function useBooksPageControler() {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetch("https://5f8e56ef4c15c40016a1e8f7.mockapi.io/books")
      .then((response) => response.json())
      .then(setBooks);
  }, []);

  return { books };
}
