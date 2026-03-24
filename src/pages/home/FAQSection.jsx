import React, { useState } from "react";

const faqs = [
  {
    question: "Isn’t meditation for people above 60 years?",
    answer: `If you look at the benefits that meditation brings in our life, you will find that it is all the more relevant. In ancient times, meditation was used as a way for finding the Self, for enlightenment. Meditation was a way to overcome misery and problems. It was the way to develop one’s abilities.

If you want, keep aside enlightenment. Today’s stress and tension in society calls for meditation. If you take more responsibility, more meditation is required. Greater responsibilities and ambitions you have, greater is the need for you to meditate.

If you have nothing to do, you may not need meditation as much.The busier you are, the lesser time you have, the more desires and ambitions you have - all the more is the need to meditate. Because meditation not only relieves you of stress and strain, it also enhances your abilities, strengthens your nervous system and mind. Not only does it help eliminate stress and tensions, releasing toxins from the body and soothing the mind, it also makes you more capable, enhances you in every way. What else do you want? If you want to be happy and healthy, you’ve got to meditate!`,
    color: "bg-[#e9c7bd]",
  },
  {
    question: "I'm not flexible enough",
    answer: `You don't need to be able to stand on your head to be able to get the benefit of the courses offered by the Art of Living!

The breathing techniques and meditation techniques taught in our programs do not need any special physical skills and are practiced by millions of people around the world from the ages of five to ninety!`,
    color: "bg-[#e8caa7]",
  },
  {
    question: "I am busy now",
    answer: `You are busy now, but when will you be happy? Joy is found only in the present moment. Yet usually we find the mind swinging back and forth between the past and the future. We feel regretful or angry about something that has happened to us, or we worry about the way things will turn out. Observe your mind.
 
If you notice, you postpone the good things but never postpone negative things. You never say, "I will postpone my anger, do you?"
 
You postpone your happiness until some perfect future date, but it never arrives. If you live life now, tomorrow will take care of itself. This is the Art of Living.`,
    color: "bg-[#e5e0d6]",
  },
  {
    question: "Who created these programs?",
    answer: `Sudarshan Kriya™ came into being in 1982 in Shimoga, India when Gurudev Sri Sri Ravi Shankar, now a global humanitarian and a spiritual leader across the world, went into a ten-day period of silence. In his words: 

“I had already traveled around the world. I had taught yoga and meditation. But still, I was concerned about how to help people live a happy life. I felt there was something that was lacking. Though people do their practices, their life is in compartments when they come out in life, they are very different people. So, I was thinking how we can bridge this gap between inner silence and outer expression of life.

During a ten-day period of silence, the Sudarshan KriyaTM came like an inspiration. Nature knows what to give and when to give. After I came out of the silence, I started teaching whatever I knew and people had great experiences.”
~ Gurudev Sri Sri Ravi Shankar

Since then, Sudarshan KriyaTM - the powerful, rhythmic breathing technique has been the cornerstone of all Art of Living programs. The first program was taught by Sri Sri Ravi Shankar at Shimoga. Sri Sri Ravi Shankar has made ancient wisdom very practical to modern day and has introduced yoga, pranayamas, and meditation into the daily lives of millions over the last four decades.`,
    color: "bg-[#efe2c6]",
  },
  {
    question: "How soon will I start seeing results?",
    answer: `The cornerstone of the Art of Living courses is a technique called "Sudarshan KriyaTM". Sudarshan means the right vision of who I am.“Kriya” means purifying action. It produces a deep calm in the mind while every cell in the body becomes enlivened with energy. This cleansing process powerfully dissolves stress. In one hour’s time, after the very first practice, you will see how the energy, the mind, and oxygen penetrate deep into every cell of your body and cleanse you on a very deep level. Every cell of your body gets cleansed, energized, and more oxidized.
 
Have you ever wondered how does a negative thought arise? If you attend to the source of negative thought you will realize that they come because of tension and stress. A relaxed, happy person will not get negative thoughts. You see? The more miserable one is, the more negative thoughts come. Instead of rubbing the mind with a positive thought, go deep into yourself, through the breath, through meditation, and cleanse the system. Go to the root of it, eliminate the cause, the very root of negativity. It doesn’t take a long time. Especially with the Sudarshan KriyaTM, it’s so immediate. Just two days of practice, one hour each day, cleanses the body so much, makes you feel so light. `,
    color: "bg-[#efe2c6]",
  },
  {
    question: "Why do you charge fees?",
    answer: `The Art of Living Courses are not expensive.  There are expenses when courses are organized. The volunteers have to rent a hall, get supplies. So a percent of the course contribution is spent on course expenses. Remaining funds go to support service projects all over India.

Also, if you offer the course free, people don’t value it. People don’t take responsibility to sit and learn. `,
    color: "bg-[#e8caa7]",
  },
];

const FAQSection = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#f3f3f3] py-16 px-4 md:px-10 lg:px-20">
      
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        I want to join a program but...
      </h2>

      {/* Chips */}
      <div className="flex flex-wrap gap-4">
        {faqs.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(item)}
            className={`px-5 py-3 rounded-full shadow-md text-sm md:text-base transition hover:scale-105 ${item.color}`}
          >
            {item.question}
          </button>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          
          <div className="bg-white max-w-3xl w-full rounded-2xl p-6 md:p-8 relative shadow-xl animate-fadeIn">
            
            {/* Close Button */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>

            {/* Title */}
            <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">
              {active.question}
            </h3>

            {/* Content */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {active.answer}
            </p>

          </div>
        </div>
      )}
    </section>
  );
};

export default FAQSection;