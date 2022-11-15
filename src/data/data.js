import people from "../assets/people.svg";
import offer from "../assets/offer.svg";
import rupee from "../assets/rupee.svg";
import tag from "../assets/tag.svg";
import wallet from "../assets/wallet.svg";

export const enrolled = [
  {
    name: "Dhiraj Saxsena",
    date: "14 Sep, 2022",
    skills: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "c++",
    ],
    no_course: 6,
    referral_amount: 185,
  },
  {
    name: "Subhash Mishra",
    date: "15 Sep, 2022",
    skills: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "c++",
    ],
    no_course: 23,
    referral_amount: 485,
  },
  {
    name: "Prafull Kumar",
    date: "16 Sep, 2022",
    skills: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "c++",
    ],
    no_course: 23,
    referral_amount: 485,
  },
];

export const referEarn = [
  {
    image: people,
    heading: "Invite your friends",
    para: `Share the link tutedude.com with your friends`,
  },
  {
    image: rupee,
    heading: "You get ₹ 200 as referral money",
    para: "On total purchase the friend makes, into your wallet",
  },
  {
    image: wallet,
    heading: "Transfer money from wallet",
    para: "When the wallet balance reaches ₹200 or more, you can withdraw it",
  },
  {
    image: tag,
    heading: "Friend purchases any course",
    para: "Using your REFERRAL CODE in the payments page",
  },
  {
    image: offer,
    heading: "Your Friend gets ₹ 200 Off ",
    para: "On his overall fee on successful purchase using your referral code",
  },
];
