import React, { useEffect, useState } from "react";
import { useBooksPageControler } from "./controler";
export const BooksPage: React.FC = () => {
  const { books } = useBooksPageControler();
  return (
    <section>
      <h1>Meus Livros</h1>
      {books ? (
        <ul>
          {books.map((book) => {
            return <li>{book.title}</li>;
          })}
        </ul>
      ) : (
        <span>Loading..</span>
      )}
    </section>
  );
};
