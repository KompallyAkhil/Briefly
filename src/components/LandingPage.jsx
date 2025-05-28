
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Brain, Volume2, Sparkles, ArrowRight, Star,Search  } from "lucide-react";
import { Globe } from "@//components/magicui/globe"
import Navbar from "./Navbar";

export const LandingPage = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Curation",
      description: "Smart algorithms learn your interests to deliver personalized news that matters to you."
    },
    {
      icon: Volume2,
      title: "Voice Narration",
      description: "Listen to your news with natural-sounding AI voices while commuting or multitasking."
    },
    {
      icon: Sparkles,
      title: "Intelligent Summaries",
      description: "Get the key points instantly with AI-generated summaries of complex articles."
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Find articles quickly with AI-enhanced search that understands your queries."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
          <Globe  className="w-full max-w-3xl opacity-50 animate-spin-slow"/>
          <div className="container mx-auto px-4 py-20 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Briefly
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-slate-800 mb-4 font-medium">
                Your AI-Powered Personalized Newsroom
              </p>

              <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto leading-relaxed">
                Experience the future of news consumption with intelligent curation,
                voice narration, and real-time personalization powered by advanced AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 hover:border-blue-400 px-8 py-4 text-lg font-semibold"
                >
                 Learn More
                </Button>
              </div>

             
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/60 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Powered by Advanced AI
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Discover how artificial intelligence transforms your news reading experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-center leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your News Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing the future of personalized news
            </p>

            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white ml-3 font-semibold">4.9/5 from 2,000+ users</span>
            </div>

            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Reading Smarter Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};