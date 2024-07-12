import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { Medal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Image Section */}
      <div className="w-full h-auto">
        <img
          src="/contest.png" /* Adjust the path to the actual location of contest.png */
          alt="Contest Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
          <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">

          </div>
          <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
            <span className="text-amber-700">Discover Trends</span><br></br>
            Shop with Influence.
          </h1>
          <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
            Influencer Cart
          </div>
        </div>
        <div className={cn("text-sm md:text-xl text-neutral-400 mt-4", textFont.className)}>
        Introducing a new feature on the Myntra app where influencers curate personalized shopping carts for events like festivals, seasons, or specific styles. Users can follow influencers, browse themed carts, and add items or entire carts to their personal shopping cart.
        </div>
        <Button className="mt-6" size={"lg"} asChild>
          <Link href={"/sign-up"}>Get Myntra for free</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
