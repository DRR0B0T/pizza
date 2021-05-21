import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import  { setPizzas } from "./redux/actions/pizzas";


// function App() {
//
//
//     useEffect(()=>{
//         axios
//             .get('http://localhost:3001/db.json')
//             .then(({ data }) => {
//             setPizzas(data.pizzas)
//             })
//     },[])
//
//   return (
//       <div className="wrapper">
//          <Header />
//           <div className="content">
//             <Route exact path='/' render={()=><Home items={pizzas} />} />
//             <Route exact path='/cart' component={Cart} />
//           </div>
//       </div>
//   );
// }

class App extends React.Component {


    componentDidMount() {
     return (

             axios
                 .get('http://localhost:3001/db.json')
                 .then(({ data }) => {
                   this.props.setPizzas(data.pizzas)
                 })

     )
    }

    render() {
        console.log(this.props)

        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' render={() => <Home items={this.props.items}/>}/>
                    <Route exact path='/cart' component={Cart}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.pizzas.items,
        filters: state.filters,
    }
}

const mapDispatchToProps = {
    setPizzas,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
