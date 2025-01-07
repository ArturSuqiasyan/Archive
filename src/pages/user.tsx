
import axios from "axios";
import { useParams } from "react-router-dom";

export const User = () => {
    const { id } = useParams();


    return (
      <h2>usres{id}</h2>
    
    );
};