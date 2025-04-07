import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    comment: "This habit tracker has completely transformed my daily routine!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Don Elvis",
    comment: "Super easy to use and keeps me accountable. Highly recommend!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emily Johnson",
    comment: "I love the reminders and progress tracking. 10/10!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Users Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((user, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={user.image}
              alt={user.name}
              className="w-16 h-16 mx-auto rounded-full"
            />
            <h3 className="text-lg font-semibold mt-4">{user.name}</h3>
            <p className="text-gray-600 mt-2">"{user.comment}"</p>
            <div className="text-yellow-500 mt-3">
              {"⭐".repeat(user.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
