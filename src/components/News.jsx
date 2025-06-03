import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import ArticleCart from "./ArticleCard";
import { toast } from "sonner";
import { GET_NEWS_BY_TOPIC } from "./Query";
import { setTopic } from "../app/slices/topicSlice";
import { useSelector, useDispatch } from 'react-redux'
import { setData, setError, setLoading } from "../app/slices/dataSlice";

const News = () => {
    const dispatch = useDispatch();
    const topic = useSelector((state) => state.topic.topic);
    const { loading, error, data: newsData } = useSelector((state) => state.data);

    const [getNews] = useLazyQuery(GET_NEWS_BY_TOPIC,{
        onCompleted : (data) => {
            dispatch(setData(data.getNews));
            dispatch(setLoading(false));
            dispatch(setError(null));
        },
        onError : (error) => {
            dispatch(setError(error.message));
            dispatch(setLoading(false));
        }
    });
    const handleTopic = () => {
        if (topic.length === null || topic.length === 0) {
            toast.error("Please enter a topic to get the latest news.");
            return;
        }
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
                            <Input placeholder="Enter topic"
                                type="text"
                                value={topic}
                                onChange={(e) => dispatch(setTopic(e.target.value))}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleTopic();
                                    }
                                }}
                            />
                            <Button
                                onClick={handleTopic}  
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                Get News
                            </Button>
                        </div>
                    </div>
                    {topic.length === 0 && (
                        <div className="mt-4 text-gray-500">
                            Please enter a topic to get the latest news.
                        </div>
                    )}
                    {newsData?.length > 0 && <ArticleCart data={ newsData} />}
                </div>
            </div>
        </>
    )
}
export default News;