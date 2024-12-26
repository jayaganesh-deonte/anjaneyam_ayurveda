const Doctors = [
  {
    id: 0,
    name: "Dr. M.MANOGAR",
    qal: "BAMS",
    des: "Chief Physician",
    src: require("@/assets/doctors/manohar.jpeg"),
    text: [
      "Insightful young man with inclination to bring in not just physical health but also spiritual health in the society.",
      "An alumnus of Sri Jayendra Saraswati Ayurvedic College and Hospital,he took one year of intense training under Dr.Sanal Chandran at Anjaneyam Ayurveda Hospital, Payyanur before starting a clinic of his own at Kumbakonam.",
      "Dr.Manogar with his healing hand has been practicing for the past 11 years in Kumbakonam and has gained a high reputation among the people in and around Kumbakonam.",
      "He also gives talks and lectures about Ayurveda to a vast audience from different walks of life.",
      "To him ayurveda is not just diagnosing patients and giving medicines, Ayurveda is a way of life that helps each soul reach its destination with the help of this body as the fittest instrument.",
    ],
    visiting: [
      {
        loc: "Kumbakonam",
        time: "Outpatient- 10:00AM-1:30PM",
      },
      {
        loc: "Inam kiliyur",
        time: "In patient- 6:00PM-8:00PM",
      },
      {
        loc: "Chennai",
        time: "1st Sunday- Mangadu, Chennai 10:00AM -2:00PM",
      },
    ],
  },
  {
    id: 1,
    name: "Dr. JAYASRI MANOGAR",
    qal: "BHMS",
    des: "Homeopathic Doctor",
    src: require("@/assets/doctors/JayasriManogar.jpeg"),
    text: [
      "Wife of Dr.M.Manogar, she is a Classical Homeopathic Practitioner with her unique and simple patient handling techniques",
      "She is a meritorious alumnus of Government Homeopathy Medical College, Madurai.",
      "She has been practicing in Anjaneyam for the past four years. She focuses and Gynecology and Toxicology. ",
    ],
    visiting: [
      {
        loc: "Kumbakonam",
        time: "4:30PM-7:00PM",
      },
    ],
  },
  {
    id: 2,
    name: "Dr. R.KESHAV RAM",
    qal: "BAMS",
    des: "Diabetes Management",
    src: require("@/assets/doctors/keshav.jpeg"),
    text: [
      "Dynamic young Ayurveda practitioner with a distinctive approach towards the patient and the disease",
      "He is an alumnus of Sri Jayendra Saraswati Ayurveda College and Hospital. He has been practicing in Anjaneyam for the past 3 years. ",
    ],
    visiting: [
      {
        loc: "Inamkiliyur",
        time: "In Patient -10:00AM -1:00PM ",
      },
      {
        loc: "Selvam Medicals Kumbakonam",
        time: "Out Patient - 6:30PM-8:30PM",
      },
      {
        loc: "Chennai",
        time: "3rd Sunday 10:00AM-2:00PM",
      },
      {
        loc: "Mangadu ",
        time: "2nd Sunday 10:00AM-2:00PM",
      },
    ],
    Specialisation: [
      "Diabetes Mellitus",
      "Thyroid Gland Dysfunction",
      "Harmonal Imbalances",
      "Kshara Sutram",
      "Wound Management",
    ],
  },
  {
    id: 3,
    name: "Dr. K.MANISUNDAR",
    qal: "BNYS",
    des: "Yoga and Diet",
    src: require("@/assets/doctors/manisundar.jpg"),
    text: [
      "Compassionate young Naturopathy and Yoga practitioner",
      "He is an alumnus of Sri Ramakrishna Naturopathy College, Nagercoil.",
      "He has done his internship from various hospitals in and around Tamil Nadu.",
    ],
    visiting: [
      {
        loc: "Inamkiliyur",
        time: "In Patient -10:00AM -1:00PM ",
      },
      {
        loc: "Kumbakonam",
        time: `Surya Naturopathy Clinic,
Swaminathan Nagar, Palakarai, Kumbakonam 612001`,
      },
    ],
    Specialisation: ["Yoga", "Naturopathy", "Diet modifications"],
  },
  {
    id: 4,
    name: "Dr Shivayogam",
    qal: "BAMS",
    des: "",
    src: require("@/assets/doctors/Shivayogam.jpg"),
    text: [
      `Dr. Shivayogam, BAMS, is a dedicated Ayurvedic practitioner who completed her studies at Sankara Ayurveda College, Trichy. She has been an integral part of Sri Anjaneyam Ayurveda Vaidyasala since 2023. She also is involved in many social activities along with her practise.`,
    ],
    Specialisation: [],
    visiting: [
      {
        loc: "Inamkiliyur",
        time: "Monday to Saturday 10:30AM- 02:00PM",
      },
      {
        loc: "Chakrapani North street, Kumbakonam",
        time: "Free consultation on every Thursday - 5 pm to 6.30 pm At 13/1D, Chakrapani North street, Kumbakonam",
      },
    ],
  },
];

export { Doctors };
