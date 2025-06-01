import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User } from "lucide-react";
import AudioPlayer from "./AudioPlayer";
import AISummary from "./AISummary";
import { gql, useLazyQuery } from "@apollo/client";

const GET_SUMMARY = gql`
  query GetSummary($newsTopic: String!) {
    getSummary(newsTopic: $newsTopic)
  }
`;

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const ArticleCart = ({ data }) => {
  const [showAISummary, setShowAISummary] = useState({});
  const [showFullContent, setShowFullContent] = useState({});
  const [isPlaying, setIsPlaying] = useState({});
  const [getSummary, { loading, data: AiData }] = useLazyQuery(GET_SUMMARY);

  const handleToggleAISummary = (index, description) => {
    getSummary({ variables: { newsTopic: description } });
    setShowAISummary((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleToggleFullContent = (index) => {
    setShowFullContent((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePlayingChange = (index, playing) => {
    setIsPlaying((prev) => ({
      ...prev,
      [index]: playing,
    }));
  };

  return (
    <>
      {data?.getNews.map((article, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in group mt-6"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {article.urlToImage && (
            <div className="relative overflow-hidden">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="mt-4 w-full h-auto rounded-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          )}

          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="secondary" className="capitalize">
                {article.source?.name || "News"}
              </Badge>
              <div className="flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>2 min read</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{article.author || "Unknown"}</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
              {article.title}
            </h3>

            <p className="text-slate-600 mt-2 leading-relaxed">{article.description}</p>

            <div className="flex items-center justify-between text-sm text-slate-500 mt-4">
              <span>{formatDate(article.publishedAt)}</span>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleToggleAISummary(index, article.description)}
                className="flex items-center space-x-2"
              >
                <span>🤖</span>
                <span>AI Summary</span>
              </Button>

              <AudioPlayer
                text={showFullContent[index] ? article.content : article.description}
                title={article.title}
                isPlaying={isPlaying[index]}
                onPlayingChange={(playing) => handlePlayingChange(index, playing)}
              />

              <Button variant="ghost" size="sm" onClick={() => handleToggleFullContent(index)}>
                {showFullContent[index] ? "Show Less" : "Read Full Article"}
              </Button>
            </div>

            {showAISummary[index] && AiData?.getSummary && (
              <AISummary AiData={AiData.getSummary} article={article} />
            )}

            {showFullContent[index] && (
              <div className="mt-4 p-4 bg-slate-50 rounded-lg animate-fade-in">
                <h4 className="font-semibold text-slate-800 mb-3">Full Article</h4>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">{article.content}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ArticleCart;
