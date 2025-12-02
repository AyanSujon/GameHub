// import React from "react";
// import { useParams, Link } from "react-router";
// import { FaStar, FaStarHalfAlt, FaRegStar, FaArrowLeft, FaDownload } from "react-icons/fa";
// import useGames from "../Hooks/useGames";
// import GameNotFound from "./GameNotFound";
// import Newsletter from "../Components/Newsletter";
// import Container from "../Layout/Container";
// import useTitle from "../Hooks/useTitle";



// const GameDetails = () => {
//      // for changing Page title Dynamically.
//   useTitle("Game Details");

//   const { id } = useParams();
//   const { games, error } = useGames();


//   if (error)
//     return (
//       <div className="text-center text-red-500 mt-10">
//         Failed to load game details.
//       </div>
//     );

//   const game = games.find((p) => String(p.id) === id);


//   if (!game)
//     return (
//       <div className="text-center text-gray-400 mt-10">
//         <GameNotFound/>
//       </div>
//     );



//   // Dynamic Rating Stars Renderer
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;

//     for (let i = 1; i <= 5; i++) {
//       if (i <= fullStars) {
//         stars.push(<FaStar key={i} className="text-primary" />);
//       } else if (i === fullStars + 1 && halfStar) {
//         stars.push(<FaStarHalfAlt key={i} className="text-primary" />);
//       } else {
//         stars.push(<FaRegStar key={i} className="text-gray-500" />);
//       }
//     }

//     return <div className="flex items-center gap-1">{stars}</div>;
//   };



//   return (
//     <>
//         <div className="min-h-screen bg-secondary text-white py-10 px-5 md:px-20">
//       {/* Back Button */}
//       <div className="mb-6">
//         <Link
//           to="/games"
//           className="inline-flex items-center text-sm hover:text-primary transition"
//         >
//           <FaArrowLeft className="mr-2" /> Back to Library
//         </Link>
//       </div>

//       <div className="grid md:grid-cols-2 gap-10 items-center">
//         {/* Cover Image */}
//         <div className="w-full">
//           <img
//             src={game.coverPhoto}
//             alt={game.title}
//             className="w-full rounded-2xl shadow-lg border-2 border-primary object-cover"
//           />
//         </div>

//         {/* Game Info */}
//         <div className="space-y-4">
//           <h1 className="text-3xl md:text-5xl font-bold text-primary">
//             {game.title}
//           </h1>

//           {/* Category + Rating */}
//           <div className="flex items-center gap-4">
//             <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
//               {game.category}
//             </span>
//             <div className="flex items-center gap-2 text-lg">
//               {renderStars(parseFloat(game.ratings))}
//               <span className="text-gray-300 text-sm">({game.ratings})</span>
//             </div>
//           </div>

//           <p className="text-gray-300 leading-relaxed">{game.description}</p>

//           <div className="text-sm text-gray-400">
//             <strong className="text-white">Developer:</strong> {game.developer}
//           </div>

//           <div className="pt-4">
//             <a
//               href={game.downloadLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-xl hover:bg-[#eb3154] transition"
//             >
//               <FaDownload /> Download Game
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>

//     <section>
//        <Container>
//          <Newsletter/>
//        </Container>
//     </section>

//     </>
//   );
// };

// export default GameDetails;
















import React from "react";
import { useParams, Link } from "react-router";
import { FaStar, FaStarHalfAlt, FaRegStar, FaArrowLeft, FaDownload, FaFacebook, FaYoutube } from "react-icons/fa";
import useGames from "../Hooks/useGames";
import GameNotFound from "./GameNotFound";
import Newsletter from "../Components/Newsletter";
import Container from "../Layout/Container";
import useTitle from "../Hooks/useTitle";

const GameDetails = () => {
  useTitle("Game Details");

  const { id } = useParams();
  const { games, error } = useGames();

  if (error)
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load game details.
      </div>
    );

  const game = games.find((p) => String(p.id) === id);

  if (!game)
    return (
      <div className="text-center text-gray-400 mt-10">
        <GameNotFound />
      </div>
    );

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-primary" />);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-primary" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-500" />);
      }
    }

    return <div className="flex items-center gap-1">{stars}</div>;
  };

  return (
    <>
      <div className="min-h-screen bg-secondary text-white py-10 px-5 md:px-20">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/games"
            className="inline-flex items-center text-sm hover:text-primary transition"
          >
            <FaArrowLeft className="mr-2" /> Back to Library
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Cover Image */}
          <div className="w-full h-[300px]">
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-full rounded-2xl shadow-lg border-2 border-primary object-cover"
            />
          </div>

          {/* Game Info */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-primary">{game.title}</h1>

            {/* Category + Rating */}
            <div className="flex items-center gap-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">{game.category}</span>
              <div className="flex items-center gap-2 text-lg">
                {renderStars(parseFloat(game.ratings))}
                <span className="text-gray-300 text-sm">({game.ratings})</span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-gray-300 leading-relaxed">{game.description}</p>

            {/* Developer & Release Date */}
            <div className="text-sm text-gray-400 space-y-1">
              <div>
                <strong className="text-white">Developer:</strong> {game.developer}
              </div>
              <div>
                <strong className="text-white">Release Date:</strong> {game.releaseDate}
              </div>
            </div>

            {/* Download Button */}
            <div className="pt-4">
              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-xl hover:bg-[#eb3154] transition"
              >
                <FaDownload /> Download Game
              </a>
            </div>
          </div>
        </div>

        {/* Full Width Section for Details */}
        <div className="mt-10 space-y-6">
          {/* Full Description */}
          {game.fullDescription0 && (
            <div className="bg-gray-800 p-5 rounded-xl">
              <h2 className="text-2xl text-primary font-bold mb-2">About the Game</h2>
              <p className="text-gray-300 leading-relaxed">{game.fullDescription0}</p>
            </div>
          )}



          {/* System Requirements */}
          {game.systemRequirements && (
            <div className="bg-gray-800 p-5 rounded-xl">
              <h2 className="text-2xl text-primary font-bold mb-2">System Requirements</h2>
              <div className="text-gray-300">
                <div>
                  <strong>Minimum:</strong> RAM: {game.systemRequirements.min.ram}, OS: {game.systemRequirements.min.os}
                </div>
                <div>
                  <strong>Recommended:</strong> RAM: {game.systemRequirements.recommended.ram}, OS: {game.systemRequirements.recommended.os}
                </div>

                {/* File Size, Game Modes & Maps */}
                <div className="bg-gray-800 p-5 rounded-xl text-gray-300 space-y-2">
                  {game.fileSize && (
                    <div>
                      <strong className="text-white">File Size:</strong> {game.fileSize}
                    </div>
                  )}
                  {game.gameModes && (
                    <div>
                      <strong className="text-white">Game Modes:</strong> {game.gameModes.join(", ")}
                    </div>
                  )}
                  {game.maps && (
                    <div>
                      <strong className="text-white">Maps:</strong> {game.maps.join(", ")}
                    </div>
                  )}
                </div>
              </div>

            </div>

          )
          }

          <div className="divider py-10 text-primary uppercase font-bold text-3xl">Follow Game Updates</div>
          {/* Social Links */}
          {game.socialLinks && (
            <div className="bg-gray-800 p-5 rounded-xl flex justify-center gap-4">
              
              {game.socialLinks.facebook && (
                <a href={game.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  <FaFacebook size={24} />
                </a>
              )}
              {game.socialLinks.youtube && (
                <a href={game.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  <FaYoutube size={24} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <section>
        <Container>
          <Newsletter />
        </Container>
      </section>
    </>
  );
};

export default GameDetails;
