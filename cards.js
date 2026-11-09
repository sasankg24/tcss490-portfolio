// Edit this file to update your artifact cards.
// Each card: number, title, status ("done" or "idea"), link (leave "" if none yet), reflection.
const CARDS = [
  {
    number: 1,
    title: "This Portfolio Site",
    status: "done",
    link: "https://sasankg24.github.io/tcss490-portfolio/",
    reflection: "The site you're looking at. I built it with help from Claude: plain HTML, CSS, and JavaScript, deployed on GitHub Pages. I learned to describe what I wanted clearly, check what the AI produced, and keep a log of my prompts. The cards live in one file so they are easy to update."
  },
  {
    number: 2,
    title: "Deadline Tracker",
    status: "done",
    link: "https://github.com/sasankg24/deadline-tracker",
    reflection: "A page that lists every upcoming deadline across my three classes, soonest first, with a countdown and urgency colors. I can check items off and add my own, like TCSS 371 assignments. It was my first build with an AI coding agent: we started from a written plan and a CLAUDE.md, committed as I went, and checked the agent's work by testing the page instead of trusting it. Live at sasankg24.github.io/deadline-tracker."
  },
  {
    number: 3,
    title: "Deadline Extractor",
    status: "done",
    link: "https://github.com/sasankg24/deadline-tracker/tree/main/tools",
    reflection: "A script that puts Claude inside my Deadline Tracker. It runs Claude Code headless to read a course page and pull out each deadline, then plain code checks every answer before saving: the quoted date has to actually be on the page, the date has to be real, and duplicates are skipped. On its first real run it added all 13 TCSS 371 deadlines from Canvas correctly. I learned to keep the model's job small and make the code distrust it, and the tests with a fake model caught a bug I would have missed."
  },
  {
    number: 4,
    title: "Daily Scoreboard",
    status: "done",
    link: "https://github.com/sasankg24/daily-scoreboard",
    reflection: "A scoreboard for my friend group's daily games (Wordle, Connections, Daily Tens, Krillion). You paste a game's share text, it reads the score, gives 2 points for a solo win or 1 each for a tie, and keeps daily winners and monthly standings that reset each month. The scoring rules came from my friends, and the parsers are tested on real shares from our group chat. I didn't find a teammate in time, so I built it on my own with Claude, but I still wrote the plan, CLAUDE.md, and a shared log so a teammate's agent could join. I learned that asking the people you build for comes first: Snapchat can't be read by other apps, which changed the whole design. Next is a shared database so each friend can submit their own results. Live at sasankg24.github.io/daily-scoreboard."
  },
  { number: 5, title: "A Better Siri", status: "idea", link: "", reflection: "A voice assistant that is more useful than Siri: one that understands what I actually mean and can get real tasks done for me." }
];
