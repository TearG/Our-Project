import React from "react";
import styled from 'styled-components';


export default function Contato(){
  return(
    <Section>
      <form>
        Nome: <input type='text' name='nome' placeholder='                     Digite seu nome'/>
        E-mail: <input type='email' name='email' placeholder='                     Digite seu E-mail'/>
        Comentários: <textarea name='comentarios'></textarea>

        <input type='submit' name='enviar' value='Enviar'/>
        <input type='reset' name='resetar' value='Resetar'/>
        
      </form>
    </Section>
  )
}

const Section = styled.section`
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input{
    width: 20em;
  }
  textarea{
    width: 20em;
  }
  `;