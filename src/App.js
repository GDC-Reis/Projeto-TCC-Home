import NomePagina from "./Componentes/NomePagina/index"
import Header from "./Componentes/Header/Header";
import Titulo from "./Componentes/Titulo/index";
import TextoApresentacao from "./Componentes/Texto/index";
import AmostraDeProdutos from "./Componentes/AmostraProdutos/index"
import BotaoComprar from "./Componentes/BotaoComprar/index"

import { motion } from 'framer-motion'
import './App.css';

function App() {
  return (

    <main className='main'>
        <NomePagina/>
        <Header/>
        <Titulo /> 
        <section>
         <TextoApresentacao/>
         <AmostraDeProdutos/> 
         <BotaoComprar/>      
        </section>
    </main>

    );
}

export default App;
