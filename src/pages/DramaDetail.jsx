import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DramaDetail = () => {
    const apikey=import.meta.env.VITE_API_KEY;
    const {id}=useParams();
    const [isloading, setIsLoading]=useState(true);
    const [m, setM]=useState(null);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apikey}&language=ko`).then(res => {
            console.log(res.data)
            setM(res.data)
            setIsLoading(false)
        })
    },[id])
    return (
         <div className='upCommingDetail'>
            <h2>드라마 디테일</h2>
            {
                isloading ? (<p className='loding'>로딩중입니다.</p>):(
                    <div className="upCommingDetailData">
                        <div className="detailImgBox">
                            <img src={`https://image.tmdb.org/t/p/w500${m.backdrop_path}`} alt={m.title} />
                        </div>
                        <div className="detailTextBox">
                            <div className="textBoxTitle">{m.name}</div>
                            <div className="textBoxOriginal">{m.original_title}</div>
                            <div className="textBoxTagline">한줄 평 :{m.tagline}</div>
                            <div className="textBoxOverview">줄거리 : {m.overview}</div>
                            <div className="textBoxdate">개봉일 : {m.release_date}</div>
                            <div className="textBoxaverage">평점 : ⭐ {m.vote_average}</div>
                            <div className="textBoxcount">좋아요 : 💖 {m.vote_count}</div>
                            <div className="textBoxpopularity">인기도 : {m.popularity}</div>
                            <div className="textBoxstatus">상태 : {m.status}</div>
                            <div className="textBoxruntime">상영시간 : {m.runtime}</div>
                            <div className="textBoxproduction_companies">
                                <span>제작사 : </span>
                                <div>
                                    {
                                        m.production_companies && m.production_companies.map((production) => (
                                            <span key={production.id} className='production'>{production.name}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="textBoxgenres">
                                <span>장르 : </span>
                                <div>
                                    {m.genres&& m.genres.map((genre)=>(
                                        <span key={genre.id} className='genres'>{genre.name}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default DramaDetail;