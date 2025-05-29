import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_NEWS_BY_TOPIC = gql`
    query GetNewsByTopic($topic: String!) {
        getNews(topic : $topic){
            source{
              id
              name
            }
            author
            title
            description
            url
            urlToImage
            publishedAt
            content
        }
    }
`
const GET_EVERYTHING = gql`
    query GetEverything($topic: String!) {
        todayNews(topic: $topic) {
            source {
                id
                name
            }
            author
            title
            description
            url
            urlToImage
            publishedAt
            content
        }
    }`

const News = () => {
    const [topic, setTopic] = useState("Dhoni on IPL 2026");
 
    const [getNews, { loading, error, data }] = useLazyQuery(GET_NEWS_BY_TOPIC);
    const handleTopic = () => {
        getNews({ variables: { topic } })
    }   

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-slate-800">
                                Your Personalized Feed
                            </h2>
                        </div>
                        <div className="flex items-center space-x-4">
                            <input
                                type="text"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                                placeholder="Enter topic"
                            />
                            <button
                                onClick={handleTopic}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                Get News
                            </button>
                        </div>
                    </div>
                    {data?.getNews && data?.getNews.map((news,index)=> (
                        <div key={index} className="mt-6 p-4 border border-gray-200 rounded-md shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-800">{news.title}</h3>
                            <p className="text-gray-600 mt-2">{news.description}</p>
                            <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">
                                Read more
                            </a>
                            {news.urlToImage && (
                                <img src={news.urlToImage} alt={news.title} className="mt-4 w-full h-auto rounded-md" />
                            )}
                        </div>
                    ))}
                    {data?.todayNews && data?.todayNews.map((news,index)=> (
                        <div key={index} className="mt-6 p-4 border border-gray-200 rounded-md shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-800">{news.title}</h3>
                            <p className="text-gray-600 mt-2">{news.description}</p>
                            <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">
                                Read more
                            </a>
                            {news.urlToImage && (
                                <img src={news.urlToImage} alt={news.title} className="mt-4 w-full h-auto rounded-md" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default News;