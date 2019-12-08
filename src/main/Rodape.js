import React from "react";
import styled from "styled-components";

export default function Rodape() {
  return (
    <Tudo>
      <Rod>
        <h1>Livros</h1>
        <ul>
          <li>Livros de Artes</li>
          <li>Livros de Ciências</li>
          <li>Livros Didáticos</li>
          <li>Livros Humanidades</li>
          <li>Livros de Literatura e Ficção</li>
          <li>Livros de Idiomas e Referência</li>
        </ul>
      </Rod>
      <Rod1>
        <h1>DVDs e Blu-Rays</h1>
        <ul>
          <li>Filmes</li>
          <li>Infantil</li>
          <li>Séries</li>
          <li>Documentários</li>
          <li>Lançamento de DvDs</li>
          <li>Shows e Apresentações</li>
        </ul>
      </Rod1>
      <Rod2>
        <h1>Pesquise</h1>
        <ul>
          <li>Eventos</li>
          <li>Doe Livros</li>
          <li>Bibliotecas</li>
          <li>Livros em Ofertas</li>
          <li>Os Grandes Autores</li>
          <li>Autores Mais Vendidos</li>
        </ul>
      </Rod2>
    </Tudo>
  );
}

const Rod = styled.footer`
  background: #c9f;
`;
const Rod1 = styled.section``;
const Tudo = styled.footer`
  margin: 0em;
  padding: 0em;
  display:flex;
  justify-content: space-around;
  background: #c9f;
  li {
    list-style: none;
    display: flex;
    justify-content: flex-start;
  }
  h1{
    display: flex;
  }
`;
const Rod2 = styled.section``;