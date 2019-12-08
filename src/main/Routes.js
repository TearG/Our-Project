import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home        from '../view/home'
import Dicas       from '../view/dicas/Dicas'
import Sobre       from '../view/sobre/Sobre'
import Contato     from '../view/contato/'
import Vendidos    from '../view/vendidos/Vendidos'
import Recomendado from '../view/recomendados/Recomendados'

export default function Routes(){
  return(
    <Switch>
      <Route exact path='/'            component={Home} />      
      <Route exact path='/sobre'       component={Sobre} />
      <Route exact path='/dicas'       component={Dicas} />
      <Route exact path='/vendidos'    component={Vendidos} />     
      <Route exact path='/recomendado' component={Recomendado} />
      <Route exact path='/contato'     component={Contato} />
    </Switch>
  )
}