// import axios from "axios";
// import { useEffect, useState } from "react";


// const useGames = () => {
//     const [reviews, setReviews] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(()=> {
//         setLoading(true)
//         axios('../reviews.json')
//         .then(res => setReviews(res.data.reviews))
//         .catch(err => setError(err))
//         .finally(()=> setLoading(false))

//     }, []);
//     return {reviews, loading, error};

// };

// export default useGames;















import axios from "axios";
import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios('../reviews.json')
            .then(res => setReviews(res.data.reviews)) 
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { reviews, loading, error };
};

export default useReviews;
