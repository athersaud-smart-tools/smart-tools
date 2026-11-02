import ToolExtras from "./ToolExtras";
import { JsonLd } from "../lib/jsonld";

type GuideKey =
  | "age" | "ai-rewrite" | "bmi" | "color" | "currency" | "loan"
  | "percentage" | "random" | "image-resize" | "image-compress" | "qr"
  | "password" | "word-count" | "text-case" | "unit" | "stopwatch"
  | "typing" | "pdf-merge";

const guideRoutes: Record<GuideKey, string> = {
  age: "/age-calculator", "ai-rewrite": "/ai-rewrite", bmi: "/bmi-calculator", color: "/color-picker",
  currency: "/currency-converter", loan: "/loan-calculator", percentage: "/percentage-calculator",
  random: "/random-number", "image-resize": "/image/resize", "image-compress": "/image/compress",
  qr: "/qr-code", password: "/password", "word-count": "/word-counter", "text-case": "/text-case",
  unit: "/unit-converter", stopwatch: "/stopwatch", typing: "/typing-test", "pdf-merge": "/pdf/merge",
};

const guides: Record<GuideKey, { title: string; intro: string; sections: { heading: string; body: string }[] }> = {
  age: { title: "Age calculation: calendar years and elapsed days", intro: "This page reports a calendar age (years, months, and days) alongside an elapsed-day total. Those are different ways to describe the same date interval.", sections: [
    { heading: "Read the result in context", body: "Calendar age follows month boundaries, so a person born near the end of a month may have a different day remainder than someone born earlier in the month. Total days count whole date boundaries; weeks are complete groups of seven days, and hours are estimated as 24 per day." },
    { heading: "Example", body: "If a date interval spans 2 calendar years, 3 months, and 4 days, the headline result uses that calendar breakdown. The total-days figure is calculated separately and will not always equal a simple 365-day multiplication because leap days occur." },
    { heading: "Privacy and limitations", body: "The date calculation runs in the browser and its calculation code does not send the date to a server. Site analytics are separate and are described in the Privacy Policy. Use the result for general date arithmetic; official eligibility decisions may define age differently." },
  ] },
  "ai-rewrite": { title: "What the AI text improver does with your text", intro: "The tool sends the text you submit to the site's rewrite endpoint, which forwards it to OpenRouter and an available language model to generate a revised version.", sections: [
    { heading: "Review changes before using them", body: "A rewrite can change emphasis, omit qualifications, or introduce errors even when the prompt asks it to preserve meaning. Compare the result with your source, restore any missing facts, and follow your school or workplace rules for AI assistance." },
    { heading: "Good input and a useful prompt", body: "Short passages with a clear audience tend to be easier to review. For example, specify “make this customer update concise and courteous” and include only details that should remain unchanged. The current tool uses a fixed professional-and-clear instruction and does not offer tone controls." },
    { heading: "Sensitive information", body: "Because text is sent to an external AI service, do not submit passwords, personal records, confidential business material, or other sensitive information. Check the privacy terms of the services involved before using this feature." },
  ] },
  bmi: { title: "BMI formula, example, and limits", intro: "For metric inputs, BMI = weight in kilograms ÷ height in metres squared. For pounds and inches, this calculator uses BMI = 703 × weight ÷ height squared.", sections: [
    { heading: "Worked example", body: "At 70 kg and 1.75 m, BMI = 70 ÷ (1.75 × 1.75) = 22.9 after rounding to one decimal place. The category bands shown here are the standard adult screening bands used by the tool." },
    { heading: "What BMI cannot tell you", body: "BMI is a screening measure based on height and weight, not a diagnosis or a direct measurement of body fat. It does not account for individual factors such as muscle mass, age, pregnancy, or health history. Discuss health concerns with a qualified clinician." },
    { heading: "Units matter", body: "Choose the matching unit mode before entering values. Metric expects kilograms and centimetres; imperial expects pounds and inches. A unit mismatch can produce a plausible-looking but incorrect number." },
  ] },
  color: { title: "Using color values in a design", intro: "A color picker is useful when you need a reusable digital color value rather than a visual guess. HEX is common in CSS, while RGB expresses red, green, and blue channel values.", sections: [
    { heading: "Choose and copy a color", body: "Use the browser color control or enter a six-digit HEX value. The page displays the selected color in HEX, RGB, and HSL and offers a small set of lighter and darker-looking shades. It does not sample colors from a photograph or another part of your screen." },
    { heading: "Accessibility check", body: "A color value alone does not guarantee readable text. Check the contrast between foreground and background colors at the size and weight where they will appear, and do not use color as the only way to communicate meaning." },
  ] },
  currency: { title: "How to use a currency estimate", intro: "The converter requests a rate from external exchange-rate APIs and multiplies your amount by the returned rate. It tries more than one provider if an earlier request fails.", sections: [
    { heading: "Example", body: "If the returned rate is 1 USD = 3.75 SAR, entering 20 USD gives an estimate of 75 SAR before rounding. The rate displayed by the tool is the provider's quote, not a promise that a bank or card issuer will use the same rate." },
    { heading: "Rate timing and fees", body: "The result identifies the provider and shows its returned rate date or timestamp when available; if it supplies no timestamp, the page shows when the rate was fetched. Banks, remittance services, and card networks may apply their own rates, spreads, or fees. Check the provider's current quote before making a transaction." },
    { heading: "If a result is unavailable", body: "The tool depends on third-party APIs and an internet connection. If all providers fail or do not return the selected currency, try again later and compare with a trusted financial provider." },
  ] },
  loan: { title: "Loan payment method and assumptions", intro: "This calculator estimates equal monthly payments for a fixed-rate, fully amortizing loan. It treats the annual rate as a nominal rate divided into monthly periods.", sections: [
    { heading: "Worked example", body: "For a $10,000 principal, 5.5% annual interest, and a five-year term, the monthly rate is 0.055 ÷ 12 and there are 60 payments. The estimated payment is about $191.01; totals can differ by a few cents because payments are rounded for display. A fractional-year term is rounded to the nearest whole month." },
    { heading: "What is excluded", body: "The estimate does not include origination fees, taxes, insurance, variable rates, payment-date effects, or lender-specific rounding. It is not a lender quote or financial advice. Compare the full annual percentage rate and written loan terms before borrowing." },
  ] },
  percentage: { title: "Five percentage questions, with examples", intro: "The calculator keeps several common percentage operations separate because the input order and formula change with the question.", sections: [
    { heading: "Examples", body: "20% of 500 = 100. 15 is 25% of 60. A change from 80 to 100 is a 25% increase: (100 − 80) ÷ 80 × 100. Adding 20% to 100 gives 120; subtracting 20% from 100 gives 80." },
    { heading: "Choosing the right operation", body: "For an increase or decrease, the first value is the starting value and the second is the ending value. The starting value cannot be zero because percentage change divides by the starting value. “Subtract 20%” here means subtract 20% of the entered number, not subtract 20 percentage points." },
  ] },
  random: { title: "Random numbers and appropriate uses", intro: "This generator is intended for everyday number selection, classroom activities, and simple simulations.", sections: [
    { heading: "Define the range first", body: "Choose a minimum below the maximum; both endpoints are included. The tool can return up to 100 values. With duplicates disabled, it draws without replacement and returns no more distinct values than the range contains." },
    { heading: "How the numbers are generated", body: "The page asks your browser for random bytes through the Web Crypto API (crypto.getRandomValues) and discards out-of-range values, so every number in your range is equally likely. The code has not been independently audited, so do not use it to award valuable prizes, run an official drawing, or make security-sensitive choices. Use a documented, auditable method for consequential selections." },
  ] },
  "image-resize": { title: "Image dimensions, aspect ratio, and output", intro: "The resizer draws the selected image onto a browser canvas at the requested pixel dimensions and downloads the canvas output as a PNG file.", sections: [
    { heading: "Preserve proportions", body: "With the ratio lock enabled, changing one dimension adjusts the other to keep the original width-to-height proportion. Unlock it only when stretching is acceptable. Resizing upward cannot restore detail that the source image does not contain." },
    { heading: "Format and transparency", body: "The current export is PNG regardless of the source format. PNG can preserve transparency supported by the browser canvas. Keep your original file if you need its original format or metadata." },
    { heading: "Local processing", body: "The resize operation uses the browser's image and canvas APIs; the image bytes are not uploaded by the resize code. Large images can use substantial device memory, so close other tabs or try a smaller source if the browser struggles." },
  ] },
  "image-compress": { title: "Image compression: format, quality, and file size", intro: "This compressor draws the image to a browser canvas and exports it at the quality value you choose. PNG uploads are exported as WebP, which preserves transparent pixels; other image types are exported as JPEG on a white background. The tool compares the original and output file sizes so you can check whether the result is useful.", sections: [
    { heading: "Compare size and visual quality", body: "The result shows the original size, output size, percentage change, and output dimensions. The quality slider ranges from 10% to 100%. Lower settings usually create smaller files, but they can also make edges, text, and fine details look worse. Inspect the preview at its intended viewing size before downloading. Compression can produce a larger file for some inputs, so check the measured result rather than assuming it will shrink." },
    { heading: "Choose the right output format", body: "A PNG upload becomes WebP and keeps transparency. Every other supported image type becomes JPEG, with transparent areas filled white. If a destination requires PNG or JPEG, check that the generated format is accepted; keep the original when you need its format, transparency, or full quality." },
    { heading: "Local processing", body: "The compression operation runs in the browser using a canvas; the image bytes are not uploaded by this feature's code. Very large images may require more memory than a phone or browser has available." },
  ] },
  qr: { title: "Before printing or sharing a QR code", intro: "A QR code stores the text or destination entered into the generator. The code itself does not verify that a link is safe or that a printed copy will scan reliably.", sections: [
    { heading: "Test the destination", body: "Scan the downloaded code with more than one camera app and confirm that it opens the intended address. Watch for accidental spaces, misspelled domains, and links that redirect somewhere unexpected." },
    { heading: "Plan for print", body: "Keep strong contrast between the code and its background, leave a clear margin around the code, and print a test at the final size. A very small code or a patterned background can make scanning unreliable." },
  ] },
  password: { title: "Password generation and safer account habits", intro: "Long, unique passwords are more useful than reusing a short password across accounts. This generator lets you choose a length and character groups for a random string.", sections: [
    { heading: "Choose length and characters", body: "Use the longest length accepted by the account and include the character groups that the service supports. A password manager can store a unique password for each account and generate secure credentials." },
    { heading: "Important security note", body: "The generator runs in the browser, but this feature has not been independently audited as a security product. For high-value accounts, use a reputable password manager's built-in generator and enable multi-factor authentication." },
  ] },
  "word-count": { title: "How this counter treats text", intro: "The counter derives its totals from the text entered in the box. Different writing apps may count hyphenated words, contractions, emoji, and line breaks differently.", sections: [
    { heading: "Check the destination's rules", body: "For a school submission, grant application, or publishing system, use the word-count rules specified by that destination. A quick example: “well-known tool” may be treated as two words by one counter and one by another." },
    { heading: "Reading-time estimate and privacy", body: "The displayed reading time assumes 200 words per minute and rounds up to a whole minute; actual reading speed varies. Text is counted in the browser and the counter does not send it to a server. Avoid pasting sensitive material into a shared or public device." },
  ] },
  "text-case": { title: "Choose a case transformation", intro: "Case conversion changes letter capitalization; it does not proofread, translate, or preserve every writing convention in every language.", sections: [
    { heading: "Examples", body: "“hello world” becomes “HELLO WORLD” in uppercase, “Hello world” in sentence case, or “helloWorld” in camelCase. Title-style capitalization varies by editorial style, so review names, acronyms, and short words afterward." },
    { heading: "Text stays in the browser", body: "The conversion is performed on the text in this page and does not require a server request. Check the result before replacing your source, especially when formatting code, identifiers, or multilingual text." },
  ] },
  unit: { title: "Supported unit groups and conversion notes", intro: "The current converter supports length, weight, temperature, speed, and area. It does not currently include volume.", sections: [
    { heading: "Temperature is different", body: "Length, weight, speed, and area use scale factors. Temperature also shifts its zero point: °F = (°C × 9/5) + 32, while K = °C + 273.15. That is why a single multiply-by-factor approach does not work for temperature." },
    { heading: "Rounding", body: "The tool rounds most converted values to six decimal places and temperature results to four. Treat the displayed value as rounded; use the unrounded source value for precision-critical engineering or laboratory work." },
  ] },
  stopwatch: { title: "Using a browser stopwatch", intro: "The stopwatch is designed for everyday timing tasks such as cooking, short workouts, and study intervals.", sections: [
    { heading: "Keep the page active", body: "Browser timers may be delayed when a tab is in the background, a device is asleep, or power-saving features are active. For official race timing, laboratory measurements, or other precision work, use dedicated timing equipment." },
    { heading: "Record your own laps", body: "If you are timing repeated intervals, write down each split as you go and use the same start and stop rule each time. Consistent procedure matters more than extra decimal places for casual comparisons." },
  ] },
  typing: { title: "How this typing score is calculated", intro: "This test runs for 30 seconds. Its displayed speed is the number of whitespace-separated words typed in that interval multiplied by two to estimate words per minute.", sections: [
    { heading: "Accuracy and scoring limits", body: "Accuracy compares each typed character with the character at the same position in the sample, then divides matching characters by the total characters typed. Extra characters count against accuracy; the WPM score is based on entered words and does not subtract errors. Treat results as a practice snapshot, not a standardized assessment." },
    { heading: "Practice consistently", body: "Use the same keyboard, language, and test duration when comparing sessions. Aim for clean keystrokes first; speed tends to be more useful when paired with accuracy." },
  ] },
  "pdf-merge": { title: "What happens when PDFs are merged", intro: "The merge tool reads each selected PDF in the browser, copies its pages in the order selected, and creates a new PDF for download.", sections: [
    { heading: "Order and compatibility", body: "Select files in the order you want them combined and confirm the final page sequence before sharing. Damaged, password-protected, unusually large, or unsupported PDFs may fail to load; this tool does not edit page content or remove restrictions." },
    { heading: "Privacy and file limits", body: "The merge code processes file bytes in the browser and does not upload the PDFs to the site's API. Files still use device memory, so very large documents may fail on memory-limited devices. Keep a copy of your originals." },
  ] },
};

type ExtraGuide = { examples: string[]; checks: string; notes?: string; faqs: { q: string; a: string }[] };

const extraGuides: Partial<Record<GuideKey, ExtraGuide>> = {
  age: {
    examples: [
      "On November 1, 2026, a birth date of January 1, 2000 gives a calendar age of 26 years, 10 months, and 0 days. The separate elapsed total is 9,801 days, or 1,400 whole weeks; the hours figure is 235,224.",
      "For a birth date of October 15, 2025, the same as-of date gives 1 year and 17 days. The calendar answer follows month boundaries, while the elapsed-day total counts the exact dates between the two midnights.",
      "If the selected birth date is November 2, 2000 while today is November 1, 2026, it is a future date and the calculator will not produce a result. Select the correct date before calculating."
    ],
    checks: "Use the date of birth in the correct calendar and check the day and month before calculating. The result is based on the visitor's device date, so a different local date can change the answer around midnight. A birthday on the 29th, 30th, or 31st also needs a rule in shorter months; this tool clamps that month anniversary to its final day. For legal age limits or official forms, follow the organization’s stated rule, including any timezone or cutoff time. The total hours are a simple 24-hours-per-whole-day estimate, not a count of elapsed clock time. The calendar breakdown and total-day figure answer different questions: one preserves month and year units, while the other is a straight interval between dates. If you are comparing two results, make sure both use the same as-of date and do not interpret a total-month count as complete calendar years.",
    notes: "For planning a birthday, the page also reports the number of days until the next birthday. That value is calculated by creating this year’s birthday date and moving it to next year if it has already passed. A February 29 birthday is represented using the last day of February in a non-leap year. This is a practical calendar convention, not a statement about how every person or institution observes the date. The tool does not ask for a birth time or location, because neither is needed for the date-only calculation.",
    faqs: [
      { q: "Why are calendar age and total days different?", a: "Calendar age groups complete years, months, and remaining days. Total days counts midnights crossed. Month lengths vary and leap days occur, so multiplying calendar years by 365 does not produce the same total." },
      { q: "Does the calculator use today's date?", a: "Yes. It reads the current date on the device when you calculate, ignoring the time of day. The result can differ if a device date is incorrect." },
      { q: "How does it handle a birth date on the 31st?", a: "When it needs to compare a month anniversary in a shorter month, the calculation uses that month’s last day. This keeps the calendar breakdown within the current date." },
      { q: "Does it include the birth date in total days?", a: "It reports the elapsed difference between the birth date and today, so the birth date itself is not counted as an extra full day." },
      { q: "Can I use this for an official age requirement?", a: "Use the organization’s rules for cutoff dates, timezone, and legal age. This page provides general calendar arithmetic and is not an official eligibility decision." }
    ]
  },
  bmi: {
    examples: [
      "With metric units, 70 kg and 175 cm means 70 ÷ 1.75² = 22.857..., displayed as BMI 22.9. The shown adult category is Normal weight because the rounded result falls between 18.5 and 24.9.",
      "At 82.5 kg and 175 cm, the calculation is 82.5 ÷ 1.75² = 26.9 after rounding to one decimal. The page labels this result Overweight using its displayed adult ranges; it is not an individual diagnosis.",
      "In imperial mode, 154 lb and 69 in uses 703 × 154 ÷ 69² = 22.7 after rounding. Switching unit modes clears the previous inputs, so enter both measurements again in the selected units."
    ],
    checks: "Check that weight and height use the selected unit system. Centimetres must be entered in metric mode and inches in imperial mode; mixing those values changes the answer dramatically. The page rounds BMI to one decimal before choosing and displaying the category. It applies adult screening bands to every calculation, so do not treat those bands as appropriate for every age or health context. BMI uses only height and weight; it does not directly measure body composition or replace a clinical assessment. Enter the measurements as numbers in the displayed units and avoid swapping height and weight fields. If a value looks surprising, check for a centimetre-versus-metre mistake first. A category boundary can also make two nearby rounded values appear to receive different labels; the displayed range is the rule the page applies, not a complete health assessment.",
    notes: "A useful way to check the arithmetic is to convert centimetres to metres before squaring height. For 175 cm, that is 1.75 m, and the denominator is 1.75 × 1.75. In imperial mode the page uses a factor of 703 with pounds and inches. The two routes produce a comparable BMI scale when their units are entered correctly. The visual scale is a display aid; the numeric result and its limitations matter more than the marker’s position.",
    faqs: [
      { q: "What formula does this BMI tool use?", a: "Metric: kilograms divided by height in metres squared. Imperial: 703 multiplied by pounds, divided by inches squared. The result is rounded to one decimal place." },
      { q: "Why does changing units clear my entries?", a: "The tool clears the two input fields when you switch between kg/cm and lb/in so values are not accidentally reused under a different unit label." },
      { q: "What do the category labels mean?", a: "They reflect the adult BMI bands shown on the page: below 18.5, 18.5–24.9, 25–29.9, and 30 or above. They are screening categories, not a diagnosis." },
      { q: "Can BMI describe my health on its own?", a: "No. It uses height and weight only and does not account for all individual characteristics. Discuss personal health questions with a qualified clinician." },
      { q: "Why might my result differ from another calculator?", a: "Check the units and rounding. Some calculators also use different conventions or display more decimal places, while this page rounds to one decimal." }
    ]
  },
  currency: {
    examples: [
      "If a provider returns 1 USD = 3.75 SAR, entering 20 USD gives 75 SAR before display rounding. This arithmetic example uses a stated rate to explain the method; live provider quotes change and are shown by the converter when you use it.",
      "If a returned rate is 1 EUR = 1.08 USD, 50 EUR gives 54 USD. The converted amount uses the same single rate as the displayed rate, rather than fetching another quote for each amount.",
      "If a provider returns 1 USD = 280 PKR, 10 USD gives 2,800 PKR before rounding. The result is an estimate; a bank, exchange service, or card issuer can quote a different amount after its own spread or fees."
    ],
    checks: "Check the direction of the pair before reading the result: 1 FROM = rate TO. Rates can be quoted at different times and providers may have different update schedules. The converter estimates a conversion from a provider’s rate and does not include your bank’s exchange spread, card-network rules, transfer charges, or cash fees. If a request fails, confirm your connection and try again later. For an actual transfer or purchase, confirm the amount on the provider’s own payment screen. A mid-market quote is a reference rate between market participants; a retail provider may include a margin in the price it offers a customer. The same currency pair can therefore have one reference rate and a different buy, sell, cash, remittance, or card rate. Check whether a quote is for buying or selling currency and whether fees are separate before comparing two offers.",
    notes: "The pair’s direction matters because the reverse rate is not simply the same number. If one unit of A buys 2 units of B, one unit of B buys about 0.5 units of A before rounding. The converter requests rates from its configured providers and falls back when a request fails or does not contain a usable selected rate. A timestamp identifies when a provider says its quote applies; a fetch time only identifies when the page requested the data. Those times should not be treated as interchangeable.",
    faqs: [
      { q: "Is this the rate my bank or card will use?", a: "Not necessarily. Banks and card providers can use their own rates and add spreads or fees. Check the amount shown by the provider completing your transaction." },
      { q: "Why can two exchange-rate providers show different values?", a: "They can update at different times and use different rate sources or calculation methods. The page uses the first available response in its fallback order." },
      { q: "Does the conversion include transfer fees?", a: "No. It multiplies by the returned exchange rate only. Transfer charges, cash fees, and card issuer fees are not included." },
      { q: "Why does a currency pair sometimes fail?", a: "An API can be unavailable or may not return the selected currency. The page tries its configured providers; if none supplies a usable rate, it shows an error." },
      { q: "How should I read 1 USD = X PKR?", a: "It means one US dollar is estimated to equal X Pakistani rupees at the returned quote. Multiply your USD amount by X to estimate the PKR amount." }
    ]
  },
  loan: {
    examples: [
      "For a principal of 10,000, a 5.5% annual rate, and a 5-year term, the monthly rate is 0.055 ÷ 12 and the number of payments is 60. The fixed-payment formula gives about $191.01 per month, or about $11,460.70 total before display rounding.",
      "For a PKR 1,000,000 principal at 12% annually over 3 years, the monthly rate is 0.01 and there are 36 payments. The tool estimates about PKR 33,214.31 per month and PKR 195,715.15 total interest; choose Rs in the currency selector so the results are labelled in rupees. That label is for your own figures, not a currency conversion.",
      "At 0% annual interest, a 12,000 principal over 12 months is divided evenly: 12,000 ÷ 12 = 1,000 per month, with 12,000 total paid and no interest. A non-whole-year term is converted to a whole number of monthly payments by rounding years × 12."
    ],
    checks: "Enter the annual rate as a percentage, such as 5.5 for 5.5%, not 0.055. The formula assumes equal monthly payments, a fixed nominal annual rate divided by 12, and a fully amortizing balance. Fees, insurance, taxes, variable rates, and payment dates are not included. Choose the currency that matches your amount in the currency selector, and keep all inputs in that same unit; the selector is a label, not a conversion. Compare written lender terms and total costs before deciding. The term is entered in years and converted to months; fractional years are rounded to the nearest whole payment count. A result should not be compared with a quote using a different repayment interval or a different fee structure. For a real loan, ask the lender for its payment schedule and total amount payable.",
    notes: "At the beginning of a standard amortizing schedule, interest is calculated on a larger remaining balance. As payments reduce that balance, the interest portion generally falls and the principal portion rises. The calculator summarizes the estimated payment and total interest for the whole term; it does not provide a month-by-month schedule. A longer term can lower the estimated monthly payment while increasing the number of payments. Compare both the monthly amount and total payable rather than choosing based on a single figure.",
    faqs: [
      { q: "What payment formula is used?", a: "For a nonzero monthly rate r, payment = principal × r × (1+r)^n ÷ ((1+r)^n−1). At 0% interest, principal is divided by the number of payments." },
      { q: "How does the tool get the monthly interest rate?", a: "It converts the entered annual percentage to a decimal and divides by 12. This is the tool’s fixed-rate monthly assumption." },
      { q: "Why is the total interest only an estimate?", a: "The estimate excludes lender fees, insurance, taxes, rate changes, and payment-date rules. The displayed monthly amount is rounded to cents." },
      { q: "Can I enter a PKR amount?", a: "Yes. Choose Rs in the currency selector, keep all amounts in rupees, and the results will be labelled in rupees. The selector is a label, not a currency conversion." },
      { q: "What happens with a term such as 2.5 years?", a: "The tool multiplies years by 12 and rounds to the nearest whole monthly payment count. Its formula then uses that integer number of payments." }
    ]
  },
  percentage: {
    examples: [
      "To find 15% of 240, multiply 240 × 15 ÷ 100 = 36. That is the amount of the discount; the price after a 15% reduction is 240 − 36 = 204.",
      "A value rises from 80 to 100. The change is 20, and 20 ÷ 80 × 100 = 25%, so this is a 25% increase. The starting value is the denominator.",
      "A value drops from 100 to 80. The change is −20, and −20 ÷ 100 × 100 = −20%, so the result is a 20% decrease. Adding 20% to 100 instead gives 120; these are different operations."
    ],
    checks: "Choose the operation that matches your question. “What is 20% of 100?” returns 20; “add 20% to 100” returns 120; and “increase from 100 to 120” reports a 20% change. For percent change, the original value belongs in the denominator and cannot be zero. A percent is a relative change; percentage points describe the direct difference between two percentage values. Use the same units for both values and confirm which one is the starting amount. A discount amount is not the same as a final price: calculate the percentage first, then add or subtract it if the question asks for the new total. Percent change can be negative when the final value is lower. Keep the order of original and new values consistent with the question you are answering.",
    notes: "The page includes several operations because everyday questions use similar language but require different formulas: finding a part, finding what percentage one value is of another, computing a change, or applying a percentage to a base. Read the mode label before entering numbers. In change mode, the first value is the baseline and the second is the later value. In add or subtract mode, the entered percentage is applied to the original amount. The result is rounded to four decimal places and trailing zeroes are removed, so display precision may differ from a spreadsheet with more decimals. If you are checking a discount, confirm whether the percentage applies to the listed price before taxes or to another total; that business rule is outside the calculator. Keep the intermediate discount and final amount labeled so you do not report one as the other.",
    faqs: [
      { q: "How do I find a percentage of a number?", a: "Multiply the number by the percentage and divide by 100. For example, 15% of 240 is 36." },
      { q: "How do I calculate percentage increase?", a: "Subtract the original from the new value, divide by the original, then multiply by 100. A rise from 80 to 100 is 25%." },
      { q: "How do I calculate percentage decrease?", a: "Subtract the original from the new value and divide by the original. A negative result means a decrease; from 100 to 80 is −20%." },
      { q: "Why can’t percent change start at zero?", a: "The formula divides by the starting value. Division by zero is undefined, so there is no finite percentage-change result from a zero baseline." },
      { q: "What is the difference between percent and percentage points?", a: "A percent change compares a difference to a starting value. Percentage points are the arithmetic difference between two percentages, such as 12% minus 10% = 2 percentage points." }
    ]
  },
  "image-resize": {
    examples: [
      "A 2400 × 1600 image has a 3:2 ratio. With the ratio lock on, setting the width to 1200 adjusts the height to 800; the download is a 1200 × 800 PNG.",
      "A square 1000 × 1000 source resized to 500 × 500 stays square. The output dimensions are exactly the values used to draw the image on the canvas.",
      "Entering 7000 × 6000 requests 42 million pixels, which exceeds the tool’s 40-megapixel limit. It shows an error instead of trying to create that canvas."
    ],
    checks: "Pixel dimensions are not the same as print size: print size also depends on resolution settings in the destination application. Keep the ratio lock enabled unless stretching is intentional. The lock uses the ratio measured from the uploaded image and rounds the adjusted side to a whole pixel. The tool rejects non-whole, non-positive dimensions and requests above 40 million pixels. Resizing upward enlarges pixels but cannot recreate missing detail. The output is PNG, and the original file is not changed. If the image is for a website, check the destination’s expected width and height rather than choosing a size only by appearance. For print work, confirm both pixel dimensions and the print resolution required by the printer. Resizing uses browser memory, so a large source or output can challenge a phone or older device even when it stays under the pixel limit.",
    notes: "The resizer first loads the image to read its original width and height. With the ratio lock on, the second dimension is recalculated from that original ratio and rounded to the nearest whole pixel. Once you choose dimensions, the browser draws the source onto a new canvas of exactly that size and creates a PNG blob for download. The new file is a raster image; metadata from the source is not described as preserved. Preview the result and keep the untouched original if you may need to change size or format later. A PNG output is useful when you need lossless pixel storage or transparency, but the file can be larger than a compressed photographic format. The tool’s role is to set dimensions; use the compressor when file size is the main concern.",
    faqs: [
      { q: "Does resizing change the original file?", a: "No. The browser draws a new canvas image and offers that PNG as a separate download. Keep your source if you may need it again." },
      { q: "What does Lock Aspect Ratio do?", a: "It adjusts the other dimension from the original width-to-height ratio when you change one dimension, helping avoid stretching." },
      { q: "Why does the tool reject very large dimensions?", a: "The page limits the requested canvas to 40 million pixels and requires positive whole-number dimensions to reduce excessive memory use." },
      { q: "Is the downloaded image JPEG or PNG?", a: "The current canvas export is PNG, regardless of the input file format." },
      { q: "Will a larger output look sharper?", a: "Not necessarily. Upscaling makes the pixel dimensions larger but cannot restore detail that was absent from the source." }
    ]
  },
  "image-compress": {
    examples: [
      "Upload a 1200 × 800 PNG and choose 70% quality. The tool exports WebP and keeps alpha transparency; the exact byte size depends on the image content and the browser’s encoder, so use the displayed size rather than assuming a fixed reduction.",
      "Upload a 1600 × 1200 JPG and set quality to 50%. The tool exports JPEG at the same dimensions, then reports the actual output size and whether it is smaller or larger than the source.",
      "A transparent PNG with a 300 × 300 canvas is exported as transparent WebP. If the destination only accepts JPEG, this output may not fit; use a compatible workflow and keep the original."
    ],
    checks: "Quality is a browser encoder setting, not a guaranteed file-size target. Lower settings often reduce detail, but the resulting size depends on the image and encoder. PNG uploads become WebP; every other image type is requested as JPEG with a white canvas background, so transparency is not retained for those sources. Pixel dimensions stay the same. Compare the reported bytes and inspect fine text, edges, and transparent areas at the intended display size. Keep the original when format or quality matters. Screenshots, diagrams, and small text can show compression artifacts more clearly than photographs. If the output is larger, try a lower quality or use a smaller image with the resizer, then compare again. The tool does not promise a particular upload limit or target size; check the requirements of the site or service where you plan to use the file.",
    notes: "The quality control starts at 70% and can be adjusted from 10% to 100% in five-point steps. Compression redraws the file at its existing dimensions and asks the browser canvas encoder for the selected output format. Because the browser performs that encoding, two browsers may produce different byte counts for the same source and quality setting. The original remains available as the uploaded file, and the page reports the output format, dimensions, and measured size after the operation completes.",
    faqs: [
      { q: "Will compression always make a smaller file?", a: "No. Some source files are already compact, and an encoded output may be larger. The tool reports the measured change so you can decide." },
      { q: "What happens to a PNG upload?", a: "It is exported as WebP, which can preserve alpha transparency when supported by the browser canvas." },
      { q: "What happens to JPG or other image types?", a: "They are exported as JPEG. The canvas is filled white first, so transparent source pixels become white." },
      { q: "Does the compressor reduce image dimensions?", a: "No. It uses the source width and height. Use the Image Resizer if you need different pixel dimensions." },
      { q: "Can I guarantee an output under 100 KB?", a: "No fixed target is guaranteed. Adjust quality, compress, and check the actual displayed size; the result depends on the image and browser encoder." }
    ]
  },
  "word-count": {
    examples: [
      "For “Quick test.” the counter reports 2 words, 11 characters, 10 characters without whitespace, 1 sentence, 1 paragraph, and a 1-minute reading estimate.",
      "For “One\nTwo!” it reports 2 words, 8 characters, 6 without whitespace, 1 sentence, 2 paragraphs, and 1 minute of estimated reading time.",
      "A 450-word passage is shown as a 3-minute estimate because the calculation assumes 200 words per minute and rounds up."
    ],
    checks: "Words are split on whitespace, while characters count JavaScript string length, including spaces and line breaks. Sentences are split around periods, exclamation marks, and question marks; paragraphs are separated by one or more newlines. These are practical counts rather than a universal editorial standard. If a school or publisher defines its own rules for hyphens, citations, or headings, use that destination’s count as the final check.",
    faqs: [
      { q: "How are words counted?", a: "The text is trimmed and split wherever there is whitespace. Punctuation stays attached to its word." },
      { q: "What does characters without spaces remove?", a: "It removes all whitespace characters, including spaces, tabs, and line breaks, from the character count." },
      { q: "How is reading time estimated?", a: "The page assumes 200 words per minute and rounds any nonzero result up to a whole minute. It is only an estimate." }
    ]
  },
  unit: {
    examples: [
      "For length, 5 kilometres to metres uses a factor of 1,000, giving 5,000 metres. The unit converter uses base factors for length, weight, speed, and area.",
      "Temperature needs an offset: 68°F converts to (68 − 32) × 5 ÷ 9 = 20°C. It is not calculated by multiplying Fahrenheit by one fixed factor.",
      "For mass, 2 kilograms equals about 4.409245 pounds using the converter’s unit factors; the displayed value can show more digits than a quick mental estimate."
    ],
    checks: "Pick the correct category before choosing units. Length, weight, speed, and area use scale factors; temperature uses separate conversion formulas because the scales have different zero points. The tool supports these five categories and does not currently include volume. Results are rounded or formatted for display, so keep more precision in your source if the calculation is for engineering or laboratory use. A unit name can have different meanings in different systems; confirm the exact unit label before copying a result. For area, remember that a length conversion factor is squared: doubling each side of a square makes four times the area. For speed, the time unit matters as much as the distance unit. If you are comparing values from different sources, check whether they use metric or customary units and whether values are rounded.",
    notes: "For scale-factor categories, the converter first turns the entered value into a base unit and then divides by the target unit’s factor. For temperature it uses dedicated equations for Celsius, Fahrenheit, and Kelvin. This approach helps avoid treating temperature like an ordinary length measurement. When checking a result by hand, write down the source and target labels and keep units alongside every number. For example, a numeric result without its unit can be easy to misread when copied into a worksheet, recipe, or report. Conversion accuracy also depends on the definition of the selected unit. A metric kilometre is fixed at 1,000 metres, while some customary units have historically had regional variants. The page’s named options determine which factor is applied, so select the exact listed unit rather than relying only on a familiar abbreviation. For a homework answer, show both the conversion and the resulting unit to make your method easy to check.",
    faqs: [
      { q: "Which categories are supported?", a: "The current page supports length, weight, temperature, speed, and area. It does not include volume." },
      { q: "Why does temperature use a different formula?", a: "Celsius, Fahrenheit, and Kelvin have different zero points as well as different step sizes. Conversion therefore requires both scaling and an offset." },
      { q: "How many decimal places are shown?", a: "The code formats temperature to four decimal places. Other categories use a precision-based format that can retain up to ten significant digits." },
      { q: "Why does my result differ from a rounded chart?", a: "Quick-reference charts often round conversion factors. This tool calculates from its internal factors and then formats the result for display." },
      { q: "Can I convert volume here?", a: "No. Volume is not one of the available categories; use a dedicated volume conversion source for that task." }
    ]
  },
  "pdf-merge": {
    examples: [
      "Select a 2-page PDF followed by a 3-page PDF. The merged document contains 5 pages: the first file’s two pages, then the second file’s three pages.",
      "Select three PDFs in the order A, B, C. Their pages are copied in that same selected order into the output; check the sequence before sharing.",
      "Selecting only one PDF produces an error because the tool requires at least two files to merge."
    ],
    checks: "Choose at least two valid PDF files and review their selection order. The merge operation copies pages but does not edit their contents, redact information, or remove password restrictions. Encrypted, damaged, or unusually large documents may fail. The browser processes the files locally, but large files can still use substantial device memory. Keep the originals until you have opened and checked the merged result.",
    faqs: [
      { q: "Are my PDFs uploaded to the site?", a: "The merge code reads the files in the browser and does not send their contents to the site’s API." },
      { q: "Can I merge only one file?", a: "No. The tool requires at least two PDF files." },
      { q: "Does merging remove a PDF password?", a: "No. Password-protected or restricted files may fail to load; the tool does not remove protections." }
    ]
  }
};

export default function ToolGuide({ guide }: { guide: GuideKey }) {
  const content = guides[guide];
  const extra = extraGuides[guide] ?? { examples: [], checks: "", faqs: [] };
  const faqSchema = extra.faqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: extra.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
  } : null;
  return (
    <>
    <section aria-labelledby={`${guide}-guide-title`} className="mx-auto my-12 max-w-4xl space-y-5 px-6 leading-7 text-gray-700">
      {faqSchema && <JsonLd data={faqSchema} />}
      <h2 id={`${guide}-guide-title`} className="text-2xl font-semibold text-gray-900">How this tool works</h2>
      <h3 className="text-xl font-semibold text-gray-900">{content.title}</h3>
      <p>{content.intro}</p>
      {content.sections.map((section) => (
        <div key={section.heading}>
          <h3 className="text-lg font-semibold text-gray-900">{section.heading}</h3>
          <p className="mt-1">{section.body}</p>
        </div>
      ))}
      {extra.examples.length > 0 && <div>
        <h3 className="text-lg font-semibold text-gray-900">Worked examples</h3>
        {extra.examples.map((example) => <p key={example} className="mt-2">{example}</p>)}
      </div>}
      {extra.checks && <div><h3 className="text-lg font-semibold text-gray-900">Common mistakes and things to check</h3><p className="mt-1">{extra.checks}</p></div>}
      {extra.notes && <p>{extra.notes}</p>}
      {extra.faqs.length > 0 && <div>
        <h3 className="text-lg font-semibold text-gray-900">Frequently asked questions</h3>
        {extra.faqs.map(({ q, a }) => <div key={q} className="mt-3"><h4 className="font-semibold text-gray-900">{q}</h4><p>{a}</p></div>)}
      </div>}
      <p className="border-t border-gray-200 pt-3 text-sm text-gray-500">Tool notes are based on the current implementation and are provided for general information. Review important outputs before relying on them.</p>
    </section>
    <ToolExtras href={guideRoutes[guide]} />
    </>
  );
}
