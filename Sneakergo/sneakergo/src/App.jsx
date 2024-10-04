// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import ItemList from "./Itemlist";

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Items</h1>
      <ItemList />
    </div>
  </Provider>
);

export default App;
