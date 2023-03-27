const db = require("./connection");
const Sport = require("../models/Sport");
const Team = require("../models/Team");
// const TeamMember = require("../models/TeamMember");
const User = require("../models/User");
db.once("open", async () => {
  await Team.deleteMany();
  // await TeamMember.deleteMany();

  await Sport.deleteMany();

  await Sport.insertMany([
    { name: "Hockey" },
    { name: "Swimming" },
    { name: "Basketball" },
    { name: "Pickleball" },
    { name: "Cross Country" },
  ]);
  console.log("Sports seeded!");

  await User.deleteMany();

  await User.insertMany([
    {
      username: "BillyBob",
      state: "FL",
      zip: 33701,
      city: "Saint Petersburg",
      email: "iceyman@gmail.com",
      password: "coolcoolcool23",
    },
    {
      username: "tacos4life",
      state: "FL",
      zip: 34203,
      city: "Bradenton",
      email: "hotsauce34@yahoo.com",
      password: "spiceSpicebby!09",
    },
    {
      username: "tallGrandeVENTI",
      state: "FL",
      zip: 33592,
      city: "Tampa",
      email: "starbucksislyfe@gmail.com",
      password: "ilikecoffee!243",
    },
    {
      username: "imthemanager",
      state: "FL",
      zip: 33592,
      city: "Tampa",
      email: "karen808@gmail.com",
      password: "liveLaughlove420",
    },
  ]);
  console.log("Users seeded!");
  process.exit();
});
