
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Volume2, VolumeOff } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";



const AudioPlayer = ({ text, title, isPlaying, onPlayingChange }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
//   const { toast } = useToast();

  const speakText = () => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      window.speechSynthesis.cancel();

      if (isSpeaking) {
        setIsSpeaking(false);
        onPlayingChange(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;

      utterance.onstart = () => {
        setIsSpeaking(true);
        onPlayingChange(true);
        // toast({
        //   title: "🎧 Now Reading",
        //   description: title,
        // });
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        onPlayingChange(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        onPlayingChange(false);
        // toast({
        //   title: "Audio Error",
        //   description: "Unable to play audio. Please try again.",
        //   variant: "destructive",
        // });
      };

      window.speechSynthesis.speak(utterance);
    } else {
    //   toast({
    //     title: "Audio Not Supported",
    //     description: "Your browser doesn't support text-to-speech.",
    //     variant: "destructive",
    //   });
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={speakText}
      className={`flex items-center space-x-2 ${isSpeaking ? 'bg-blue-50 border-blue-300' : ''}`}
    >
      {isSpeaking ? (
        <VolumeOff className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
      <span>{isSpeaking ? "Stop" : "Listen"}</span>
    </Button>
  );
};
export default AudioPlayer;