


// import React, { useState } from 'react';
// import Container from '../Layout/Container';
// import AllGameCard from '../Components/GameCard/AllGameCard';
// import useGames from '../Hooks/useGames';
// import Loading from './Loading';
// import Error404 from './Error404';
// import useTitle from '../Hooks/useTitle';

// const Games = () => {
//     useTitle("Games");

//     const { games, loading, error } = useGames();

//     const [category, setCategory] = useState("All");
//     const [search, setSearch] = useState("");

//     if (loading) return <Loading />;
//     if (error) return <Error404 />;

//     // Normalize game data safely
//     const safeGames = games.map(game => ({
//         id: game.id,
//         name: (game.title || "").trim(),
//         category: (game.category || "Uncategorized").trim(),
//         ...game
//     }));

//     // Unique categories for dropdown
//     const categories = ["All", ...new Set(safeGames.map(game => game.category))];

//     // Filter by category and search (case-insensitive)
//     const filteredGames = safeGames.filter(game => {
//         const matchesCategory = category === "All" || game.category.toLowerCase() === category.toLowerCase();
//         const matchesSearch = game.title.toLowerCase().includes(search.trim().toLowerCase());
//         return matchesCategory && matchesSearch;
//     });

//     return (
//         <div className='py-10 bg-secondary'>
//             <Container>
//                 <div className="divider py-10 text-primary uppercase font-bold text-3xl">Find Your Favorite Game</div>

//                 {/* Filter and Search */}
//                 <div className='flex flex-col md:flex-row md:justify-between mb-6 gap-4'>

//                     <input
//                         type="text"
//                         placeholder='Search by game name...'
//                         className='p-2 rounded flex-1 bg-[#181c23] text-white placeholder-gray-400 border-none'
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                     <select
//                         className='p-2 rounded bg-[#181c23] text-white placeholder-gray-400 border-none'
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                     >
//                         {categories.map((cat, index) => (
//                             <option key={index} value={cat}>{cat}</option>
//                         ))}
//                     </select>

//                 </div>

//                 {/* Games Grid */}
//                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
//                     {filteredGames.length > 0 ? (
//                         filteredGames.map(game => (
//                             <AllGameCard key={game.id} game={game} />
//                         ))
//                     ) : (
//                         <p className='col-span-full text-center text-gray-400'>No games found</p>
//                     )}
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default Games;










import React, { useState } from 'react';
import Container from '../Layout/Container';
import AllGameCard from '../Components/GameCard/AllGameCard';
import useGames from '../Hooks/useGames';
import Loading from './Loading';
import Error404 from './Error404';
import useTitle from '../Hooks/useTitle';

const Games = () => {
    useTitle("Games");

    const { games, loading, error } = useGames();

    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 8;

    if (loading) return <Loading />;
    if (error) return <Error404 />;

    const safeGames = games.map(game => ({
        id: game.id,
        name: (game.title || "").trim(),
        category: (game.category || "Uncategorized").trim(),
        ...game
    }));

    const categories = ["All", ...new Set(safeGames.map(game => game.category))];

    const filteredGames = safeGames.filter(game => {
        const matchesCategory = category === "All" || game.category.toLowerCase() === category.toLowerCase();
        const matchesSearch = game.title.toLowerCase().includes(search.trim().toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredGames.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentGames = filteredGames.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Calculate page numbers to show (max 5 buttons)
    const getPageNumbers = () => {
        let start = Math.max(currentPage - 2, 1);
        let end = Math.min(start + 2, totalPages);

        if (end - start < 4) {
            start = Math.max(end - 2, 1);
        }

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className='py-10 bg-secondary'>
            <Container>
                <div className="divider py-10 text-primary uppercase font-bold text-3xl">Find Your Favorite Game</div>

                {/* Filter and Search */}
                <div className='flex flex-col md:flex-row md:justify-between mb-6 gap-4'>
                    <input
                        type="text"
                        placeholder='Search by game name...'
                        className='p-2 rounded flex-1 bg-[#181c23] text-white placeholder-gray-400 border-none'
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                    />
                    <select
                        className='p-2 rounded bg-[#181c23] text-white placeholder-gray-400 border-none'
                        value={category}
                        onChange={(e) => { setCategory(e.target.value); setCurrentPage(1); }}
                    >
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Games Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {currentGames.length > 0 ? (
                        currentGames.map(game => (
                            <AllGameCard key={game.id} game={game} />
                        ))
                    ) : (
                        <p className='col-span-full text-center text-gray-400'>No games found</p>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className='flex justify-center mt-8 gap-2 flex-wrap'>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className='px-4 py-2 rounded bg-gray-700 text-gray-200 hover:bg-primary hover:text-white'
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>

                        {getPageNumbers().map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 rounded ${currentPage === page ? 'bg-primary text-white' : 'bg-gray-700 text-gray-200 hover:bg-primary hover:text-white'}`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className='px-4 py-2 rounded bg-gray-700 text-gray-200 hover:bg-primary hover:text-white'
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Games;
