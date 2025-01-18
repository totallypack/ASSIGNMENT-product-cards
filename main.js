const potions = [
  {
    id: 1,
    name: "Healing",
    color: "Red",
    atribute: "Heals 3d4 HP",
    cost: "20s",
    status: "available",
    size: "small",
    soldOut: false,
    weight: ".25 lb",
    expiration: "3 yrs",
    bulkOne: "2g for 10",
    bulkTwo: "10g for 50",
    bulkThree: "20g for 100",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39da6277-d7e8-4885-9cd8-12328bbe53a9/dgccht3-4973c924-547b-4112-a325-23cbf06a8bf6.png/v1/fit/w_800,h_800/health_potion_by_trulymalicious_dgccht3-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvMzlkYTYyNzctZDdlOC00ODg1LTljZDgtMTIzMjhiYmU1M2E5XC9kZ2NjaHQzLTQ5NzNjOTI0LTU0N2ItNDExMi1hMzI1LTIzY2JmMDZhOGJmNi5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qEbhrH09b5fRmsjaP4xsiEnhRlD0vc8b-aMIQxMgl4g",
  },
  {
      id: 2,
    name: "Giant's Strength",
    color: "Yellow",
    atribute: "Str +3",
    cost: "3g",
    status: "available",
    soldOut: false,
    size: "xlarge",
    weight: "1 lb",
    expiration: "150 days",
    bulkOne: "30g for 10",
    bulkTwo: "150g for 50",
    bulkThree: "300g for 100",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39da6277-d7e8-4885-9cd8-12328bbe53a9/dgccia8-ad926cc3-6e4c-4677-bc05-185a13c73714.png/v1/fit/w_800,h_800/resurrection_potion_by_trulymalicious_dgccia8-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvMzlkYTYyNzctZDdlOC00ODg1LTljZDgtMTIzMjhiYmU1M2E5XC9kZ2NjaWE4LWFkOTI2Y2MzLTZlNGMtNDY3Ny1iYzA1LTE4NWExM2M3MzcxNC5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Oxssg7NY4UzgsnaS1ff3qWxFgWJQmMGz1ndNhx8voOw",
  },
  {
    id: 3,
    name: "Antidote",
    color: "Green",
    atribute: "Cures poison",
    cost: "10s",
    status: "available",
    soldOut: false,
    size: "small",
    weight: ".25 lb",
    expiration: "500 days",
    bulkOne: "1g for 10",
    bulkTwo: "5g for 50",
    bulkThree: "10g for 100",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39da6277-d7e8-4885-9cd8-12328bbe53a9/dgcch92-01feec49-2720-4c55-9862-a081f2dfddf6.png/v1/fit/w_800,h_800/antidote_by_trulymalicious_dgcch92-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvMzlkYTYyNzctZDdlOC00ODg1LTljZDgtMTIzMjhiYmU1M2E5XC9kZ2NjaDkyLTAxZmVlYzQ5LTI3MjAtNGM1NS05ODYyLWEwODFmMmRmZGRmNi5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Q2npQ3b65_K_6hgUs0zMXk0LtcV2cDtH0Hs0JKKAce4"
  },
  {
    id: 4,
    name: "Invisibility",
    color: "Silver",
    atribute: "Makes you invisible for 3d8 mins",
    cost: "2g",
    status: "available",
    soldOut: false,
    size: "medium",
    weight: ".5 lbs",
    expiration: "1 year",
    bulkOne: "20g for 10",
    bulkTwo: "100g for 50",
    bulkThree: "200g for 100",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39da6277-d7e8-4885-9cd8-12328bbe53a9/dgcck9o-8020d193-9c00-4470-877a-28351a3dbe43.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5ZGE2Mjc3LWQ3ZTgtNDg4NS05Y2Q4LTEyMzI4YmJlNTNhOVwvZGdjY2s5by04MDIwZDE5My05YzAwLTQ0NzAtODc3YS0yODM1MWEzZGJlNDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5Iv_Qs_vuB6_FHhmvKM5hHuvBkwANTrLtnCBZ-PK9qE"
  },
  {
    id: 5,
    name: "Water Breathing",
    color: "Blue",
    atribute: "You can breath underwater for 1d4 hrs",
    cost: "2g",
    status: "available",
    soldOut: false,
    size: "medium",
    weight: ".5 lbs",
    expiration: "100 days",
    bulkOne: "20g for 10",
    bulkTwo: "100g for 50",
    bulkThree: "200g for 100",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39da6277-d7e8-4885-9cd8-12328bbe53a9/dgcciij-4be6f06d-5085-4738-862d-2c19c5461d67.png/v1/fit/w_800,h_800/water_potion_by_trulymalicious_dgcciij-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvMzlkYTYyNzctZDdlOC00ODg1LTljZDgtMTIzMjhiYmU1M2E5XC9kZ2NjaWlqLTRiZTZmMDZkLTUwODUtNDczOC04NjJkLTJjMTljNTQ2MWQ2Ny5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.IDrQFownqHeqyx-l5Eyu3Hp6gXA5JpTxRDKP3qyuuJw"
  },
  {
    id: 6,
    name: "Longevity",
    color: "Black",
    atribute: "Your physical age is reduced by 1d6 + 6 years",
    cost: "10p",
    status: "unavailable",
    soldOut: true,
    size: "large",
    weight: ".75 lbs",
    expiration: "never",
    bulkOne: "100p for 10",
    bulkTwo: "500p for 50",
    bulkThree: "1000p for 100",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39da6277-d7e8-4885-9cd8-12328bbe53a9/dgcchh1-3df55e54-d83f-405c-815a-73bc59b86ee3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5ZGE2Mjc3LWQ3ZTgtNDg4NS05Y2Q4LTEyMzI4YmJlNTNhOVwvZGdjY2hoMS0zZGY1NWU1NC1kODNmLTQwNWMtODE1YS03M2JjNTliODZlZTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WuiKGeXQCUF2y0Om_RQ6Ckf9P6bpxAFm9k4hrVaohPA"
  }
];

const appEl = document.querySelector(".app");
const cardEl = document.querySelector(".card");

let domString = "";
for (const potion of potions) {
  domString += 
  `<div class="card border-secondary mb-3" style="width: 18rem;">
    <header class='card-title'>
      <h2>${potion.name}</h2>
    </header>
    <img src=${potion.imageUrl} class="card-img-top" alt=${potion.name}>
    <p class="card-at">${potion.atribute}</p>
    <div>
    <div class="info">
        <p class="card-text">${potion.size}</p>
        <p class="card-text">${potion.weight}</p>
        <p class="card-text">${potion.status}</p>
      </div>
      <div>
        <header>Price: ${potion.cost}</header>
        <p class="card-price">${potion.bulkOne}</p>
        <p class="card-price">${potion.bulkTwo}</p>
        <p class="card-price">${potion.bulkThree}</p>
      </div>
      <footer>Good for - ${potion.expiration}</footer>
    </div>
  </div>`;

  domString += "";
  cardEl.innerHTML = domString;
};

function soldOut() {
  destinations.forEach((potions) => {
    if (potions.soldOut = true) {
      const cardElement = document.querySelector(`.card${potions}`);
      if (cardElement) {
        const overlay = document.createElement("img");
        overlay.src =
          "https://www.dropbox.com/scl/fi/j4x0beu6zmacu1cnzs04l/soldOut.png?rlkey=uskvc7vng39s9q03uwiyaqj7h&st=acg6bhh7&raw=1";
        overlay.alt = "Sold Out";
        overlay.classList.add("sold-out-overlay");

        cardElement.appendChild(overlay);
      }
    }
  });
}
