import type { DisplayReview } from '@/types/display-review';

const ACCENTS: DisplayReview['accentColor'][] = [
  'border-t-[#CC0000]',
  'border-t-[#1A7A3C]',
  'border-t-[#C9A020]',
  'border-t-[#111111]',
];

/** Real Google Maps reviews, newest first. Avatars: initials in UI (no image URLs). */
export const GOOGLE_REVIEWS_STATIC: DisplayReview[] = [
  {
    id: 'google-salwa',
    name: 'salwa suandi',
    location: 'Google review',
    avatar: '',
    avatarAlt: 'Google reviewer salwa suandi',
    rating: 5,
    text: `Alhamdulillah, I passed my JPJ test last Thursday! I even had to request an extra class the day before because I'd forgotten all the tips my instructor shared 😂

Overall, I'm really satisfied as my instructor was incredibly kind and generous in sharing helpful tips to pass. For anyone planning to get your license, I highly recommend learning with Cikgu Ram. He's very patient, even with "wayar putus" students like me 😆 TQ cikgu. Jasamu dikenang.`,
    license: 'Google Maps',
    duration: 'a week ago',
    accentColor: ACCENTS[0],
  },
  {
    id: 'google-nur-aini',
    name: 'Nur Aini Sofiya Muhd Fauzi',
    location: 'Google review',
    avatar: '',
    avatarAlt: 'Google reviewer Nur Aini Sofiya Muhd Fauzi',
    rating: 5,
    text: `Highly recommended!
I took my driving license at Westport Driving and honestly, memang the best.
Special thanks to Cg Ram — very patient, sporting, and teaches in a way that is very easy to understand, senang catch. Learning with him is never boring, he's cheerful and always gives good vibes.
Only a short time in class, Qti tahu-tahu dah JPJ — cepat dan mudah!
I passed my JPJ test and I'm very satisfied with the service.
Thank you so much to Cg Ram and all the instructors! 🙏😊
Wishing Westport Driving all the best and hope it continues to grow and succeed! 🌟
Even though it's a bit far from home, it's really recommended — I don't regret coming here at all! 👍`,
    license: 'Google Maps',
    duration: 'a month ago',
    accentColor: ACCENTS[1],
  },
  {
    id: 'google-james-brown',
    name: 'James Brown',
    location: 'Google review',
    avatar: '',
    avatarAlt: 'Google reviewer James Brown',
    rating: 5,
    text: `I'm a foreigner from the UK with 20 years driving experience but needed to go through the Malaysian driving lesson process to get a Malaysian licence. I initially signed up with a driving school in KL (Safety Driving Centre PJ) but they, along with all the schools in KL, make the process deliberately long winded by limiting the number of lessons you can book in a week. So I looked elsewhere and came across Ram. He made the process very easy and I was able to complete all lessons and pass my QTI in just 4 days spread over 2 weeks. I then had my JPJ test 2 weeks later. So in total the process took me 4 weeks compared to the months it would have taken in KL. So for any other foreigners in a similar situation to me looking to get their licence quickly, I would say it's well worth the extra time it takes to drive out to Bukit Rotan given how much quicker it makes the whole process. Thank you Ram!`,
    license: 'Google Maps',
    duration: 'a month ago',
    accentColor: ACCENTS[2],
  },
  {
    id: 'google-syahril',
    name: 'Syahril Jalil',
    location: 'Google review',
    avatar: '',
    avatarAlt: 'Google reviewer Syahril Jalil',
    rating: 5,
    text: 'Highly recommended driving instructor. Very patient, clear, and professional in teaching my son to drive a manual car. The training was well structured, and today my son successfully passed his driving test. Thank you for the excellent guidance and support.',
    license: 'Google Maps',
    duration: '2 months ago',
    accentColor: ACCENTS[3],
  },
  {
    id: 'google-maryam',
    name: 'Maryam Anisah',
    location: 'Google review',
    avatar: '',
    avatarAlt: 'Google reviewer Maryam Anisah',
    rating: 5,
    text: 'I had a great experience at this driving school. The instructor was very sporting and friendly, and the lessons were taught clearly in a simple and easy to understand way. The guidance given really helped me gain confidence while driving, and the learning process was not stressful at all. I managed to get my driving license in less than a month and passed the driving test successfully. Thank you, Cikgu Ram and team, for the great support and guidance throughout the learning process. 🚗😊',
    license: 'Google Maps',
    duration: '2 months ago',
    accentColor: ACCENTS[0],
  },
  {
    id: 'google-faizal',
    name: 'Mohd Faizal',
    location: 'Google review',
    avatar: '',
    avatarAlt: 'Google reviewer Mohd Faizal',
    rating: 5,
    text: `Mr Ram... the best instructor one could wish for their kids... well verse in teaching my daughter to pass her circuit and road test with flying colours. He is funny too when we as parents get to know him. My daughter feels comfortable, easily understand the teachings and she feels safe too under his care throughout the driving sessions. Thanks again Mr Ram... love ur tiktok posting too... "deyyy i dont want to die" 🤣🤣. May god bless u and more students under your care.`,
    license: 'Google Maps',
    duration: '2 months ago',
    accentColor: ACCENTS[1],
  },
  {
    id: 'google-ilang',
    name: 'Ilang Kathir',
    location: 'Google review',
    avatar: '',
    avatarAlt: 'Google reviewer Ilang Kathir',
    rating: 5,
    text: `I'm truly grateful to have learned driving from Cikgu Ram. He is extremely patient, professional, and knowledgeable, especially when it comes to explaining road rules and real life driving situations. His teaching style is clear and structured, and he never rushes the process. Also he make sure you understand before moving on. Even when mistakes happen, he stay calm and corrects them properly, which builds confidence instead of fear.

What sets Cikgu Ram apart is his genuine dedication to producing safe and responsible drivers, not just helping students pass the test. He shares practical tips, test-day strategies, and good driving habits that will stay with you for life. Thanks to his guidance and encouragement, I passed my driving test with confidence. I highly recommend Cikgu Ram to anyone looking for an excellent driving instructor who truly cares about his students' success.`,
    license: 'Google Maps',
    duration: '3 months ago',
    accentColor: ACCENTS[2],
  },
  {
    id: 'google-nur-fatin',
    name: 'Nur Fatin Najwa',
    location: 'Google review',
    avatar: '',
    avatarAlt: 'Google reviewer Nur Fatin Najwa',
    rating: 5,
    text: 'Cikgu Ram is a very patient, friendly, and professional driving instructor 🚗. His teaching is clear and easy to understand, and he shares plenty of useful tips to help pass the test and build confidence on the road 🚦. Every lesson felt relaxed and stress-free, making the learning experience truly enjoyable. I highly recommend Cikgu Ram to anyone who wants to learn driving in a positive and comfortable environment. ⭐⭐⭐⭐⭐',
    license: 'Google Maps',
    duration: '8 months ago',
    accentColor: ACCENTS[3],
  },
  {
    id: 'google-adam',
    name: 'Adam Aqasha',
    location: 'Google review',
    avatar: '',
    avatarAlt: 'Google reviewer Adam Aqasha',
    rating: 5,
    text: "Cikgu Ram is extremely friendly, kind, and always makes the lessons enjoyable. He explains things clearly and patiently, which makes learning to drive feel much less stressful. I'd strongly recommend him to anyone looking for a great driving instructor!",
    license: 'Google Maps',
    duration: '11 months ago',
    accentColor: ACCENTS[0],
  },
];
