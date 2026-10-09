type GuideKey =
  | "age" | "ai-rewrite" | "bmi" | "color" | "currency" | "loan"
  | "percentage" | "random" | "image-resize" | "image-compress" | "qr"
  | "password" | "word-count" | "text-case" | "unit" | "stopwatch"
  | "typing" | "pdf-merge";

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
    { heading: "Rate timing and fees", body: "Exchange-rate providers may update at different intervals, and the tool does not show a timestamp for the quote. Banks, remittance services, and card networks may apply their own rates, spreads, or fees. Check the provider's current quote before making a transaction." },
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
  random: { title: "Random numbers and appropriate uses", intro: "This generator is intended for casual number selection, classroom activities, and simple simulations where cryptographic security is not required.", sections: [
    { heading: "Define the range first", body: "Choose a minimum below the maximum; both endpoints are included. The tool can return up to 100 values. With duplicates disabled, it draws without replacement and returns no more distinct values than the range contains." },
    { heading: "Randomness limitation", body: "The page uses JavaScript Math.random(), which is suitable for casual use but is not a cryptographic or independently audited random source. Do not use it to award valuable prizes, run an official drawing, or make security-sensitive choices. Use a documented, auditable method for consequential selections." },
  ] },
  "image-resize": { title: "Image dimensions, aspect ratio, and output", intro: "The resizer draws the selected image onto a browser canvas at the requested pixel dimensions and downloads the canvas output as a JPEG file.", sections: [
    { heading: "Preserve proportions", body: "With the ratio lock enabled, changing one dimension adjusts the other to keep the original width-to-height proportion. Unlock it only when stretching is acceptable. Resizing upward cannot restore detail that the source image does not contain." },
    { heading: "Format and transparency", body: "The current export is JPEG regardless of the source format. JPEG does not preserve transparent pixels, so check logos, icons, and cutout images after export. Keep your original file if you may need a different format later." },
    { heading: "Local processing", body: "The resize operation uses the browser's image and canvas APIs; the image bytes are not uploaded by the resize code. Large images can use substantial device memory, so close other tabs or try a smaller source if the browser struggles." },
  ] },
  "image-compress": { title: "JPEG compression: quality and file size", intro: "This compressor draws the image to a browser canvas and exports a JPEG at the quality value you choose. A lower quality setting usually makes a smaller file, but the result depends on the image.", sections: [
    { heading: "Compare the output", body: "Photographs often tolerate moderate JPEG compression better than screenshots, diagrams, or images with small text. Try a middle setting first and inspect edges and text at normal viewing size. A canvas export is not guaranteed to be smaller than every original file." },
    { heading: "Format and transparency", body: "The output is JPEG even when you upload a PNG or another image type. JPEG does not retain transparency, and this tool does not report the before-and-after file sizes. Keep the original and verify the downloaded result." },
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

export default function ToolGuide({ guide }: { guide: GuideKey }) {
  const content = guides[guide];
  return (
    <section aria-labelledby={`${guide}-guide-title`} className="mx-auto my-12 max-w-4xl space-y-5 px-6 leading-7 text-gray-700">
      <h2 id={`${guide}-guide-title`} className="text-2xl font-semibold text-gray-900">{content.title}</h2>
      <p>{content.intro}</p>
      {content.sections.map((section) => (
        <div key={section.heading}>
          <h3 className="text-lg font-semibold text-gray-900">{section.heading}</h3>
          <p className="mt-1">{section.body}</p>
        </div>
      ))}
      <p className="border-t border-gray-200 pt-3 text-sm text-gray-500">Tool notes are based on the current implementation and are provided for general information. Review important outputs before relying on them.</p>
    </section>
  );
}
