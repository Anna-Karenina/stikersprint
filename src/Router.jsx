import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import AppC from "./App";
import StikersContainer from "./Components/StikerWindow/StikersContainer";
import ConsumerC from "./Components/ConsumerWindow/ContainerConsumerWindow"
import PostStorage from "./Components/PostStorageWindow/ContainerPostStorageWindow"
import StoragePlaceEditMenu from './Components/PostStorageWindow/StoragePlaceEdit/Container'
import tcsm from './util/CustomStikerModal/ToollBarCustomStiker'


export function Router(){
  return(
    <HashRouter>
      <Switch>
        <Route path="/" exact component={AppC} />
        <Route path="/Stikers" component={StikersContainer} />
        <Route path="/Consumer" component={ConsumerC} />
        <Route path="/postingonstorage" component={PostStorage} />
        <Route path="/SPEM" component={StoragePlaceEditMenu} />
        <Route path="/tb" component={tcsm} />
      </Switch>
    </HashRouter>
  ) 
};
