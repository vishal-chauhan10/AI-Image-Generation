export const imagePrompts = [
  // Nature Scenes
  "aerial view of rolling green hills at sunset with long shadows",
  "misty mountain peaks at dawn with pink and orange sky",
  "tropical beach with turquoise water and white sand",
  "dense autumn forest with red and golden leaves",
  "desert sand dunes under a starry night sky",
  "cascading waterfall in a lush rainforest",
  "snow-capped mountains reflecting in a crystal clear lake",
  "cherry blossom trees in full bloom along a path",
  "northern lights dancing over a frozen lake",
  "fields of lavender stretching to the horizon",

  // Urban Scenes
  "modern city skyline at blue hour with lights reflecting in water",
  "narrow cobblestone street in an old European town",
  "futuristic cityscape with flying vehicles and neon lights",
  "busy night market with lanterns and food stalls",
  "ancient temple ruins overgrown with vegetation",
  "colorful houses along a canal in Venice",
  "traditional Japanese garden with koi pond and red bridge",
  "bustling Times Square at night with billboards",
  "peaceful Zen garden with raked sand patterns",
  "street art mural covering an entire building wall",

  // Abstract Concepts
  "swirling galaxy of vibrant colors in space",
  "geometric patterns forming a kaleidoscope effect",
  "liquid metal flowing in abstract patterns",
  "fractals forming intricate mathematical patterns",
  "cosmic nebula with stars and gas clouds",
  "abstract waves of light and color",
  "digital glitch art with neon colors",
  "3D geometric shapes floating in void",
  "psychedelic mandala pattern",
  "flowing ribbons of light in darkness",

  // Wildlife
  "herd of elephants crossing African savanna at sunset",
  "colorful macaws flying over rainforest canopy",
  "pod of dolphins jumping in ocean waves",
  "tiger walking through misty bamboo forest",
  "polar bears on floating ice in arctic sea",
  "peacock displaying colorful feathers",
  "monarch butterflies covering tree branches",
  "penguins waddling on Antarctic ice",
  "hummingbird hovering near exotic flower",
  "wolves howling at full moon in winter forest",

  // Weather Phenomena
  "lightning storm over city skyline",
  "double rainbow after rain in green valley",
  "tornado forming in dramatic storm clouds",
  "morning fog rolling through mountain valley",
  "sun rays breaking through storm clouds",
  "snowstorm in mountain landscape",
  "desert dust storm approaching",
  "mammatus clouds at sunset",
  "hurricane eye view from space",
  "frost patterns on window pane",

  // Underwater Scenes
  "coral reef teeming with colorful fish",
  "giant whale swimming in deep blue ocean",
  "bioluminescent organisms in dark water",
  "underwater cave with light beams",
  "jellyfish floating in dark blue water",
  "sea turtle swimming over coral reef",
  "shipwreck covered in coral and fish",
  "octopus changing colors on reef",
  "school of fish forming spiral pattern",
  "deep sea creatures near hydrothermal vent",

  // Seasonal Scenes
  "spring meadow full of wildflowers",
  "summer beach sunset with palm trees",
  "autumn park with falling leaves",
  "winter forest covered in fresh snow",
  "cherry blossoms falling like pink snow",
  "harvest fields at golden hour",
  "first snow falling in city park",
  "spring rain on blooming flowers",
  "summer thunderstorm over wheat field",
  "autumn mist in morning forest",

  // Architecture
  "ancient pyramid in Egyptian desert",
  "Gothic cathedral with stained glass windows",
  "floating city with impossible architecture",
  "traditional Chinese pagoda in misty mountains",
  "modern glass skyscraper reflecting clouds",
  "Santorini white buildings at sunset",
  "Taj Mahal reflecting in water pools",
  "futuristic space station interior",
  "underwater city in glass domes",
  "treehouse village connected by bridges",

  // Fantasy Scenes
  "floating islands with waterfalls",
  "crystal cave with glowing minerals",
  "magical forest with glowing mushrooms",
  "dragon flying over mountain castle",
  "portal opening between worlds",
  "fairy tree house in enchanted forest",
  "phoenix rising from flames",
  "unicorn in mystical meadow",
  "ancient magical library",
  "steampunk city with airships"
];

export const getRandomPrompt = (): string => {
  return imagePrompts[Math.floor(Math.random() * imagePrompts.length)];
}; 