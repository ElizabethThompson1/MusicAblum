import React from "react";
import "./Table.css";


const Table = (props) =>{ 
    let renderedAlbum = props.AlbumsList.map((songs) => {
            return(
                <tbody className="table">
                    <tr>
                        <td>{songs.title}</td>
                        <td>{songs.album}</td>
                        <td>{songs.artist}</td>
                        <td>{songs.genre}</td>
                        <td>{songs.releaseDate}</td>
                    </tr>
                </tbody>
            );
        });
        return(
            <table className="table" >
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </tbody>
                {renderedAlbum}
            </table>
    );
   

};

export default Table;