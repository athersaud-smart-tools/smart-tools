// Single source of truth for unit-conversion categories, units and pair pages.
// Used by the /unit-converter hub, category pages, pair pages and the sitemap.
//
// PHASE 0 (2026-11-08): built for the unit-converter expansion plan
// (goal files/SmartEdgeTools-Unit-Converter-Expansion-Plan.md). These routes
// must NOT be published until the AdSense gate in that plan is passed.
//
// Factors are the exact international definitions (NIST SP 811):
// 1 inch = 0.0254 m exactly, 1 pound = 0.45359237 kg exactly,
// 1 US gallon = 3.785411784 L exactly, 1 stone = 14 lb exactly.
// Temperature is handled by formula, not by factor, because its scales
// have different zero points.

export type UnitDef = {
  id: string;
  name: string;
  plural: string;
  symbol: string;
  /** Multiply a value in this unit by toBase to get the category base unit. Unused for temperature. */
  toBase: number;
  definition: string;
  usage: string;
  caution?: string;
};

export type CategoryDef = {
  id: string;
  name: string;
  baseUnitId: string;
  intro: string;
  note: string;
  mistakes: string;
  units: UnitDef[];
};

export const categories: CategoryDef[] = [
  {
    id: "length",
    name: "Length",
    baseUnitId: "meter",
    intro:
      "Length conversions come up whenever metric and imperial measurements meet: product dimensions, room sizes, heights, distances and screen sizes. Every length unit below is defined from the meter, the SI base unit of length, so any pair can be converted accurately by going through meters first.",
    note: "The inch is defined as exactly 2.54 centimeters (international agreement, 1959), so length conversions between metric and imperial units are exact, not estimates. Area and volume factors are different: they are the length factors squared and cubed, which is why this site keeps them in their own categories.",
    mistakes:
      "The most common length mistakes are mixing up the direction of a conversion (multiplying when you should divide), confusing millimeters with centimeters, and treating a rounded mental shortcut (such as 1 inch ≈ 2.5 cm) as exact. For anything that will be cut, built or bought, use the exact factor and keep the unit written next to every number.",
    units: [
      {
        id: "millimeter",
        name: "Millimeter",
        plural: "Millimeters",
        symbol: "mm",
        toBase: 0.001,
        definition:
          "A millimeter is one thousandth of a meter, from the SI prefix milli- meaning one thousandth. It is about the thickness of a paperclip wire or the nib of a fine pen.",
        usage:
          "Millimeters are the working unit for engineering drawings, manufacturing tolerances, jewellery, and product dimensions in most of the world, because they give whole numbers where centimeters would need decimals.",
        caution: "A millimeter is a tenth of a centimeter, not a hundredth; a factor-of-ten slip is the classic millimeter mistake.",
      },
      {
        id: "centimeter",
        name: "Centimeter",
        plural: "Centimeters",
        symbol: "cm",
        toBase: 0.01,
        definition:
          "A centimeter is one hundredth of a meter, from the SI prefix centi- meaning one hundredth. There are exactly 2.54 centimeters in one inch.",
        usage:
          "Centimeters are used worldwide for body height, clothing sizes, furniture and everyday measurements in countries that have adopted the metric system.",
      },
      {
        id: "meter",
        name: "Meter",
        plural: "Meters",
        symbol: "m",
        toBase: 1,
        definition:
          "The meter is the SI base unit of length, defined by the distance light travels in a vacuum in 1/299,792,458 of a second. All other length units on this page are defined from it.",
        usage:
          "Meters are the standard for room dimensions, building plans, athletics tracks and road distances in metric countries, and the base unit scientists use everywhere.",
      },
      {
        id: "kilometer",
        name: "Kilometer",
        plural: "Kilometers",
        symbol: "km",
        toBase: 1000,
        definition:
          "A kilometer is exactly 1,000 meters, from the SI prefix kilo- meaning one thousand. It is a little over six tenths of a mile.",
        usage:
          "Kilometers measure road distances, running and cycling routes, and geography in almost every country except the United States and (for road signs) the United Kingdom.",
      },
      {
        id: "inch",
        name: "Inch",
        plural: "Inches",
        symbol: "in",
        toBase: 0.0254,
        definition:
          "An inch is a unit of length in the imperial and US customary systems, defined since 1959 as exactly 25.4 millimeters. There are 12 inches in a foot and 36 in a yard.",
        usage:
          "Inches dominate in the United States, Canada and the UK for screen sizes, paper, wood, pipe diameters and personal height, and appear worldwide in electronics specifications.",
        caution: "Historically the inch varied by country; the modern inch is the international one of exactly 25.4 mm, which is what this converter uses.",
      },
      {
        id: "foot",
        name: "Foot",
        plural: "Feet",
        symbol: "ft",
        toBase: 0.3048,
        definition:
          "A foot is a unit of length in the imperial and US customary systems, equal to 12 inches and exactly 0.3048 meters. Its plural is feet.",
        usage:
          "Feet are used for human height and building dimensions in the US and UK, and internationally in aviation, where altitude is almost always given in feet.",
      },
      {
        id: "yard",
        name: "Yard",
        plural: "Yards",
        symbol: "yd",
        toBase: 0.9144,
        definition:
          "A yard is a unit of length in the imperial and US customary systems, equal to 3 feet, 36 inches, and exactly 0.9144 meters.",
        usage:
          "Yards appear in American football, fabric sold in the US, and older British measurements; in most everyday metric contexts the same distance is given in meters, which are about 9% longer.",
      },
      {
        id: "mile",
        name: "Mile",
        plural: "Miles",
        symbol: "mi",
        toBase: 1609.344,
        definition:
          "A mile (statute mile) is a unit of length in the imperial and US customary systems, equal to 5,280 feet and exactly 1,609.344 meters.",
        usage:
          "Miles are used for road distances and speed limits in the United States and the United Kingdom, and informally for long distances in a few other countries.",
        caution: "The statute mile here is not the nautical mile (1,852 m) used at sea and in aviation; the two differ by about 15%.",
      },
    ],
  },
  {
    id: "weight",
    name: "Weight",
    baseUnitId: "kilogram",
    intro:
      "Weight and mass conversions bridge the metric kilogram and the imperial pound: body weight, luggage allowances, parcels, recipes and gym plates. Strictly, kilograms and pounds measure mass, but in everyday use both are read as weight, and the conversion between them is a fixed exact factor.",
    note: "The pound is defined as exactly 0.45359237 kilograms, and the ounce is exactly one sixteenth of a pound, so conversions in this category are exact. The stone, still used for body weight in the UK and Ireland, is exactly 14 pounds.",
    mistakes:
      "The common weight mistakes are rounding 1 kg to 2 lb (it is 2.205 lb, a 10% error at luggage-allowance sizes), confusing ounces of weight with fluid ounces of volume, and forgetting that a stone is 14 pounds, not 10. When an airline limit or a recipe matters, use the exact factor and check the direction before you rely on the result.",
    units: [
      {
        id: "gram",
        name: "Gram",
        plural: "Grams",
        symbol: "g",
        toBase: 0.001,
        definition:
          "A gram is one thousandth of a kilogram, from the SI prefix milli- applied a step further: 1,000 grams make a kilogram. A paperclip weighs roughly one gram.",
        usage:
          "Grams are the standard for cooking ingredients, nutrition labels, postal letters and small items in metric countries, and for precious metals and laboratory work worldwide.",
      },
      {
        id: "kilogram",
        name: "Kilogram",
        plural: "Kilograms",
        symbol: "kg",
        toBase: 1,
        definition:
          "The kilogram is the SI base unit of mass, defined since 2019 by fixing the value of the Planck constant. In everyday terms it is the mass of one liter of water, very nearly.",
        usage:
          "Kilograms are used for body weight, luggage, parcels and food in most of the world, and as the scientific standard everywhere.",
      },
      {
        id: "ounce",
        name: "Ounce",
        plural: "Ounces",
        symbol: "oz",
        toBase: 0.028349523125,
        definition:
          "An ounce (avoirdupois ounce) is one sixteenth of a pound, exactly 28.349523125 grams. It is the small weight unit of the imperial and US customary systems.",
        usage:
          "Ounces appear on US food packaging, in recipes, for baby weights and for small parcels. A slice of bread weighs roughly one ounce.",
        caution: "An ounce of weight is not a fluid ounce of volume; the two only coincide for water, approximately. This page converts weight ounces.",
      },
      {
        id: "pound",
        name: "Pound",
        plural: "Pounds",
        symbol: "lb",
        toBase: 0.45359237,
        definition:
          "The pound (avoirdupois pound) is a unit of mass in the imperial and US customary systems, defined as exactly 0.45359237 kilograms and divided into 16 ounces. Its symbol lb comes from the Latin libra.",
        usage:
          "Pounds are the everyday weight unit in the United States, and are still widely used for body weight and food in the United Kingdom alongside stones and kilograms.",
      },
      {
        id: "stone",
        name: "Stone",
        plural: "Stone",
        symbol: "st",
        toBase: 6.35029318,
        definition:
          "A stone is a unit of mass in the imperial system equal to exactly 14 pounds, or 6.35029318 kilograms. Body weight in the UK and Ireland is often given as stones and pounds together, such as 11 stone 4.",
        usage:
          "The stone survives almost entirely as a body-weight unit in the UK and Ireland; it is not used for goods or in the United States.",
        caution: "When a weight is given as '11 stone 4', the 4 is pounds, not a decimal: it means 11 × 14 + 4 = 158 lb, not 11.4 stone.",
      },
    ],
  },
  {
    id: "temperature",
    name: "Temperature",
    baseUnitId: "celsius",
    intro:
      "Temperature is the odd category out: Celsius, Fahrenheit and Kelvin do not just use different step sizes, they start at different zero points, so converting temperature always needs a formula with an offset, never a single multiplication factor.",
    note: "The landmarks worth remembering: water freezes at 0 °C / 32 °F, boils at 100 °C / 212 °F, normal body temperature is about 37 °C / 98.6 °F, and −40 is the one point where Celsius and Fahrenheit are equal. Kelvin starts at absolute zero, −273.15 °C, and never uses a degree symbol.",
    mistakes:
      "The classic temperature mistakes are multiplying by 9/5 but forgetting the +32 offset (or subtracting it in the wrong place), and treating a temperature *difference* as a temperature: a change of 10 °C is a change of 18 °F, with no offset involved. Oven temperatures add a third system, gas marks, which this converter does not cover.",
    units: [
      {
        id: "celsius",
        name: "Celsius",
        plural: "degrees Celsius",
        symbol: "°C",
        toBase: 1,
        definition:
          "The Celsius scale sets 0 °C at the freezing point of water and 100 °C at its boiling point (at standard pressure), divided into 100 equal degrees. It is named after the Swedish astronomer Anders Celsius.",
        usage:
          "Celsius is the everyday temperature scale in almost every country except the United States, and the scale used with Kelvin in science.",
      },
      {
        id: "fahrenheit",
        name: "Fahrenheit",
        plural: "degrees Fahrenheit",
        symbol: "°F",
        toBase: 1,
        definition:
          "The Fahrenheit scale sets 32 °F at the freezing point of water and 212 °F at its boiling point, divided into 180 degrees. It was proposed by Daniel Gabriel Fahrenheit in 1714.",
        usage:
          "Fahrenheit remains the everyday scale in the United States for weather, cooking and body temperature, and appears alongside Celsius in Canada and the UK weather reports.",
      },
      {
        id: "kelvin",
        name: "Kelvin",
        plural: "kelvin",
        symbol: "K",
        toBase: 1,
        definition:
          "The kelvin is the SI base unit of temperature. It starts at absolute zero, the coldest possible temperature, and uses the same step size as Celsius: 0 K = −273.15 °C. It is written without a degree symbol: 300 K, not 300 °K.",
        usage:
          "Kelvin is used in science and engineering, and for the colour temperature of light bulbs and screens, where 6,500 K approximates daylight.",
      },
    ],
  },
  {
    id: "volume",
    name: "Volume",
    baseUnitId: "liter",
    intro:
      "Volume conversions are where cooking, fuel, aquariums and drinks packaging meet — and where the US and UK systems genuinely differ. Every unit in this category on this site is labelled US or metric explicitly, because a US gallon, pint and cup are all smaller than their old imperial namesakes.",
    note: "One US gallon is exactly 3.785411784 liters; one UK (imperial) gallon is 4.54609 liters, about 20% larger. US fluid ounces, cups, pints and quarts on this site are the US customary units used on American packaging and in American recipes. UK volume conversions will be added as their own clearly labelled pages rather than mixed into these.",
    mistakes:
      "The expensive volume mistakes are using a UK gallon where a US gallon is meant (a 20% error on fuel and tank sizes), treating fluid ounces as weight ounces, and assuming a 'cup' is the same everywhere: a US cup is 236.588 mL, a metric cup is 250 mL, and a mug from the cupboard is neither. Check which system a recipe or label uses before converting.",
    units: [
      {
        id: "milliliter",
        name: "Milliliter",
        plural: "Milliliters",
        symbol: "mL",
        toBase: 0.001,
        definition:
          "A milliliter is one thousandth of a liter, and exactly one cubic centimeter (1 cm³). Twenty drops of water are roughly one milliliter.",
        usage:
          "Milliliters are the standard for drinks cans, medicine doses, toiletries and recipe liquids in metric countries, and appear on packaging worldwide.",
      },
      {
        id: "liter",
        name: "Liter",
        plural: "Liters",
        symbol: "L",
        toBase: 1,
        definition:
          "A liter is a unit of volume equal to one cubic decimeter (10 cm × 10 cm × 10 cm), or 1,000 milliliters. It is accepted for use with the SI system and is the base unit of this category.",
        usage:
          "Liters measure drinks, fuel in most countries, engine size, backpacks and aquarium capacity across the metric world, and appear on US packaging alongside fluid ounces.",
      },
      {
        id: "cup-us",
        name: "Cup (US)",
        plural: "Cups (US)",
        symbol: "cup",
        toBase: 0.2365882365,
        definition:
          "A US customary cup is exactly 236.5882365 milliliters, half of a US pint and 8 US fluid ounces. It is a legal unit for food labelling in the United States.",
        usage:
          "Cups are the home-cooking unit of American recipes for flour, milk, rice and most other ingredients, which is why converting them to milliliters is one of the most common kitchen conversions.",
        caution: "A US cup (236.588 mL) is not a metric cup (250 mL) and not a coffee mug. Recipes from the US mean the US cup unless they say otherwise.",
      },
      {
        id: "fluid-ounce-us",
        name: "Fluid Ounce (US)",
        plural: "Fluid Ounces (US)",
        symbol: "fl oz",
        toBase: 0.0295735295625,
        definition:
          "A US fluid ounce is one sixteenth of a US pint and one 128th of a US gallon, exactly 29.5735295625 milliliters. Despite the name it measures volume, not weight.",
        usage:
          "Fluid ounces size drinks cans and bottles, coffee servings, perfumes and liquid medicines in the United States, and appear next to milliliters on packaging worldwide.",
        caution: "A fluid ounce of water weighs about 1.04 weight ounces, and for any other liquid the weights differ; never swap the two ounce systems directly.",
      },
      {
        id: "gallon-us",
        name: "Gallon (US)",
        plural: "Gallons (US)",
        symbol: "gal",
        toBase: 3.785411784,
        definition:
          "A US gallon is exactly 3.785411784 liters, divided into 4 quarts, 8 pints or 128 fluid ounces. It has been the standard US liquid gallon since the 19th century.",
        usage:
          "US gallons measure fuel (miles per gallon), milk, paint and tank capacity in the United States.",
        caution: "The US gallon is about 20% smaller than the UK imperial gallon (4.54609 L). A car rated 40 mpg in the UK is rated about 33 mpg on US gallons for the same real economy.",
      },
    ],
  },
  {
    id: "speed",
    name: "Speed",
    baseUnitId: "kmh",
    intro:
      "Speed conversions are mostly a two-unit world: kilometres per hour across the metric world, and miles per hour in the United States and the United Kingdom. Converting between them matters for speed limits, travel times, running pace and vehicle data.",
    note: "One mile is exactly 1.609344 kilometres, so 1 mph is exactly 1.609344 km/h. A useful mental check: multiply mph by 1.6 for a close km/h estimate — 60 mph ≈ 96 km/h, and the exact figure is 96.56 km/h.",
    mistakes:
      "The usual speed mistakes are converting the distance but forgetting it is *per hour* on both sides (no separate time conversion is needed), and reading a car's km/h speedometer against mph speed-limit signs abroad. When a journey time matters, convert the speed first, then divide the distance in the matching unit.",
    units: [
      {
        id: "kmh",
        name: "Kilometers per hour",
        plural: "Kilometers per hour",
        symbol: "km/h",
        toBase: 1,
        definition:
          "Kilometres per hour measures how many kilometres something travels in one hour. It is the standard road-speed unit in the metric world.",
        usage:
          "km/h is used for speed limits and vehicle speedometers in most countries, and for wind speeds in many weather services.",
      },
      {
        id: "mph",
        name: "Miles per hour",
        plural: "Miles per hour",
        symbol: "mph",
        toBase: 1.609344,
        definition:
          "Miles per hour measures how many miles something travels in one hour. One mph is exactly 1.609344 km/h, because the mile is defined from the kilometre.",
        usage:
          "mph is the road-speed unit of the United States and the United Kingdom, and the unit of most US weather wind reports.",
      },
    ],
  },
  {
    id: "area",
    name: "Area",
    baseUnitId: "square-meter",
    intro:
      "Area conversions show up in land, property and farming: acres against square feet in the US system, hectares and square meters in the metric system. The trap built into every area conversion is that the factor is the length factor squared — double the sides of a plot and the area goes up four times.",
    note: "An acre is exactly 43,560 square feet, the area of a strip one chain by one furlong (66 × 660 feet), a definition that survives from medieval English farming. In metric terms one acre is 4,046.8564224 square meters, a little over 0.4 hectares.",
    mistakes:
      "The classic area mistakes are converting square units with the plain length factor (using 3.28 for square meters to square feet instead of 10.764), and confusing acres with hectares, which differ by a factor of about 2.47. Always square the length factor, or use the pair page for the exact area factor.",
    units: [
      {
        id: "square-meter",
        name: "Square Meter",
        plural: "Square Meters",
        symbol: "m²",
        toBase: 1,
        definition:
          "A square meter is the area of a square one meter on each side, and the SI unit of area used as the base of this category.",
        usage:
          "Square meters size apartments, rooms, land plots and materials across the metric world, and appear in science everywhere.",
      },
      {
        id: "square-foot",
        name: "Square Foot",
        plural: "Square Feet",
        symbol: "ft²",
        toBase: 0.09290304,
        definition:
          "A square foot is the area of a square one foot on each side, exactly 0.09290304 square meters (the foot, squared). There are 43,560 square feet in an acre.",
        usage:
          "Square feet are the standard unit for house and apartment sizes, land listings and building materials in the United States, and appear in UK property listings too.",
      },
      {
        id: "acre",
        name: "Acre",
        plural: "Acres",
        symbol: "ac",
        toBase: 4046.8564224,
        definition:
          "An acre is a unit of land area in the imperial and US customary systems, exactly 43,560 square feet (about 4,047 m²). Historically it was the amount of land one man and an ox could plough in a day.",
        usage:
          "Acres measure farms, estates, parks and large land parcels in the US and UK. A football field including end zones is about 1.32 acres.",
      },
    ],
  },
];

export function getCategory(categoryId: string): CategoryDef | undefined {
  return categories.find((c) => c.id === categoryId);
}

export function getUnit(category: CategoryDef, unitId: string): UnitDef | undefined {
  return category.units.find((u) => u.id === unitId);
}

/** Convert a value between two units of one category, using exact factors / temperature formulas. */
export function convertValue(categoryId: string, fromId: string, toId: string, value: number): number {
  if (!Number.isFinite(value)) return NaN;
  if (fromId === toId) return value;
  if (categoryId === "temperature") {
    // Convert via Celsius.
    const toCelsius = (v: number, from: string) =>
      from === "fahrenheit" ? ((v - 32) * 5) / 9 : from === "kelvin" ? v - 273.15 : v;
    const fromCelsius = (c: number, to: string) =>
      to === "fahrenheit" ? (c * 9) / 5 + 32 : to === "kelvin" ? c + 273.15 : c;
    return fromCelsius(toCelsius(value, fromId), toId);
  }
  const category = getCategory(categoryId);
  if (!category) return NaN;
  const from = getUnit(category, fromId);
  const to = getUnit(category, toId);
  if (!from || !to) return NaN;
  return (value * from.toBase) / to.toBase;
}

/** Human-friendly formatting: up to 6 significant decimals, trailing zeros trimmed. */
export function formatNumber(n: number): string {
  if (!Number.isFinite(n)) return "";
  if (n === 0) return "0";
  const abs = Math.abs(n);
  const rounded = abs >= 100 ? Math.round(n * 100) / 100 : abs >= 1 ? Math.round(n * 10000) / 10000 : Math.round(n * 1000000) / 1000000;
  return rounded.toLocaleString("en-US", { maximumFractionDigits: 6 });
}

/** The plain-English formula for a pair, e.g. "inches = centimeters ÷ 2.54". */
export function pairFormula(categoryId: string, from: UnitDef, to: UnitDef): string {
  if (categoryId === "temperature") {
    if (from.id === "celsius" && to.id === "fahrenheit") return "°F = (°C × 9 ÷ 5) + 32";
    if (from.id === "fahrenheit" && to.id === "celsius") return "°C = (°F − 32) × 5 ÷ 9";
    if (from.id === "celsius" && to.id === "kelvin") return "K = °C + 273.15";
    if (from.id === "kelvin" && to.id === "celsius") return "°C = K − 273.15";
    if (from.id === "fahrenheit" && to.id === "kelvin") return "K = (°F − 32) × 5 ÷ 9 + 273.15";
    if (from.id === "kelvin" && to.id === "fahrenheit") return "°F = (K − 273.15) × 9 ÷ 5 + 32";
    return "Use the standard temperature formula for this pair.";
  }
  const factor = from.toBase / to.toBase;
  if (factor >= 1) {
    return `${to.plural.toLowerCase()} = ${from.plural.toLowerCase()} × ${formatNumber(factor)}`;
  }
  return `${to.plural.toLowerCase()} = ${from.plural.toLowerCase()} ÷ ${formatNumber(1 / factor)}`;
}

export type PairDef = {
  category: string;
  slug: string;
  from: string;
  to: string;
  /** Values shown in the quick-answer box (first entries) and the full conversion table. */
  values: number[];
  /** Input value used in the worked example. */
  example: number;
  /** Pair-specific paragraph: why people look this conversion up. */
  useCase: string;
  /** Pair-specific mistake or trap. The category-level mistakes are added by the template. */
  mistake: string;
  /** One pair-specific FAQ. The template adds formula / example / reverse FAQs. */
  faq: { q: string; a: string };
};

// Phase 1 PILOT set: the Top 40 head pairs from the expansion plan (§7).
// Order matters: related-conversion links are drawn from neighbours in this list.
export const pairs: PairDef[] = [
  // ── Length (14) ──────────────────────────────────────────────────────────
  { category: "length", slug: "cm-to-inches", from: "centimeter", to: "inch", values: [1, 2, 3, 5, 10, 15, 20, 25, 30, 50, 80, 100], example: 15,
    useCase: "This is the length conversion people search for most: product dimensions, clothing and screen sizes are sold in inches in the US while the rest of the world measures them in centimeters, so every cross-border purchase starts here.",
    mistake: "Do not use the shortcut of dividing by 2.5 for a final answer; it is about 1.6% off, which is a visible gap on a 100 cm piece of furniture.",
    faq: { q: "How many cm is a 55 inch TV?", a: "A 55 inch TV screen measures 55 × 2.54 = 139.7 cm diagonally. Screen sizes are always the diagonal, in inches, in every country." } },
  { category: "length", slug: "inches-to-cm", from: "inch", to: "centimeter", values: [1, 2, 3, 4, 6, 8, 10, 12, 18, 24, 36], example: 10,
    useCase: "US specifications — paper sizes, lumber, screen diagonals, pipe diameters — are given in inches, and converting them to centimeters is how the metric world checks whether something will fit.",
    mistake: "Watch fractional inches on US tape measures and drawings: 2 1/2 inches is 2.5 in the converter, which is 6.35 cm, not 2.12 inches read as a decimal.",
    faq: { q: "What is 8.5 by 11 inches in cm?", a: "US Letter paper is 8.5 × 11 inches, which converts to 21.59 × 27.94 cm — slightly shorter and wider than A4 (21 × 29.7 cm)." } },
  { category: "length", slug: "mm-to-inches", from: "millimeter", to: "inch", values: [1, 2, 5, 10, 15, 20, 25, 30, 40, 50, 75, 100], example: 25,
    useCase: "Engineering drawings, 3D printing, jewellery and camera equipment are dimensioned in millimeters even in the US, so machinists and makers convert mm to inches to check parts against inch tooling.",
    mistake: "25 mm is not exactly 1 inch — it is 0.984 inches. The 0.4 mm difference matters in machining even though it is invisible on a ruler.",
    faq: { q: "Why do engineers say 25.4 instead of 25?", a: "Because the inch is defined as exactly 25.4 mm. Using 25 introduces a 1.6% error that grows with size: at 500 mm the shortcut is off by more than 8 mm." } },
  { category: "length", slug: "inches-to-mm", from: "inch", to: "millimeter", values: [1, 2, 3, 4, 5, 6, 8, 10, 12], example: 4,
    useCase: "Converting inches to millimeters is the workshop direction: an imperial drawing or a US product size has to be made, printed or ordered in the metric system, where millimeters are the unit that gives clean whole numbers.",
    mistake: "Convert fractions properly before you start: 3/8 inch is 0.375 inches (9.525 mm), and typing 3.8 instead gives 96.52 mm — nearly ten times too big.",
    faq: { q: "How many mm is a 1/4 inch bolt?", a: "1/4 inch = 0.25 × 25.4 = 6.35 mm. That is the bolt's diameter designation; the nearest metric bolt size, M6, is close but not interchangeable." } },
  { category: "length", slug: "meters-to-feet", from: "meter", to: "foot", values: [1, 2, 3, 5, 10, 15, 20, 30, 50, 100], example: 10,
    useCase: "Heights of buildings, room dimensions, diving depths and aircraft are given in meters in most countries and in feet in the US — and aviation worldwide uses feet, so pilots convert constantly.",
    mistake: "1 meter is 3.281 feet, not 3 feet. Calling a 30 m building '90 feet' understates it by nearly 8 feet; the rough shortcut only works for quick estimates.",
    faq: { q: "How tall is a 10 meter building in feet?", a: "10 m = 32.81 feet, roughly a three-storey building. A quick mental check is to multiply meters by 3.3." } },
  { category: "length", slug: "feet-to-meters", from: "foot", to: "meter", values: [1, 3, 5, 6, 10, 15, 20, 30, 50, 100], example: 6,
    useCase: "Heights in the US are quoted in feet — a 6 foot person, a 30 foot tree, a 10 foot ceiling — and converting to meters is how everyone else pictures them, and how science records them.",
    mistake: "Feet-and-inches heights are not decimals: 5 ft 10 in is 5.833 ft (70 inches), which is 1.778 m. Typing 5.10 ft gives a wrong, shorter result.",
    faq: { q: "How many meters is 5 feet 7 inches?", a: "5 ft 7 in is 67 inches, or 5.583 ft, which converts to 1.702 m. Convert the whole height through inches whenever inches are involved." } },
  { category: "length", slug: "km-to-miles", from: "kilometer", to: "mile", values: [1, 2, 5, 10, 20, 42, 50, 80, 100, 200], example: 10,
    useCase: "Driving abroad is the classic case: distances and speed limits are in kilometers almost everywhere, and visitors from the US and UK think in miles. Runners also convert race distances — a marathon is 42.195 km.",
    mistake: "The popular 0.6 shortcut under-reads by about 3.5%: 100 km is 62.14 miles, not 60. Over a long drive that gap is a real difference in arrival estimates.",
    faq: { q: "How many miles is a 10K run?", a: "10 km = 6.214 miles. The other standard races: 5K is 3.107 miles, a half marathon (21.098 km) is 13.11 miles, and a marathon is 26.22 miles." } },
  { category: "length", slug: "miles-to-km", from: "mile", to: "kilometer", values: [1, 2, 3, 5, 10, 13, 26, 50, 100], example: 26,
    useCase: "US and UK road distances, fuel-economy figures and race results are in miles; converting them to kilometers is how the rest of the world compares a journey, a car or a marathon time.",
    mistake: "Do not confuse the statute mile on roads with the nautical mile used at sea: a nautical mile is 1.852 km, about 15% longer than the 1.609 km road mile.",
    faq: { q: "How long is a marathon in kilometers?", a: "A marathon is 26 miles 385 yards, which is 42.195 km. The 26.2 miles people quote is a rounding of the same distance." } },
  { category: "length", slug: "cm-to-feet", from: "centimeter", to: "foot", values: [100, 120, 140, 150, 160, 165, 170, 175, 180, 185, 190, 200], example: 170,
    useCase: "This conversion is almost entirely about human height: most of the world records height in centimeters, while the US and UK talk about it in feet and inches, so every form, dating profile and medical record crosses this pair.",
    mistake: "A result like 5.577 feet is not '5 feet 5 inches' and not '5 feet 7 inches' either — the decimal part is a fraction of a foot. Multiply it by 12 to get inches: 0.577 × 12 ≈ 7, so 170 cm is 5 feet 7 inches.",
    faq: { q: "What height is 180 cm in feet and inches?", a: "180 cm = 5.906 feet, and 0.906 × 12 ≈ 10.9 inches, so 180 cm is 5 feet 10.9 inches — usually quoted as 5 ft 11 in." } },
  { category: "length", slug: "feet-to-cm", from: "foot", to: "centimeter", values: [4, 5, 5.5, 6, 6.5, 7, 8, 10], example: 5.5,
    useCase: "US heights, ceiling heights and product dimensions in feet need centimeters for medical records, international forms and metric furniture or building plans.",
    mistake: "Enter feet and inches separately, not as a decimal: 5 ft 6 in is 66 inches = 167.64 cm. Typing 5.6 ft converts a different, taller height.",
    faq: { q: "How many cm tall is a 6 foot person?", a: "6 ft = 72 inches × 2.54 = 182.88 cm. That is why 183 cm is quoted as the metric equivalent of six feet." } },
  { category: "length", slug: "feet-to-inches", from: "foot", to: "inch", values: [1, 2, 3, 4, 5, 5.5, 6, 7, 8, 10], example: 5,
    useCase: "One foot is exactly 12 inches, and this simple conversion is used constantly in US construction, height records and furniture dimensions, where drawings often specify inches alone.",
    mistake: "A decimal foot is not feet-and-inches: 5.5 ft is 5 ft 6 in, but 5 ft 5 in is 5.417 ft. State which form you are converting before you calculate.",
    faq: { q: "How many inches is 5 foot 11?", a: "5 × 12 + 11 = 71 inches. To reverse it, divide total inches by 12: the whole number is feet and the remainder is inches." } },
  { category: "length", slug: "inches-to-feet", from: "inch", to: "foot", values: [6, 12, 18, 24, 30, 36, 48, 60, 66, 72, 84], example: 66,
    useCase: "Heights and lengths measured with a US tape come off in inches — 66 inches of person, 48 inches of worktop — and converting to feet is how those numbers are usually spoken and written.",
    mistake: "66 inches is 5.5 feet, which is spoken as 5 feet 6 inches, not '5 feet 5'. The decimal is a fraction of a foot; multiply the fraction by 12 to speak it correctly.",
    faq: { q: "How tall is 72 inches in feet?", a: "72 ÷ 12 = exactly 6 feet. 72 inches is a common worktop length and the height of a six-foot door slab before its frame." } },
  { category: "length", slug: "meters-to-yards", from: "meter", to: "yard", values: [1, 2, 3, 5, 9, 10, 20, 50, 91, 100], example: 10,
    useCase: "Meters and yards are close cousins — a yard is about 91% of a meter — and they meet in sport (a football field is marked in yards, athletics in meters), fabric and US landscaping.",
    mistake: "Treating meters and yards as interchangeable builds in a 9% error: over a 100 m run of fencing that is more than 9 yards of material missing or spare.",
    faq: { q: "Is a 100 meter dash the same as 100 yards?", a: "No. 100 yards is 91.44 m, and 100 m is 109.36 yards. The 100 yard dash is a shorter race by about 9.4 yards of running." } },
  { category: "length", slug: "yards-to-meters", from: "yard", to: "meter", values: [1, 5, 10, 20, 40, 50, 100], example: 40,
    useCase: "American football fields, US fabric lengths and golf distances are measured in yards; converting them to meters is how international audiences and science make sense of them.",
    mistake: "A yard is 0.9144 m, not 0.9 m exactly; on a 400-yard golf hole the shortcut is short by almost 6 meters — roughly a club length of difference.",
    faq: { q: "How many meters is an American football field?", a: "The playing field is 100 yards between goal lines = 91.44 m, or 120 yards (109.73 m) including both 10-yard end zones." } },

  // ── Weight (10) ──────────────────────────────────────────────────────────
  { category: "weight", slug: "kg-to-lbs", from: "kilogram", to: "pound", values: [1, 2, 5, 10, 20, 30, 50, 60, 70, 80, 90, 100], example: 70,
    useCase: "The most-searched weight conversion in the world: body weight, airline luggage allowances, gym weights and parcel limits are set in kilograms in most countries and in pounds in the US, so travellers, athletes and shoppers convert kg to lbs constantly.",
    mistake: "Never round the factor to 2: a 23 kg suitcase is 50.7 lb, not 46 lb. Against a 50 lb airline limit, that rounding is the difference between boarding and paying an excess fee.",
    faq: { q: "How many lbs is 23 kg of luggage?", a: "23 kg × 2.20462 = 50.71 lb. That is why the common 23 kg international baggage allowance sits right at the 50 lb limit used by US airlines." } },
  { category: "weight", slug: "lbs-to-kg", from: "pound", to: "kilogram", values: [1, 2, 5, 10, 20, 50, 100, 120, 150, 180, 200, 220], example: 150,
    useCase: "US body weights, dumbbells, luggage and product weights are in pounds; kilograms are needed for medical records, international shipping, European gym equipment and science.",
    mistake: "Dividing by 2 instead of 2.20462 overstates kilograms by about 10%: 150 lb is 68.04 kg, not 75 kg — a serious error if the number feeds a dosage or a freight bill.",
    faq: { q: "What is 200 lbs in kg?", a: "200 × 0.45359237 = 90.72 kg. The halfway landmark worth memorising: 100 lb ≈ 45.4 kg." } },
  { category: "weight", slug: "grams-to-ounces", from: "gram", to: "ounce", values: [10, 25, 50, 100, 200, 250, 400, 500, 750, 1000], example: 250,
    useCase: "Recipes and nutrition labels are the battleground: metric recipes weigh ingredients in grams while US recipes and scales speak ounces, so bakers convert grams to ounces for butter, flour and chocolate every day.",
    mistake: "A recipe 'ounce' is weight here — do not pour it into a measuring jug as fluid ounces. 100 g of flour is 3.53 oz by weight but about 6 fl oz by volume.",
    faq: { q: "How many ounces is 500 grams?", a: "500 g = 17.64 oz, which is 1 lb 1.6 oz — the standard size of many European food packages." } },
  { category: "weight", slug: "ounces-to-grams", from: "ounce", to: "gram", values: [1, 2, 4, 6, 8, 12, 16, 24, 32], example: 8,
    useCase: "US packaged foods and recipes give ounces; the rest of the world's kitchens, coffee scales and nutrition databases work in grams, so ounces to grams is a daily cooking and tracking conversion.",
    mistake: "Check the label is weighing, not pouring: a '12 oz' can of drink is fluid ounces (volume), while a '12 oz' steak is weight (340 g). Only the steak belongs on this page.",
    faq: { q: "How many grams is a half pound?", a: "Half a pound is 8 oz, and 8 × 28.349523125 = 226.8 g. That is the size of a standard US butter-plus-shortening block pairing and many cheese packs." } },
  { category: "weight", slug: "lbs-to-ounces", from: "pound", to: "ounce", values: [1, 2, 3, 4, 5, 8, 10], example: 3,
    useCase: "Within the US system itself, pounds become ounces for postage, baby weights, produce and recipe scaling: one pound is exactly 16 ounces, so this is a clean multiplication.",
    mistake: "Decimal pounds are not pounds-and-ounces: 2.5 lb is 2 lb 8 oz, while 2 lb 5 oz is 2.3125 lb. Convert the whole amount to ounces (×16) to avoid the confusion.",
    faq: { q: "How many ounces is a newborn of 7 lbs 11 oz in total?", a: "7 × 16 + 11 = 123 oz total. Hospitals often record the single ounce total before converting back to pounds and ounces for parents." } },
  { category: "weight", slug: "ounces-to-lbs", from: "ounce", to: "pound", values: [4, 8, 12, 16, 24, 32, 48, 64, 80], example: 32,
    useCase: "Postal scales, fishing catches, newborn weights and bulk ingredients come off the scale in ounces in the US, and ounces to pounds is how they are priced, posted and announced.",
    mistake: "Divide by 16, not by 10 or 12: 48 oz is exactly 3 lb. The troy ounce used for gold is a different, heavier ounce (31.1 g) and is not the ounce on this page.",
    faq: { q: "Is 100 ounces over 6 pounds?", a: "Yes: 100 ÷ 16 = 6.25 lb, i.e. 6 lb 4 oz. Anything past 96 oz is past 6 lb." } },
  { category: "weight", slug: "kg-to-grams", from: "kilogram", to: "gram", values: [1, 2, 3, 5, 10, 20, 50], example: 2.5,
    useCase: "The simplest metric conversion — move the decimal three places — used when a recipe, a lab protocol or a shipping form wants grams but the scale or the label speaks kilograms.",
    mistake: "Keep the direction straight: kilograms to grams multiplies by 1,000, so 0.75 kg is 750 g, not 0.00075 g. A quick sanity check: the gram number is always the bigger one.",
    faq: { q: "How many grams is 0.5 kg?", a: "0.5 × 1,000 = 500 g — the standard half-kilo pack size across Europe for flour, sugar and mince." } },
  { category: "weight", slug: "grams-to-kg", from: "gram", to: "kilogram", values: [100, 250, 500, 750, 1000, 1500, 2000, 5000], example: 750,
    useCase: "Ingredient weights, newborn weights in metric hospitals, and parcel weights are recorded in grams and then reported, priced or charted in kilograms — a division by 1,000.",
    mistake: "750 g is 0.75 kg, not 7.5 kg; misplacing the decimal by one place is the only real danger in this conversion, so count the three places deliberately.",
    faq: { q: "How many kg is 2,500 grams?", a: "2,500 ÷ 1,000 = 2.5 kg. Anything from 1,000 g upward is usually written in kilograms, with the grams as the decimal part." } },
  { category: "weight", slug: "kg-to-stone", from: "kilogram", to: "stone", values: [40, 50, 60, 70, 76, 80, 90, 100, 110], example: 76,
    useCase: "British and Irish bathroom scales and medical records split by generation: clinics record kilograms, while many people still describe their weight in stone. Converting kg to stone is how those two worlds compare numbers.",
    mistake: "The result is usually wanted as stone and pounds: 76 kg is 11.97 stone, which is spoken as 11 stone 13½ lb (the 0.97 × 14), not '11 stone 97'. Multiply the decimal part by 14, not by 10.",
    faq: { q: "What is 12 stone in kg, to check against my scale?", a: "12 stone = 12 × 6.35029318 = 76.20 kg. Each stone is about 6.35 kg, so a stone of weight loss is a substantial 14 lb." } },
  { category: "weight", slug: "stone-to-kg", from: "stone", to: "kilogram", values: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20], example: 11,
    useCase: "UK and Irish body weights quoted in stone need kilograms for medical charts, BMI calculators, gym programming and airline-style weight limits, all of which run on kg.",
    mistake: "Convert the pounds part separately: 11 stone 7 lb is 11.5 stone (7 lb is half a stone), which is 73.03 kg. Ignoring the extra pounds understates the weight by up to 6 kg.",
    faq: { q: "How many kg is 10 stone exactly?", a: "10 × 6.35029318 = 63.50 kg. The neat pattern: because a stone is 14 lb and a pound is 0.45359237 kg, every stone is the same 6.35029318 kg." } },

  // ── Temperature (4) ──────────────────────────────────────────────────────
  { category: "temperature", slug: "celsius-to-fahrenheit", from: "celsius", to: "fahrenheit", values: [-40, -20, -10, 0, 5, 10, 15, 20, 25, 30, 37, 40, 100], example: 20,
    useCase: "The weather conversion: forecasts, ovens, fevers and travel plans are in Celsius for most of the world and Fahrenheit in the US, so this is looked up daily by travellers, cooks and parents checking a temperature.",
    mistake: "Both steps matter: multiply by 9/5 AND add 32. 20 °C × 9/5 alone gives 36, which is not a temperature on either scale's weather range — the real answer is 68 °F.",
    faq: { q: "What is a fever in Fahrenheit if the thermometer shows 38 °C?", a: "38 °C = 100.4 °F, which is the commonly used fever threshold. Normal body temperature, 37 °C, is 98.6 °F." } },
  { category: "temperature", slug: "fahrenheit-to-celsius", from: "fahrenheit", to: "celsius", values: [-40, 0, 10, 20, 32, 40, 50, 60, 70, 80, 90, 98.6, 100, 212], example: 98.6,
    useCase: "US weather reports, recipes and thermostats speak Fahrenheit; converting to Celsius is how the rest of the world judges whether it is cold, whether the oven is right, and whether a fever reading is serious.",
    mistake: "Subtract 32 BEFORE you scale: (98.6 − 32) × 5/9 = 37 °C. Scaling first gives a nonsense answer over 54, a common slip when people rush this formula.",
    faq: { q: "What oven temperature is 350 °F in Celsius?", a: "350 °F = 176.7 °C, universally rounded to 175 °C or 180 °C in recipes (gas mark 4). US recipes bake at 350 °F more than any other temperature." } },
  { category: "temperature", slug: "celsius-to-kelvin", from: "celsius", to: "kelvin", values: [-40, 0, 20, 25, 37, 100, 200], example: 25,
    useCase: "Science runs on Kelvin: physics, chemistry, astronomy and light-bulb colour temperatures are in kelvin, and converting from the Celsius of everyday life is a single +273.15 step.",
    mistake: "Kelvin takes no degree symbol and no degrees word: write 298.15 K, not 298.15 °K. Also remember the offset is exact — 273.15, not 273 — when a calculation feeds further science.",
    faq: { q: "What is room temperature in kelvin?", a: "A comfortable 20–25 °C room is 293.15–298.15 K. Laboratories often standardise on 298.15 K (25 °C) for reporting measurements." } },
  { category: "temperature", slug: "kelvin-to-celsius", from: "kelvin", to: "celsius", values: [0, 100, 200, 250, 273.15, 293.15, 300, 310, 373.15], example: 300,
    useCase: "Scientific papers, datasheets and lighting specifications give kelvin; converting to Celsius translates absolute temperatures — and bulb colour temperatures like 6,500 K daylight — into everyday terms.",
    mistake: "Do not scale anything: the kelvin and Celsius degrees are the same size, so the only step is subtracting 273.15. Multiplying or dividing here is always wrong.",
    faq: { q: "Can kelvin be negative?", a: "No. 0 K is absolute zero, the lowest possible temperature, equal to −273.15 °C. Every real temperature converts to a positive kelvin value." } },

  // ── Volume (8) ───────────────────────────────────────────────────────────
  { category: "volume", slug: "liters-to-gallons", from: "liter", to: "gallon-us", values: [1, 2, 4, 5, 10, 19, 20, 40, 50, 100, 200], example: 50,
    useCase: "Fuel tanks, aquariums, water storage and paint are sold by the liter in most countries and by the gallon in the US, so vehicle owners, fishkeepers and travellers convert liters to US gallons to compare capacities and prices.",
    mistake: "Say which gallon you mean out loud before calculating: this page is US gallons (3.785 L). A 50 L tank is 13.2 US gallons but only 11.0 UK gallons — using the wrong one misjudges a tank by a fifth.",
    faq: { q: "How many gallons is a 40 liter fuel tank?", a: "40 ÷ 3.785411784 = 10.57 US gallons — a typical small-car tank, which the same maker would advertise as about 10.6 gallons in the US." } },
  { category: "volume", slug: "gallons-to-liters", from: "gallon-us", to: "liter", values: [1, 2, 3, 5, 10, 12, 15, 20, 25], example: 12,
    useCase: "US milk jugs, fuel economy, paint cans and aquarium sizes are in gallons; liters are how the rest of the world buys, fills and compares the same things, and how most product labels dual-print capacity.",
    mistake: "US and UK gallons poison comparisons quietly: a 'gallon' of fuel in London (4.546 L) carries about 20% more energy than a US gallon, which is most of why UK mpg figures look better.",
    faq: { q: "How many liters is the US gallon of milk?", a: "Exactly 3.785 L (3.785411784). The next common US size down, the half gallon, is 1.893 L." } },
  { category: "volume", slug: "ml-to-cups", from: "milliliter", to: "cup-us", values: [60, 80, 120, 180, 240, 250, 350, 470, 500, 710, 950, 1000], example: 250,
    useCase: "The home baker's conversion: European and Australian recipes measure liquids in milliliters, US recipes in cups, and anyone cooking across the Atlantic converts mL to cups several times per recipe.",
    mistake: "250 mL is not exactly 1 US cup — it is 1.057 cups. The metric cup of Australia and New Zealand is exactly 250 mL, which is why the confusion survives; US recipes mean the 236.588 mL cup.",
    faq: { q: "How many cups is 500 mL of milk?", a: "500 ÷ 236.588 = 2.11 US cups — call it 2 cups plus 2 tablespoons for baking, where the small excess will not change the result." } },
  { category: "volume", slug: "cups-to-ml", from: "cup-us", to: "milliliter", values: [0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4], example: 2,
    useCase: "US recipes are written in cups and the rest of the world cooks with milliliter jugs and gram scales, so cups to mL is the first conversion on millions of kitchen counters every day.",
    mistake: "For dry ingredients the cup-to-mL answer is volume only: a cup of flour is 236.588 mL of space but typically about 120–125 g of weight. Do not read the mL result as grams except for water-like liquids.",
    faq: { q: "How many mL is half a cup?", a: "Half a US cup = 118.294 mL, usually rounded to 120 mL in adapted recipes. A quarter cup is 59.147 mL, close to 60 mL or 4 tablespoons." } },
  { category: "volume", slug: "fluid-ounces-to-ml", from: "fluid-ounce-us", to: "milliliter", values: [1, 2, 4, 6, 8, 12, 16, 20, 32], example: 12,
    useCase: "Drinks cans, coffee sizes, perfume bottles and US medicine doses are labelled in fluid ounces; milliliters are the world standard on the same shelves, so shoppers and travellers convert fl oz to mL to compare like with like.",
    mistake: "The US fluid ounce (29.574 mL) and the UK fluid ounce (28.413 mL) differ by about 4%; a US-labelled drink poured into UK measures will seem slightly generous. This page converts the US unit.",
    faq: { q: "Why is a 12 fl oz can listed as 355 mL?", a: "12 × 29.5735295625 = 354.88 mL, which labels round to 355 mL. The same rounding explains 16 fl oz = 473 mL on pint cans and cups." } },
  { category: "volume", slug: "ml-to-fluid-ounces", from: "milliliter", to: "fluid-ounce-us", values: [30, 50, 100, 150, 250, 330, 355, 500, 750, 1000], example: 355,
    useCase: "Metric bottles and cans — 330 mL of soda, 750 mL of wine, 1,000 mL of water — meet US fluid-ounce labelling at every border and airport, and mL to fl oz is how travellers check liquid limits and serving sizes.",
    mistake: "Airline liquid limits are the expensive place to slip: 100 mL is 3.38 fl oz, and the US 3.4 fl oz rule is the same limit rounded — a 4 fl oz bottle (118 mL) exceeds both.",
    faq: { q: "How many fl oz is a 750 mL wine bottle?", a: "750 ÷ 29.574 = 25.36 fl oz — exactly five 5 fl oz glasses, which is why 750 mL became the standard bottle worldwide." } },
  { category: "volume", slug: "liters-to-fluid-ounces", from: "liter", to: "fluid-ounce-us", values: [1, 1.5, 2, 3, 4, 5], example: 2,
    useCase: "Big metric bottles — 1, 1.5 and 2 liter sodas and waters — are labelled in liters even in US stores, while servings on the same label are in fluid ounces, so this conversion bridges the bottle and the glass.",
    mistake: "Do not round a liter to a quart in precise work: a liter is 33.814 fl oz and a US quart is 32 fl oz, so the shortcut loses almost two ounces per liter.",
    faq: { q: "How many 8 fl oz servings are in a 2 liter bottle?", a: "2 L = 67.63 fl oz, so about 8.45 glasses of 8 fl oz — eight full glasses and a generous half, not the ten servings labels sometimes claim with smaller pours." } },
  { category: "volume", slug: "cups-to-liters", from: "cup-us", to: "liter", values: [1, 2, 3, 4, 6, 8, 12, 16], example: 4,
    useCase: "Scaling US recipes up — soup for a crowd, punch for a party, stock for the freezer — quickly outgrows cups, and cups to liters is how cooks move the quantities onto metric pots and containers.",
    mistake: "Four cups is not a liter: it is 0.946 L, which is exactly one US quart. Recipes adapted carelessly with '4 cups = 1 L' run about 5% wet.",
    faq: { q: "How many cups make a liter?", a: "1 ÷ 0.236588 = 4.227 cups. So a liter is 4 cups plus a quarter cup (4 tbsp) more — a useful picture when a jug is marked in liters only." } },

  // ── Speed (2) & Area (2) ─────────────────────────────────────────────────
  { category: "speed", slug: "mph-to-kmh", from: "mph", to: "kmh", values: [5, 10, 20, 25, 30, 40, 50, 60, 65, 70, 80, 100], example: 60,
    useCase: "Driving a US or UK car abroad, reading foreign speed limits, or comparing vehicle and wind-speed figures: mph to km/h is the conversion every road trip across a border demands.",
    mistake: "Use 1.609 for accuracy, not 1.6, when the number is a legal limit: a US 70 mph limit is 112.65 km/h, and the 0.9 km/h the shortcut drops can matter to a speed camera.",
    faq: { q: "What is 30 mph in km/h, for town driving abroad?", a: "30 × 1.609344 = 48.28 km/h — which is why continental 50 km/h town limits feel familiar to UK drivers: they are almost the same speed." } },
  { category: "speed", slug: "kmh-to-mph", from: "kmh", to: "mph", values: [10, 20, 30, 50, 60, 80, 90, 100, 110, 120, 130], example: 100,
    useCase: "Continental speed limits, European car data and international weather reports arrive in km/h; drivers from the US and UK convert to mph to judge journey times and legal speeds in the unit they think in.",
    mistake: "Divide by 1.609344 — do not multiply by the same factor used for the reverse trip, a slip that turns a 100 km/h limit into an alarming 161 'mph' instead of 62 mph.",
    faq: { q: "How fast is the French motorway limit of 130 km/h in mph?", a: "130 ÷ 1.609344 = 80.78 mph — faster than any US interstate limit except a few Texas highways, and well above the UK's 70 mph." } },
  { category: "area", slug: "acres-to-square-feet", from: "acre", to: "square-foot", values: [0.25, 0.5, 1, 2, 3, 5, 10, 20, 40, 100], example: 5,
    useCase: "Land is sold in acres and built on in square feet: converting acres to square feet is how buyers judge a plot against a house footprint, a zoning minimum or a developer's plan.",
    mistake: "An acre is 43,560 sq ft, not a round 43,000 or 44,000; on a 10-acre parcel the rounding throws away more than a house plot of land (5,600 sq ft).",
    faq: { q: "How big is a quarter acre lot in square feet?", a: "0.25 × 43,560 = 10,890 sq ft — for example a lot about 90 ft by 121 ft, a common suburban plot size in the US." } },
  { category: "area", slug: "square-feet-to-acres", from: "square-foot", to: "acre", values: [5000, 10000, 20000, 21780, 43560, 50000, 100000, 200000, 435600], example: 21780,
    useCase: "Surveys, listings and tax records for land often state square feet, while everyone talks about the same land in acres; this conversion is how a 43,560 sq ft parcel becomes 'an acre' in conversation and in price per acre.",
    mistake: "Never convert square feet with the length factor: there is no '12' involved. Area uses 43,560 sq ft per acre, the square of the old chain-and-furlong definition.",
    faq: { q: "Is 20,000 square feet half an acre?", a: "Not quite: 20,000 ÷ 43,560 = 0.459 acres. Half an acre is 21,780 sq ft — listings that round 20,000 up to 'half an acre' overstate the land by about 8%." } },
];

export function getPair(categoryId: string, slug: string): PairDef | undefined {
  return pairs.find((p) => p.category === categoryId && p.slug === slug);
}

export function pairsForCategory(categoryId: string): PairDef[] {
  return pairs.filter((p) => p.category === categoryId);
}

export function pairPath(pair: PairDef): string {
  return `/unit-converter/${pair.category}/${pair.slug}`;
}

/** Reverse pair if it is in the set, plus other pairs sharing the from- or to-unit. */
export function relatedPairs(pair: PairDef, limit = 8): PairDef[] {
  const reverse = pairs.find(
    (p) => p.category === pair.category && p.from === pair.to && p.to === pair.from
  );
  const sameFrom = pairs.filter(
    (p) => p !== pair && p !== reverse && p.category === pair.category && p.from === pair.from
  );
  const sameTo = pairs.filter(
    (p) => p !== pair && p !== reverse && p.category === pair.category && p.to === pair.to
  );
  const rest = pairs.filter(
    (p) => p !== pair && p !== reverse && p.category === pair.category && !sameFrom.includes(p) && !sameTo.includes(p)
  );
  return [...(reverse ? [reverse] : []), ...sameFrom, ...sameTo, ...rest].slice(0, limit);
}
