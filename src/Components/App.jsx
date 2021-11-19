import React, {Component} from 'react';
import Header from "./Header/Header";
import "./App.css"
import Table from './Table/Table';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';


class App extends Component{
    constructor(props){
        super(props);
        this.state={AlbumsListOfSongs:[],
    }; 
    }

    componentDidMount(){
        this.runPromises();
    }

    async runPromises(){
        try {
         let AlbumsList = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
              
                console.log(AlbumsList.data);
                this.setState({
                    AlbumsListOfSongs:AlbumsList.data,
            });
        }
        catch (err) {
             console.log("Error in api", err) }

    }
   
    render(){
        return(
            <div className= "body">
            <Header />
            <SearchBar FilterDown={this.resultsofOtherFunction}/>
            <Table AlbumsList= {this.state.AlbumsListOfSongs}/>
        </div>
        )
    }
}

export default App;