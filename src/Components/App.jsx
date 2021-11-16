import React, {Component} from 'react';
import Header from "./Header/Header";
import "./App.css"

class App extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentsDidMount(){
        this.AlbumsList();
    }

    async runPromises(){
        try {
            let AlbumsList = await axios.get("http://www.devcodecampmusiclibrary.com/");
            console.log(AlbumsList);
        }
        catch (ex) {
            console.log("Error in API");
        }

    }


    render(){
        return(
            <div className= "container-fluid">
            <Header />
        </div>
        )
    }
}

export default App;