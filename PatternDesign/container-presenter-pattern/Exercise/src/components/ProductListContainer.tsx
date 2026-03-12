import axios from "axios";
import { useState } from "react"
import { Button } from "./ui/button";

interface ItemProps {
    itemId: number;
}
export const ProductListContainer = ({itemId}:ItemProps) => {

    const [item, setItem] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchCarts = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/${itemId}`)
            console.log(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Button onClick={fetchCarts}>Fetch</Button>
        </div>
    )
}
