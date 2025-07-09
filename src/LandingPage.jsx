export default function LandingPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
        <header className="p-6 flex justify-between items-center border-b border-zinc-700">
          <h1 className="text-3xl font-bold tracking-wide">Gravel & Ghost</h1>
          <nav className="space-x-4 text-sm">
            <a href="#read" className="hover:underline">Read</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#characters" className="hover:underline">Characters</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>
  
        <section className="flex flex-col items-center text-center px-6 py-20">
          <h2 className="text-4xl font-extrabold mb-4">Some roads you ride to escape. Others ride with you.</h2>
          <p className="text-zinc-300 max-w-2xl mb-8">
            Follow Jack "Flame" Delaney, a veteran with nothing left to lose, as he rides across America searching for peace, purpose, and the people who still remember his name. Part serial thriller, part slow-burn romance, <span className="italic">Gravel & Ghost</span> is a story of healing, heat, and hard miles.
          </p>
          <a href="#read" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold">Start Reading</a>
        </section>
  
        <section id="read" className="bg-zinc-950 px-6 py-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Recent Chapters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Replace these with dynamic links to your actual chapter posts */}
            <div className="bg-zinc-800 p-4 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold mb-2">Episode 1: Ten Years Gone</h4>
              <p className="text-sm text-zinc-400">Jack leaves everything behind. But the past is never that far back.</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold mb-2">Episode 2: Smoke and Steel</h4>
              <p className="text-sm text-zinc-400">Old friendships are reignited at Charles’ shop. And someone new walks in.</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold mb-2">Episode 3: The Ride</h4>
              <p className="text-sm text-zinc-400">Maya rides hard. Jack follows. The road doesn’t ask questions.</p>
            </div>
          </div>
        </section>
  
        <section id="about" className="px-6 py-16">
          <h3 className="text-2xl font-semibold mb-4">About the Author</h3>
          <p className="text-zinc-300 max-w-2xl">
            Jason Adams is a veteran and writer based in Colorado. His stories explore the space between who we were and who we have to become. <span className="italic">Gravel & Ghost</span> is his tribute to the long road, the real ones we ride, and the ghosts we carry with us.
          </p>
        </section>
  
        <section id="characters" className="bg-zinc-900 px-6 py-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Meet the Cast</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <img src="/images/jack-flame.jpg" alt="Jack Flame" className="w-32 h-32 mx-auto rounded-full mb-2" />
              <h4 className="text-lg font-bold">Jack "Flame" Delaney</h4>
              <p className="text-sm text-zinc-400">A former soldier on a cross-country ride to outpace the past—and maybe find peace.</p>
            </div>
            <div>
              <img src="/images/charles.jpg" alt="Charles" className="w-32 h-32 mx-auto rounded-full mb-2" />
              <h4 className="text-lg font-bold">Charles "Chuck" Donovan</h4>
              <p className="text-sm text-zinc-400">An Army vet turned garage owner, offering Jack a place to crash and a shot at something steady.</p>
            </div>
            <div>
              <img src="/images/maya.jpg" alt="Maya" className="w-32 h-32 mx-auto rounded-full mb-2" />
              <h4 className="text-lg font-bold">Maya Torres</h4>
              <p className="text-sm text-zinc-400">Executive by day, rider by night. Sharp, fast, and hard to read—but impossible to ignore.</p>
            </div>
          </div>
        </section>
  
        <footer className="px-6 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Gravel & Ghost. All rights reserved.
        </footer>
      </div>
    );
  }
  