import React, { useState, useEffect } from 'react';
import { NewsItem } from './NewsItem';

export const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching data:', error));
    }, [category]);

    return (
        <div className='text-black flex flex-col items-center'>
            <h2 className='text-[30px] text-black font-bold text-center p-[5vh]'>
                {category} 
                <span className='bg-red-600 w-[15vh] pl-[5px] pr-[5px] rounded-[5px] ml-[2vh] text-white'>News</span>
            </h2>

            <div className='w-[90%] grid grid-cols-4 gap-4'>
                {articles.map((news, index) => (
                    <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                ))}
            </div>
        </div>
    );
};
