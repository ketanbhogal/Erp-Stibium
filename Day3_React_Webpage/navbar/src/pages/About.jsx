export default function About() {
  const stats = [
    { title: "Employees", value: 120 },
    { title: "Projects Completed", value: 75 },
    { title: "Offices Worldwide", value: 5 },
  ];

  return (
    <div className="min-h-screen bg-pink-100 p-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Our Company
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are committed to delivering high-quality software solutions and creating a collaborative work environment for our employees. Our goal is to innovate, grow, and make a positive impact in the tech industry.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition"
          >
            <h2 className="text-3xl font-bold text-blue-600">{stat.value}</h2>
            <p className="text-gray-500 mt-2">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Office Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=600"
          alt="Office 1"
          className="rounded-lg shadow-lg object-cover w-full h-56 hover:scale-105 transition-transform"
        />
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=600"
          alt="Office 2"
          className="rounded-lg shadow-lg object-cover w-full h-56 hover:scale-105 transition-transform"
        />
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=600"
          alt="Office 3"
          className="rounded-lg shadow-lg object-cover w-full h-56 hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
}
