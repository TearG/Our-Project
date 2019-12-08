import React from "react";
import styled from "styled-components";

import Quincas from "./img/quincas.jpg";
import Guerra from "./img/guerra.jpg";
import Irmaos from "./img/irmaos.jpg";
import Theo from "./img/theo.jpg";
import Madame from "./img/madame.jpg";
import Triste from "./img/triste.jpg";

export default function Livros() {
  const books = [
    {
      id: 1,
      title: "Quincas Borba",
      author: "Machado de Assis",
      price: "R$ 30,00",
      caminhoIMG: Quincas
    },
    {
      id: 2,
      title: "A Guerra do Fim do Mundo",
      author: "Mario Vargas Llosa",
      price: "R$ 40,00",
      caminhoIMG: Guerra
    },
    {
      id: 3,
      title: "Os Irmãoes Karamázov",
      author: "Fiódor Dostoviéski",
      price: "R$ 50,00",
      caminhoIMG: Irmaos
    },
    {
      id: 4,
      title: "A Viagem de Théo",
      author: "Catherine Clement",
      price: "R$ 30,00",
      caminhoIMG: Theo
    },
    {
      id: 5,
      title: "Madame Bovary",
      author: "Gustave Flaubery",
      price: "R$ 40,00",
      caminhoIMG: Madame
    },
    {
      id: 6,
      title: "Triste Fim do Policarpo Quaresma",
      author: "Lima Barreto",
      price: "R$ 50,00",
      caminhoIMG: Triste
    }
  ];

  return (
    <List>
      <h1>Lançamentos</h1>
      <Ul>
        {books.map(titulo => (
          <Li key={titulo.id}>
            <Img src={titulo.caminhoIMG} widht="500" height="400"/>
            <Titulo>{titulo.title}</Titulo>
            <Autor>{titulo.author}</Autor>
            <Preco>{titulo.price}</Preco>{" "}
          </Li>
        ))}
      </Ul>
    </List>
  );
}
const List = styled.section`
  background: blue;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Titulo = styled.h1``;

const Autor = styled.h4``;

const Preco = styled.p``;
const Img = styled.img``;
