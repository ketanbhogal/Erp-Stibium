export default function Home() {
  const officeImages = [
    {
      src: "https://tse4.mm.bing.net/th/id/OIP.4gtdZ7SJsWCL3SSOPzPG8gHaES?pid=Api&P=0&h=180",
      title: "Modern Workspace",
      description: "A bright and modern office environment."
    },
    {
      src: "https://media.istockphoto.com/id/2193065392/photo/young-business-professionals-collaborating-in-a-modern-meeting-room.jpg?b=1&s=612x612&w=0&k=20&c=8m66XQeRkA4cGvkuPGiUQ0goTS36e78rFMIURFmh5yw=",
      title: "Team Collaboration",
      description: "Teams working together in a creative space."
    },
    {
      src: "https://tse2.mm.bing.net/th/id/OIP.i98V_l9yAGnpMp1DW68O5QHaFS?pid=Api&P=0&h=180",
      title: "Open Office",
      description: "Open office with natural lighting and comfortable seating."
    }
  ];

  return (
    <div className="min-h-screen bg-pink-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Welcome to Our Company Dashboard
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our office environment and meet the amazing team working behind the scenes.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {officeImages.map((img, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{img.title}</h2>
              <p className="text-gray-600 text-sm">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
