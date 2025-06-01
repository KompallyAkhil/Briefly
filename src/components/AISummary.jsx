import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, TrendingUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton"
const AISummary = ({ AiData, loading }) => {
  const [insights, setInsights] = useState(null);


  useEffect(() => {
    if (AiData) {
      const mockInsights = {
        keyPoints: AiData.split(".").map((point) => point.trim()).filter(Boolean),
      };
      setInsights(mockInsights);

    }
  }, [AiData]);

  if (loading) {
    return (
      <Card className="animate-pulse mt-4">
        <CardHeader>
          <div className="h-4 bg-slate-200 rounded w-1/3"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="h-3 bg-slate-200 rounded"></div>
            <div className="h-3 bg-slate-200 rounded w-4/5"></div>
            <div className="h-3 bg-slate-200 rounded w-3/5"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!insights) return null;

  return (
    <>
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 mt-4 animate-fade-in">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span>AI Analysis</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-800 mb-2 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Key Points</span>
            </h4>
            <ul className="space-y-1">
              {insights.keyPoints.map((point, index) => (
                <li key={index} className="text-sm text-slate-700 flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-xs text-slate-500 italic">✨ Analysis powered by AI • Results may vary</div>
        </CardContent>
      </Card>
    </>
  );
};

export default AISummary;
