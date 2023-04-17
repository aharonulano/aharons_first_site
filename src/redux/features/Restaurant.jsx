const restaurants = [
    {
      id: 1,
      name: "La Petite France",
      city: "Paris",
      price: "2",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB27fFqa4_iLMmlJCLtzJNOZReSIP-802FbRrvuoYI2g&s",
      cuisine: "French",
      images: [],
      description:
        "La Petite France is a charming French bistro located in the heart of Paris. We offer classic French dishes made with fresh, local ingredients.",
    },
    {
      id: 2,
      name: "Pizzeria Da Michele",
      city: "Naples",
      price: "3",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcATg0-GHAm-miPGg3YyefUeekpVnK1_tEpNw9GMZShQ&s",
      cuisine: "Italian",
      images: [],
      description:
        "Pizzeria Da Michele is a legendary Neapolitan pizzeria that has been serving up some of the best pizza in Naples since 1870.",
    },
    {
      id: 3,
      name: "Korean BBQ House",
      city: "Los Angeles",
      price: "2",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6DP7i9Sv6MUIL9NQ01GT66t6of4vW-YFspWnFEUjSA&s",
      cuisine: "Korean",
      images: [],
      description:
        "Korean BBQ House is a family-owned restaurant that offers authentic Korean BBQ in a cozy and welcoming atmosphere.",
    },
    {
      id: 4,
      name: "El Pastor",
      city: "London",
      price: "1",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9x0MK63AWAEiQ5EWh3yOpIXw6d57iI96PIg&usqp=CAU",
      cuisine: "Mexican",
      images: [],
      description:
        "El Pastor is a taqueria that specializes in tacos al pastor, a delicious and popular street food in Mexico City.",
    },
    {
      id: 5,
      name: "The Fat Duck",
      city: "Bray",
      price: "4",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkUfPpu4SUozTPfhQtZULJMV0UPAW-d0swg&usqp=CAU",
      images: [],
      description:
        "The Fat Duck is a Michelin-starred restaurant that offers innovative and whimsical dishes that are sure to delight your taste buds.",
    },
    {
      id: 6,
      name: "Sushi Nakazawa",
      city: "New York",
      price: "4",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEYP_AiartE8jGFHC6Pw0EM_0S61FniQLRA&usqp=CAU",
      images: [],
      description:
        "Sushi Nakazawa is a sushi restaurant that offers some of the best sushi in New York City. Our omakase menu is a must-try for any sushi lover.",
    },
    {
      id: 7,
      name: "Le Pain Quotidien",
      city: "Paris",
      price: "3",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTagu7TUofUOqcTVQyhOsk49_T3HjcxKzo_HA&usqp=CAU",
      cuisine: "French",
      images: [],
      description:
        "Le Pain Quotidien is a cozy bakery that offers fresh-baked bread and pastries as well as light breakfast and lunch options.",
    },
    {
      id: 8,
      name: "Shake Shack",
      city: "New York",
      price: "3",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMluqMkKdzx_81FCRiaWsryIgYutuy2G8Dg&usqp=CAU",
      cuisine: "American",
      images: [],
      description:
        "Shake Shack is a fast-casual restaurant that offers delicious burgers, fries, and milkshakes in a fun and relaxed atmosphere.",
    },
    {
      id: 9,
      name: "Ristorante Da Valentino",
      city: "Rome",
      price: "2",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0W3bomdv1d9r6iZRBB46w9EeyBeFfoqfEUQ&usqp=CAU",
      cuisine: "Italian",
      images: [],
      description:
        "Ristorante Da Valentino is a cozy Italian restaurant that offers traditional dishes made with fresh and locally-sourced ingredients.",
    },
    {
      id: 10,
      name: "Matsuhisa",
      city: "Beverly Hills",
      price: "1",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu75YC7ungED7_PaDaIrXeDFsme44H-YiBWGSgQpMUWLwqndBR8cORt9moPlbbc91IuaU&usqp=CAU",
      cuisine: "Japanese",
      images: [],
      description:
        "Matsuhisa is a high-end Japanese restaurant that offers exquisite sushi and other Japanese dishes made with the finest ingredients.",
    },
    {
      id: 11,
      name: "Gaggan",
      city: "Bangkok",
      price: "1",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnPF3yAYtoWYnlPa2TycKn_lhuH4N6J34xYubbFYF6JPCI6yf22-VTSWMvdVVEmm1YlA&usqp=CAU",
      cuisine: "Progressive Indian",
      images: [],
      description:
        "Gaggan is a world-renowned restaurant that offers innovative and creative dishes inspired by Indian cuisine.",
    },
    {
      id: 12,
      name: "Nobu",
      city: "Malibu",
      price: "2",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvU2DwtN7K18BJis4l8uE6pgPz0K0i9o-z2A&usqp=CAU",
      cuisine: "Japanese",
      images: [],
      description:
        "Nobu is a high-end Japanese restaurant that offers delicious sushi and other Japanese dishes in a stunning oceanfront setting.",
    },
    {
      id: 13,
      name: "La Cantine du Faubourg",
      city: "Dubai",
      price: "3",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nLi56WcjoMN_Eyvk1Zy3sF8oBQsobrrVMg&usqp=CAU",
      cuisine: "French",
      images: [],
      description:
        "La Cantine du Faubourg is a chic French restaurant that offers classic French dishes as well as international options in a trendy and stylish setting.",
    },
    {
      id: 14,
      name: "Momofuku Noodle Bar",
      city: "New York",
      price: "3",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTptursIehQoIpeWbz86wd7kAOcIJRKS5IjQ&usqp=CAU",
      cuisine: "Asian Fusion",
      images: [],
      description:
        "Momofuku Noodle Bar is a casual Asian fusion restaurant that offers delicious noodles, buns, and other Asian-inspired dishes in a fun and lively atmosphere.",
    },
    {
      id: 15,
      name: "Osteria Francescana",
      city: "Modena",
      price: "4",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_uHkfajlmlfMJP7zAOWbckGui7D54ufLtg&usqp=CAU",
      cuisine: "Modern Italian",
      images: [],
      description:
        "Osteria Francescana is a three-Michelin-starred restaurant that offers innovative and creative dishes inspired by Italian cuisine.",
    },
    {
      id: 16,
      name: "Dinner by Heston Blumenthal",
      city: "London",
      price: "3",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgc5dX587Hkq9pgEtbkUagcbJ4qvIdfOdeFg&usqp=CAU",
      cuisine: "Modern British",
      images: [],
      description:
        "Dinner by Heston Blumenthal is a Michelin-starred restaurant that offers modern and innovative dishes inspired by British cuisine and history.",
    },
    {
      id: 17,
      name: "Katz's Delicatessen",
      city: "New York",
      price: "4",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy61p3RbhlsVOb1vlEaiBdTCGjs_h0PEHiA&usqp=CAU",
      cuisine: "Jewish-American",
      images: [],
      description:
        "Katz's Delicatessen is a famous Jewish-American deli that offers a variety of classic deli sandwiches, smoked meats, and other Jewish comfort foods in a casual and bustling atmosphere.",
    },
    {
      id: 18,
      name: "Le Pain Quotidien",
      city: "Brussels",
      price: "2",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Z00OmesRDRX2gJD7THx0AtwMD1-HxSPWzw&usqp=CAU",
      cuisine: "Belgian",
      images: [],
      description:
        "Le Pain Quotidien is a Belgian bakery and café that offers delicious bread, pastries, and other baked goods, as well as coffee and light meals.",
    },
    {
      id: 19,
      name: "Haidilao Hot Pot",
      city: "Beijing",
      price: "4",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwq1ojoRp7AtrxW0TwsB-791DGBXrXN3aXA&usqp=CAU",
      cuisine: "Chinese",
      images: [],
      description:
        "Haidilao Hot Pot is a popular Chinese chain restaurant that offers delicious and customizable hot pot dishes in a fun and interactive setting.",
    },
    {
      id: 20,
      name: "Pujol",
      city: "Mexico City",
      price: "3",
      main_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2j6WV9qVtosEikAaQkVtiV6HsLgA9L-o8fg&usqp=CAU",
      cuisine: "Mexican",
      images: [],
      description:
        "Pujol is a world-renowned restaurant that offers innovative and modern Mexican dishes made with fresh and locally-sourced ingredients.",
    }
  ];
 export default restaurants;