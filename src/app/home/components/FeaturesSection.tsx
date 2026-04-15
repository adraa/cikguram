import React from 'react';
import Image from 'next/image';

/** Photo-led feature cards: image, title, body, footer callout */
const features = [
  {
    imageSrc:
      'https://images.pexels.com/photos/11110472/pexels-photo-11110472.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'White passenger van parked at a curb with side door open, ready for pick-up',
    title: 'Free Transport, Every Session',
    description:
      'Pick-up and drop-off for every training session and JPJ test. No car, no problem. Just show up ready to learn.',
    footer: 'Door-to-door · every session & test',
    footerTone: 'red' as const,
    accent: 'border-t-[#CC0000]',
  },
  {
    imageSrc: '/pricing-students.webp',
    imageAlt: 'Group of smiling students holding Malaysian P plates in front of a training vehicle',
    title: 'JPJ Test Ready, Guaranteed',
    description:
      'A full pre-test evaluation before you sit the real JPJ test. We only send you when you are ready to pass.',
    footer: 'Pre-test evaluation before every booking',
    footerTone: 'neutral' as const,
    accent: 'border-t-[#111111]',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Students seated at desks in a classroom with laptops, collaborative learning environment',
    title: 'Theory Training (KPP)',
    description:
      '6-hour KPP01 course covering Malaysian road laws, signs, and safety regulations.',
    footer: '6-hour KPP01 · materials included',
    footerTone: 'red' as const,
    accent: 'border-t-[#CC0000]',
  },
  {
    imageSrc: '/stats-bg-1.jpg',
    imageAlt: 'Driving school training scene on a closed circuit with vehicles and road markings',
    title: 'Circuit & Road Training',
    description:
      'KPP02 circuit and KPP03 real-road sessions covering parking, hill starts, and traffic.',
    footer: 'KPP02 + KPP03 · circuit & road',
    footerTone: 'neutral' as const,
    accent: 'border-t-[#111111]',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1503376780353-7e669276fa82?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Performance car on an open track suggesting focused practice and flexible scheduling',
    title: 'Flexible Schedule',
    description: 'Weekday and weekend slots. We work around your school or work timetable.',
    footer: 'Weekdays, weekends & evenings',
    footerTone: 'gold' as const,
    accent: 'border-t-[#C9A020]',
  },
  {
    imageSrc: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e87b8662-1772196926946.png',
    imageAlt: 'Professional driving instructor in polo shirt, confident posture, neutral studio background',
    title: 'All Paperwork Handled',
    description:
      'JPJ registration, LDL application, test booking: every form and fee managed for you.',
    footer: 'JPJ · LDL · bookings filed for you',
    footerTone: 'red' as const,
    accent: 'border-t-[#CC0000]',
  },
] as const;

const revealDelays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600'] as const;

function footerClass(tone: (typeof features)[number]['footerTone']) {
  if (tone === 'red') return 'text-[#CC0000]';
  if (tone === 'gold') return 'text-[#7D6008]';
  return 'text-[#111111]';
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-[#F8F8F6] py-16 sm:py-24">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 text-center reveal sm:mb-10">
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-[1.15] mb-4">
            Everything You Need Until You Pass
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className={`reveal light-card flex h-full flex-col overflow-hidden rounded-2xl border-t-4 ${feature.accent} ${revealDelays[i] ?? 'delay-100'}`}
            >
              <div className="relative aspect-[16/10] w-full shrink-0 bg-black/5">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="mb-3 font-display font-700 text-lg tracking-tight text-[#111111] sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-black/65 sm:text-[15px]">
                  {feature.description}
                </p>

                <div className="mt-auto border-t border-black/8 pt-4">
                  <p
                    className={`font-display text-[15px] font-700 leading-snug tracking-tight sm:text-base ${footerClass(feature.footerTone)}`}
                  >
                    {feature.footer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
