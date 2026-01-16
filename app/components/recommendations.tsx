const testimonials = [
  {
    name: "Davi Dias",
    company: "Compass UOL",
    testimonial:
      "I worked with Tiago during my internship at Compass. He is a great professional and, during the projects, it was a very positive experience collaborating with him. Always communicative, he was always willing to find solutions to the challenges of development.",
  },
  {
    name: "",
    company: "",
    testimonial:
      "",
  },
  {
    name: "",
    company: "",
    testimonial:
      "",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-tertiary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-primarySolid">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="mb-4 text-gray-600 italic">{testimonial.testimonial}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
