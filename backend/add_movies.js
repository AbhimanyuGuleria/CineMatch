const fs = require('fs');
const path = require('path');

const moviesFilePath = path.join(__dirname, 'movies.json');
let movies = JSON.parse(fs.readFileSync(moviesFilePath, 'utf8'));

// Generate 25 high-quality classic movies
const newMovies = [
    { title: "Good Will Hunting", year: 1997, genres: ["Drama", "Romance"], baseRating: 4.5, description: "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.", director: "Gus Van Sant", runtime: 126, imdbId: "tt0119217" },
    { title: "Jurassic Park", year: 1993, genres: ["Action", "Adventure", "Sci-Fi"], baseRating: 4.6, description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.", director: "Steven Spielberg", runtime: 127, imdbId: "tt0107290" },
    { title: "The Truman Show", year: 1998, genres: ["Comedy", "Drama"], baseRating: 4.4, description: "An insurance salesman discovers his whole life is actually a reality TV show.", director: "Peter Weir", runtime: 103, imdbId: "tt0120382" },
    { title: "The Terminator", year: 1984, genres: ["Action", "Sci-Fi"], baseRating: 4.3, description: "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.", director: "James Cameron", runtime: 107, imdbId: "tt0088247" },
    { title: "Back to the Future Part II", year: 1989, genres: ["Adventure", "Comedy", "Sci-Fi"], baseRating: 4.1, description: "After visiting 2015, Marty McFly must repeat his visit to 1955 to prevent disastrous changes to 1985...without interfering with his first trip.", director: "Robert Zemeckis", runtime: 108, imdbId: "tt0096895" },
    { title: "Indiana Jones and the Raiders of the Lost Ark", year: 1981, genres: ["Action", "Adventure"], baseRating: 4.6, description: "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.", director: "Steven Spielberg", runtime: 115, imdbId: "tt0082971" },
    { title: "Alien", year: 1979, genres: ["Horror", "Sci-Fi"], baseRating: 4.7, description: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.", director: "Ridley Scott", runtime: 117, imdbId: "tt0078748" },
    { title: "The Breakfast Club", year: 1985, genres: ["Comedy", "Drama"], baseRating: 4.2, description: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.", director: "John Hughes", runtime: 97, imdbId: "tt0088847" },
    { title: "Die Hard", year: 1988, genres: ["Action", "Thriller"], baseRating: 4.5, description: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.", director: "John McTiernan", runtime: 132, imdbId: "tt0095016" },
    { title: "E.T. the Extra-Terrestrial", year: 1982, genres: ["Adventure", "Family", "Sci-Fi"], baseRating: 4.3, description: "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.", director: "Steven Spielberg", runtime: 115, imdbId: "tt0083866" },
    { title: "Ghostbusters", year: 1984, genres: ["Comedy", "Horror", "Sc-Fi"], baseRating: 4.2, description: "Three former parapsychology professors set up shop as a unique ghost removal service.", director: "Ivan Reitman", runtime: 105, imdbId: "tt0087332" },
    { title: "Blade Runner", year: 1982, genres: ["Action", "Drama", "Sci-Fi"], baseRating: 4.4, description: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.", director: "Ridley Scott", runtime: 117, imdbId: "tt0083658" },
    { title: "Ferris Bueller's Day Off", year: 1986, genres: ["Comedy"], baseRating: 4.1, description: "A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.", director: "John Hughes", runtime: 103, imdbId: "tt0091042" },
    { title: "The Goonies", year: 1985, genres: ["Adventure", "Comedy", "Family"], baseRating: 4.0, description: "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.", director: "Richard Donner", runtime: 114, imdbId: "tt0089218" },
    { title: "Groundhog Day", year: 1993, genres: ["Comedy", "Fantasy", "Romance"], baseRating: 4.3, description: "A narcissistic, self-centered weatherman finds himself in a time loop on Groundhog Day, and the day keeps repeating until he gets it right.", director: "Harold Ramis", runtime: 101, imdbId: "tt0107048" },
    { title: "Rocky", year: 1976, genres: ["Drama", "Sport"], baseRating: 4.4, description: "A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.", director: "John G. Avildsen", runtime: 120, imdbId: "tt0075148" },
    { title: "Schindler's List", year: 1993, genres: ["Biography", "Drama", "History"], baseRating: 4.9, description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", director: "Steven Spielberg", runtime: 195, imdbId: "tt0108052" },
    { title: "Braveheart", year: 1995, genres: ["Biography", "Drama", "History"], baseRating: 4.5, description: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.", director: "Mel Gibson", runtime: 178, imdbId: "tt0112573" },
    { title: "The Sixth Sense", year: 1999, genres: ["Drama", "Mystery", "Thriller"], baseRating: 4.5, description: "A child psychologist comes to the aid of a frightened, clairvoyant boy.", director: "M. Night Shyamalan", runtime: 107, imdbId: "tt0167404" },
    { title: "Catch Me If You Can", year: 2002, genres: ["Biography", "Crime", "Drama"], baseRating: 4.4, description: "Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man.", director: "Steven Spielberg", runtime: 141, imdbId: "tt0264464" },
    { title: "Shutter Island", year: 2010, genres: ["Mystery", "Thriller"], baseRating: 4.4, description: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.", director: "Martin Scorsese", runtime: 138, imdbId: "tt1130884" },
    { title: "WALL·E", year: 2008, genres: ["Animation", "Adventure", "Family"], baseRating: 4.6, description: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.", director: "Andrew Stanton", runtime: 98, imdbId: "tt0910970" },
    { title: "Up", year: 2009, genres: ["Animation", "Adventure", "Comedy"], baseRating: 4.4, description: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.", director: "Pete Docter", runtime: 96, imdbId: "tt1049413" },
    { title: "V for Vendetta", year: 2005, genres: ["Action", "Drama", "Sci-Fi"], baseRating: 4.3, description: "In a future British tyranny, a shadowy freedom fighter, known only by the alias of 'V', plots to overthrow it with the help of a young woman.", director: "James McTeigue", runtime: 132, imdbId: "tt0434409" },
    { title: "No Country for Old Men", year: 2007, genres: ["Crime", "Drama", "Thriller"], baseRating: 4.5, description: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.", director: "Ethan Coen", runtime: 122, imdbId: "tt0477348" }
];

// Start IDs after the maximum current ID
let maxId = 0;
movies.forEach(m => {
    if (m.id > maxId) maxId = m.id;
});

console.log(`Current movie count: ${movies.length}. Max ID: ${maxId}`);

newMovies.forEach((m, i) => {
    // Generate a placeholder SVG so update_posters.js will naturally fetch the real poster
    const encodedTitle = m.title.replace(/ /g, '%20');
    m.poster = `data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22400%22%20height%3D%22600%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22%232c3e50%22%20width%3D%22400%22%20height%3D%22600%22/%3E%0A%20%20%20%20%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22280%22%20font-size%3D%2224%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22bold%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20${encodedTitle}%0A%20%20%20%20%20%20%20%20%3C/text%3E%0A%20%20%20%20%20%20%20%20%3C/svg%3E`;
    m.backdrop = m.poster;
    m.id = maxId + i + 1;
    movies.push(m);
});

fs.writeFileSync(moviesFilePath, JSON.stringify(movies, null, 2), 'utf8');

console.log(`Successfully appended 25 movies! New count: ${movies.length}. Please run update_posters.js now.`);
