import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './comedy.scss'


const Comedy = () => {
    const API_KEY=import.meta.env.VITE_API_KEY;
    const [comedy, setComedy]= useState([])
    const [isLoading, setIsLoading]=useState(true);


    useEffect(() => {
        axios
            .get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35&language=ko-KR`
            )
            .then(res => {
                console.log(res.data.results);
                setComedy(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false)
            });
        }, []);

    return (
        <div className='drama'>
            <h2>코미디</h2>
            {
                isLoading ? (<p>로딩중</p>) : (
                    <div className="dramaItem">
                        {comedy.map((item)=>(
                            <div className='dramaimgWrap' key={item.id}>
                              <Link to={`/comedy/${item.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.original_name} />
                                    <span className="dramaTitle">{item.name}</span>
                              </Link>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default Comedy;