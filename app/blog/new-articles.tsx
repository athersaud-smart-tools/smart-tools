import Link from "next/link";

export type NewArticle = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  table: { headers: string[]; rows: string[][]; caption: string };
  takeaways: string[];
  faq: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

export const newArticles: NewArticle[] = [
  {
    slug: "calculate-monthly-loan-payments",
    title: "How to Calculate Monthly Loan Payments (With Worked Examples)",
    description: "Learn the fixed-payment loan formula, follow two worked examples, and compare estimates with the lender’s full terms.",
    intro: "A monthly payment estimate helps you compare loan scenarios before you apply. It depends on the amount borrowed, the annual interest rate, and the number of monthly payments. This guide walks through the calculation, shows two examples, and explains what a basic calculator leaves out. The result is a planning estimate; it is not a lender quote or a recommendation to borrow.",
    sections: [
      { heading: "The fixed-payment formula", paragraphs: [
        "For a fixed-rate loan with equal monthly payments, the standard amortizing-payment formula is M = P × r × (1 + r)^n ÷ ((1 + r)^n − 1). Here, M is the monthly payment, P is the principal, r is the monthly interest rate as a decimal, and n is the total number of monthly payments. The formula spreads principal and interest across the term so the balance is scheduled to reach zero after the last payment.",
        "To convert an annual percentage rate into the calculator’s monthly rate, divide the percentage by 100 and then divide by 12. For example, 5.5% becomes 0.055 ÷ 12, or approximately 0.0045833 per month. Convert a term stated in years into payments by multiplying it by 12. If the rate is zero, the formula simplifies to principal divided by the number of payments."
      ]},
      { heading: "Worked examples", paragraphs: [
        "Example one: borrow $10,000 at 5.5% annually for five years. The term is 60 monthly payments and the monthly rate is 0.055 ÷ 12. Substituting those values gives an estimated payment of $191.01. Multiplying the unrounded payment by 60 gives a total of $11,460.70, or about $1,460.70 in interest. The displayed monthly amount is rounded to cents, so multiplying the rounded display may differ by a few cents.",
        "Example two: suppose the principal is $50,000, the annual rate is 8%, and the term is four years. The monthly rate is 0.08 ÷ 12 and there are 48 payments. The formula gives about $1,220.65 per month, about $58,591.01 total, and about $8,591.01 in interest. The SmartEdgeTools calculator shows results in dollars."
      ]},
      { heading: "Compare more than the monthly amount", paragraphs: [
        "A lower payment can come from a longer repayment term. That may make each month easier to budget, but it also means more payments are made. When comparing offers, enter the same principal and use each offer’s rate and term. Record the monthly payment, total repayment, and total interest. Then compare those estimates with the lender’s disclosed fees and payment schedule.",
        "If two offers have different payment frequencies, variable rates, introductory periods, or fees added to the loan balance, a simple fixed monthly calculation will not make them directly comparable. Ask the lender for a written schedule and the total amount payable under the actual agreement."
      ]},
      { heading: "Common mistakes and things to check", paragraphs: [
        "Enter 5.5 for a rate of 5.5%, not 0.055. Enter the loan term in years, not months. Make sure the principal and any comparison totals use the same currency and unit. The page rounds a fractional year to a whole number of monthly payments, so a term such as 2.5 years becomes 30 payments.",
        "The estimate assumes a fixed nominal annual rate divided into monthly periods and equal payments on a fully amortizing balance. It does not add taxes, insurance, origination charges, late fees, or payment-date adjustments. It also does not model a variable rate. Check whether the lender describes an annual percentage rate, a nominal interest rate, or another figure, because the number entered must match the calculator’s simple annual-rate assumption."
      ]},
      { heading: "A repeatable way to check an estimate", paragraphs: [
        "First, write down the principal, annual rate, and number of years from the offer. Next, calculate the expected number of monthly payments and confirm the rate conversion. Run the same calculation in the Loan Calculator, then compare its monthly payment and total with the lender’s schedule. If the values disagree, check rounding, fees, a different compounding convention, or an irregular payment date before assuming either figure is wrong.",
        "The calculator is useful for “what if” comparisons: changing only the term shows how payment size and total interest move under the same formula. Changing several inputs at once makes it harder to see why the result changed, so compare one scenario at a time and keep a short note of each set of inputs."
      ]}
    ],
    table: { caption: "Worked examples using a fixed annual rate and monthly payments", headers: ["Principal", "Annual rate", "Term", "Estimated monthly payment"], rows: [["$10,000", "5.5%", "5 years", "$191.01"], ["$50,000", "8%", "4 years", "$1,220.65"]] },
    takeaways: ["Use the monthly rate and total number of payments in the formula.", "Compare total repayment as well as the monthly payment.", "Confirm fees, rate rules, and the lender’s written schedule."],
    faq: [
      { question: "What happens if the interest rate is zero?", answer: "Divide the principal by the number of monthly payments. The tool handles a zero rate separately from the interest-bearing formula." },
      { question: "Does this estimate include lender fees?", answer: "No. It uses the principal, annual rate, and term only. Check the lender’s documents for fees, insurance, taxes, and other charges." },
      { question: "Why does my lender quote differ by a few cents?", answer: "The calculator rounds the displayed payment to cents, while a lender may use its own rounding, payment dates, and calculation conventions." }
    ],
    related: [{ href: "/loan-calculator", label: "Loan Calculator" }, { href: "/percentage-calculator", label: "Percentage Calculator" }, { href: "/currency-converter", label: "Currency Converter" }]
  },
  {
    slug: "percentage-increase-decrease",
    title: "How to Calculate Percentage Increase and Decrease",
    description: "Use the original value as the baseline, calculate percentage change, and distinguish percent from percentage points.",
    intro: "Percentage change describes how large a change is compared with the starting value. It is useful for checking price changes, scores, measurements, and other comparisons, but the direction of the calculation matters. This guide shows the formula for increases and decreases, works through examples, and explains how to avoid mixing up a percentage amount with a final value.",
    sections: [
      { heading: "The percentage-change formula", paragraphs: [
        "Subtract the original value from the new value. Divide that difference by the original value, then multiply by 100. In symbols: percentage change = ((new value − original value) ÷ original value) × 100. A positive answer represents an increase, a negative answer represents a decrease, and zero means the values are equal.",
        "The original value belongs in the denominator because percentage change asks how large the change is relative to where you started. If the starting value is zero, division by zero is undefined, so there is no ordinary finite percentage-change result. A later value of zero can be used: changing from 40 to zero is a 100% decrease."
      ]},
      { heading: "Worked examples", paragraphs: [
        "Increase: a score changes from 80 to 100. The difference is 100 − 80 = 20. Divide 20 by the starting value 80 and multiply by 100: 20 ÷ 80 × 100 = 25%. The score increased by 25% relative to its original value.",
        "Decrease: a price changes from 240 to 204. The difference is 204 − 240 = −36. Then −36 ÷ 240 × 100 = −15%. This is a 15% decrease. The amount of the decrease is 36; the percentage decrease is 15%; the new price is 204. Those are three related but distinct values.",
        "A percentage of a value is another operation. Fifteen percent of 240 is 240 × 15 ÷ 100 = 36. Subtracting that amount gives 204. The Percentage Calculator includes modes for finding a percentage, finding what percentage one number is of another, calculating change, and adding or subtracting a percentage."
      ]},
      { heading: "Percent versus percentage points", paragraphs: [
        "Percent describes a relative amount, while percentage points describe the arithmetic gap between two percentages. If a rate rises from 10% to 12%, the difference is 2 percentage points. Relative to the starting 10%, the increase is 20% because 2 ÷ 10 × 100 = 20%. The two descriptions answer different questions.",
        "When you read a report or compare a grade, check whether it asks for a percentage-point difference or percentage change. Avoid describing a move from 10% to 12% as simply a “2% increase,” because that phrase can be read in more than one way."
      ]},
      { heading: "Common mistakes and things to check", paragraphs: [
        "The most common error is dividing by the new value instead of the original. Another is reversing the values: the formula’s first input is the starting amount and its second is the ending amount. Use consistent units, such as comparing kilograms with kilograms, and do not compare a gross figure with a net figure unless that is the question you intend to answer.",
        "A 20% increase followed by a 20% decrease does not return to the original number. Starting at 100, a 20% increase gives 120; decreasing 120 by 20% gives 96 because the second change is calculated from 120. The base changes after each operation."
      ]},
      { heading: "A quick workflow", paragraphs: [
        "Write the original and new values with labels before calculating. Decide whether you need the change amount, the percentage change, or the result after adding or subtracting a rate. Run the correct operation, then check the sign and units. If you are reporting the result, include the baseline so someone reading it can understand what the percentage compares.",
        "For discounts, taxes, and fees, confirm what amount the rate applies to. A calculator can apply a percentage to an input, but it cannot know whether a shop, school, or service applies the rate before or after another charge. That rule comes from the situation, not the arithmetic."
      ]},
      { heading: "Explain the baseline when sharing a result", paragraphs: [
        "A percentage is easier to interpret when the baseline is clear. Instead of writing only “up 25%,” say what changed and from which starting figure, such as “the score increased from 80 to 100, a 25% increase.” This makes the direction and denominator visible to another reader. It also prevents confusion between a percentage-point difference and a relative percentage change.",
        "When values are rounded, calculate with the original values if you have them. Rounding the starting and ending numbers first can slightly change the final percentage. If you only have rounded data, state that the result is based on those displayed figures. The calculator returns up to four decimal places and removes trailing zeros, so a concise display does not mean the underlying comparison was exact to that many decimal places."
      ]}
    ],
    table: { caption: "Three percentage questions using the same starting amount", headers: ["Question", "Calculation", "Answer"], rows: [["15% of 240", "240 × 15 ÷ 100", "36"], ["Change from 80 to 100", "(100 − 80) ÷ 80 × 100", "25% increase"], ["Change from 240 to 204", "(204 − 240) ÷ 240 × 100", "15% decrease"]] },
    takeaways: ["For percentage change, divide by the original value.", "A negative percentage change means a decrease.", "Percentage points and percent change are different comparisons."],
    faq: [
      { question: "Can percentage change be negative?", answer: "Yes. When the new value is lower than the original, the formula returns a negative percentage, which represents a decrease." },
      { question: "Can I calculate a percentage change from zero?", answer: "No ordinary percentage-change result exists from a zero starting value because the formula divides by the original value." },
      { question: "Is a 2 percentage-point rise the same as a 2% increase?", answer: "No. Percentage points are the direct difference between two percentages. A percent increase compares that difference with the starting percentage." }
    ],
    related: [{ href: "/percentage-calculator", label: "Percentage Calculator" }, { href: "/loan-calculator", label: "Loan Calculator" }, { href: "/final-grade-calculator", label: "Final Grade Calculator" }]
  },
  {
    slug: "compress-image-under-100-kb",
    title: "How to Compress an Image to Under 100 KB Without Losing Quality",
    description: "Reduce an image file carefully, understand what quality settings can and cannot do, and check the actual result against a 100 KB limit.",
    intro: "A file-size limit such as 100 KB can be confusing because changing a quality slider does not guarantee a particular output size. The result depends on the image content, dimensions, format, and browser encoder. This guide gives you a practical sequence for reaching a target while checking visual quality, and explains what the SmartEdgeTools compressor actually exports.",
    sections: [
      { heading: "Start with the upload requirement", paragraphs: [
        "First check whether the destination means 100 KB in decimal units or 100 KiB in binary units, and whether it accepts JPEG, PNG, or WebP. Some forms show only a maximum size without describing their unit convention. Use the displayed requirement as the final test and leave a little room below the limit if the form’s rounding is unclear.",
        "If the image dimensions are much larger than the space where it will appear, resize it before compressing. Reducing pixel dimensions can reduce the amount of image data an encoder needs to store. Keep a copy of the original file so that you can try again without accumulating quality loss from repeated saves."
      ]},
      { heading: "A step-by-step compression workflow", paragraphs: [
        "Upload the source to the Image Compressor and note the original size and dimensions. The control starts at 70% and ranges from 10% to 100%. Try an initial setting, compress once, and read the measured output size. If the result is above the limit, reduce quality in a small step and compare again. Stop when it meets the requirement and still looks acceptable at the size where it will be used.",
        "The tool keeps the source dimensions. A PNG upload is exported as WebP, which can preserve transparency. Other image types are exported as JPEG on a white background; transparent areas in those inputs will appear white. The generated format matters: a file below 100 KB is not useful if the receiving form rejects its format."
      ]},
      { heading: "Examples: measure instead of guessing", paragraphs: [
        "Suppose a 900 KB photograph must fit a 100 KB limit. If the first output is 180 KB, lower the quality setting and compress again. The exact percentage needed cannot be predicted from the original size alone, so use the result the page measures. Inspect faces, gradients, and fine edges after each attempt.",
        "For a 240 KB screenshot with small text, a moderate quality reduction may make letters look soft before the output reaches 100 KB. Try resizing to the required display dimensions first, then compress. If the text is still hard to read, keep a larger file or use a format accepted by the destination that preserves the details you need.",
        "For a transparent 120 KB PNG logo, the tool exports WebP. Check that the destination accepts WebP and inspect the transparent edge. If the destination requires PNG, this compressor’s output is not a PNG, so keep the original and use a compatible tool for that requirement."
      ]},
      { heading: "Why file size and visual quality trade off", paragraphs: [
        "A lossy encoder can discard image information to reduce bytes. At lower quality, fine detail, edge sharpness, color transitions, or text can show artifacts. Photographs may hide some compression changes at normal viewing size, while screenshots and diagrams often make them easy to notice. Look at the actual preview at the intended size instead of judging only a zoomed-in crop or a file-size number.",
        "The same source and quality setting can produce different byte counts in different browsers because the canvas encoder is supplied by the browser. Compression can even create a file larger than its source. The page reports that change instead of assuming every operation shrinks a file."
      ]},
      { heading: "Common mistakes and things to check", paragraphs: [
        "Do not assume 50% quality means half the file size. Do not compress an already compressed copy repeatedly when you can return to the original. Check the output extension and format before uploading. If the file remains too large, confirm that you have resized to the required dimensions and check whether the destination accepts another format.",
        "Keep transparency in mind. PNG inputs become WebP; other types become JPEG with a white canvas. Review the entire image for a white background, missing detail, or artifacts. The original stays unchanged, so you can compare it and choose not to use the compressed copy."
      ]},
      { heading: "A final check before upload", paragraphs: [
        "Verify the actual output size in the tool, confirm its format and dimensions, and open the result once before uploading. Check the destination’s size and format requirements, especially when the upload is for an application, profile, or document. If a 100 KB threshold is strict, aim below it rather than exactly at the limit. Use the smallest file that still preserves the detail the recipient needs; the target is not worth meeting if the result is unreadable."
      ]}
    ],
    table: { caption: "Check the output against both size and content needs", headers: ["Input example", "First action", "What to verify"], rows: [["Large photograph", "Try a quality setting, then measure", "File size and visible detail"], ["Text-heavy screenshot", "Resize to required dimensions first", "Text remains readable"], ["Transparent PNG logo", "Expect WebP output", "Destination accepts WebP and transparency remains"]] },
    takeaways: ["A quality percentage does not promise a specific file size.", "Resize oversized images before repeated quality changes.", "Check format, bytes, and visual detail before submitting."],
    faq: [
      { question: "Will 50% quality make my file 50% smaller?", answer: "No. The percentage controls the browser encoder’s quality setting, not a guaranteed size reduction." },
      { question: "Can the compressor guarantee an image under 100 KB?", answer: "No. It reports the actual output size. Try a lower setting or resize the image, then measure the new output." },
      { question: "What format does the compressor create?", answer: "PNG input becomes WebP. Other image types become JPEG, with transparent areas filled white." }
    ],
    related: [{ href: "/image/compress", label: "Image Compressor" }, { href: "/image/resize", label: "Image Resizer" }, { href: "/color-picker", label: "Color Picker" }]
  },
  {
    slug: "exchange-rates-and-bank-rates",
    title: "How Exchange Rates Work and Why Bank Rates Differ from Google Rates",
    description: "Understand currency-pair direction, a mid-market reference rate, and why a bank, card, or transfer provider may show a different amount.",
    intro: "An exchange-rate result is an estimate of how one currency compares with another at a particular time. It can help you understand a price or compare scenarios, but it may not match the amount charged by a bank, card issuer, cash exchange, or remittance service. This guide explains how to read a currency pair and what to check before making a payment.",
    sections: [
      { heading: "Read the pair in the right direction", paragraphs: [
        "A quote such as 1 USD = 0.92 EUR says one US dollar is estimated to equal 0.92 euros at the quoted rate. To convert 10 USD, multiply 10 by 0.92, which gives 9.20 EUR before any fees. Reversing the pair changes the operation: one euro is worth approximately the reciprocal of that quote in dollars, not 0.92 dollars.",
        "Currency converters usually calculate an amount by multiplying the source amount by the rate for the selected pair. The pair labels therefore matter as much as the number. Always check which currency is the “from” value and which is the “to” value before copying the result."
      ]},
      { heading: "What a mid-market rate represents", paragraphs: [
        "A mid-market rate is a reference point between the prices at which market participants buy and sell a currency. Consumer services may display a mid-market figure for comparison, but the price offered to a customer can include a margin or a separate fee. A search result or online reference quote is not automatically the rate that will be used to settle a purchase.",
        "Rates also change over time. Providers can refresh their data on different schedules and return a quote with a date or timestamp. A time shown by the converter tells you what the provider supplied or, when the provider has no timestamp, when the page fetched the response. Those are different pieces of information."
      ]},
      { heading: "Why a bank or card amount may differ", paragraphs: [
        "A bank, card network, money-transfer service, or cash exchange may use its own exchange rate, add a spread, charge a transfer fee, or combine several costs. The final amount can also depend on whether you are buying or selling currency and on the service’s settlement rules. That is why comparing only the headline rate can miss the total cost.",
        "For a card purchase, the transaction may be converted under the network or issuer’s rules rather than at the moment you view a reference rate. For a remittance, compare the amount the recipient receives after fees. For cash, ask whether the displayed rate is a buy or sell quote and whether a commission is added. Check the provider’s confirmation screen before you approve a transaction."
      ]},
      { heading: "Worked examples", paragraphs: [
        "Using a returned reference quote of 1 USD = 0.918543 EUR, 10 USD converts to 9.18543 EUR, displayed as 9.19 when rounded to two decimal places. This is the arithmetic result from the rate; it does not include a bank or card adjustment.",
        "At a quoted 1 EUR = 1.08 USD, 50 EUR converts to 54 USD. If the provider’s customer rate instead were 1 EUR = 1.05 USD, the same 50 EUR would convert to 52.50 USD before fees. The examples show why the quote used matters; they do not promise that either rate is available when you transact.",
        "Suppose a provider quotes 1 USD = 0.92 EUR but charges an additional $5 transfer fee. The converter can estimate the exchange portion of 10 USD as 9.20 EUR, but that amount alone does not describe the recipient’s net amount. Confirm whether the fee is paid separately or deducted from the transfer."
      ]},
      { heading: "Use a converter as a comparison tool", paragraphs: [
        "Select the source and target currencies, enter an amount, and read the provider name, rate, and date or timestamp returned with the quote. Use the common-amount table to see how the same rate scales for several amounts. That table is an arithmetic extension of one quote, not five separate live quotes.",
        "For an actual payment, compare the provider’s final amount, all visible fees, and the amount the recipient receives. If the quote has expired or the transaction is important, refresh it with the service that will process the payment. Keep the converter’s result as a reference rather than a promise of the settlement rate."
      ]},
      { heading: "Common mistakes and things to check", paragraphs: [
        "Do not read a quote backward, treat a reference rate as a guaranteed customer rate, or forget to check the timestamp. Compare like with like: buying against buying, selling against selling, and the same fee treatment on each offer. Make sure the amount and currency pair are correct before sharing a result.",
        "A small rate difference can have a larger effect on a larger transfer, and a fixed fee can matter more on a small transfer. Calculate the final received amount when possible. The exchange-rate APIs used by this page can be temporarily unavailable, and rates can be missing for a selected pair; if the page reports an error, try again later or check the provider that will handle your transaction."
      ]}
    ],
    table: { caption: "Illustrative conversions before transaction fees", headers: ["Rate", "Source amount", "Calculated amount"], rows: [["1 USD = 0.918543 EUR", "10 USD", "9.19 EUR"], ["1 EUR = 1.08 USD", "50 EUR", "54 USD"], ["1 USD = 0.92 EUR", "10 USD", "9.20 EUR"]] },
    takeaways: ["Read the pair direction and timestamp before using a quote.", "A reference rate can differ from a customer rate and exclude fees.", "Compare the final amount charged or received before confirming a transaction."],
    faq: [
      { question: "Is the mid-market rate the rate my bank will charge?", answer: "Not necessarily. The bank or card provider may use its own rate, apply a spread, or add fees." },
      { question: "Why do two websites show different rates?", answer: "Providers may update at different times and use different sources or quote conventions. Check each rate’s timestamp and provider." },
      { question: "Does the currency converter include transfer fees?", answer: "No. It multiplies by the returned exchange rate. Fees and provider-specific charges are not included." }
    ],
    related: [{ href: "/currency-converter", label: "Currency Converter" }, { href: "/percentage-calculator", label: "Percentage Calculator" }, { href: "/loan-calculator", label: "Loan Calculator" }]
  },
  {
    slug: "calculate-age-years-months-days",
    title: "How to Calculate Your Age in Years, Months and Days",
    description: "See why calendar ages need month-by-month date arithmetic, how elapsed days differ, and how to check a date calculation.",
    intro: "Subtracting birth years gives only a rough age. The answer also depends on whether the birthday has happened yet this year, how many days are in the months involved, and whether a leap day falls inside the interval. This guide explains a calendar-based method, works through examples, and shows why a single total-day count is a different measure.",
    sections: [
      { heading: "Calendar age and elapsed days are different", paragraphs: [
        "A calendar age is usually expressed as completed years, followed by completed months and remaining days. To calculate it, start at the birth date and advance by whole calendar months until the next month anniversary would pass the as-of date. The remaining days are counted from the last completed anniversary. This respects month lengths instead of treating every month as 30 days.",
        "An elapsed-day total answers a separate question: how many date boundaries lie between the birth date and the selected as-of date? A leap day contributes an extra day to that interval. Dividing total days by seven gives complete weeks, while multiplying by 24 gives a simple hours estimate. Neither total is interchangeable with the calendar breakdown."
      ]},
      { heading: "Worked examples", paragraphs: [
        "As of November 1, 2026, a birth date of January 1, 2000 gives 26 years, 10 months, and 0 days. The elapsed interval is 9,801 days, or 1,400 complete weeks and one extra day. The calculator reports 235,224 hours by multiplying whole elapsed days by 24; it does not measure the exact time of birth.",
        "For a birth date of October 15, 2025 and an as-of date of November 1, 2026, the calendar age is 1 year and 17 days. The day count begins at the last completed calendar anniversary, October 15, 2026. A simple subtraction of year numbers would not include the month and day information needed for that answer.",
        "For someone born on February 29, 2004, a non-leap-year month anniversary must be handled with a calendar convention. This calculator clamps the anniversary to the last day of February in a shorter month. An official organization may define its own rule for age cutoffs, so use that rule when eligibility matters."
      ]},
      { heading: "How to check the result", paragraphs: [
        "Choose the birth date carefully and use the date of birth rather than an approximate year. The calculator uses the current date on your device, so check that the device clock and timezone are appropriate. If you compare the answer with another calculator, make sure both use the same as-of date and the same convention for a birthday at the end of a month.",
        "Check the calendar result by stepping through full years, then full months, then remaining days. Check the total-day result separately using the difference between the two dates. It is normal for the total number of days not to equal years multiplied by 365 plus months multiplied by 30; those shortcuts ignore the actual calendar."
      ]},
      { heading: "Common mistakes and tricky dates", paragraphs: [
        "A common error is subtracting birth year from current year without checking whether the birthday has occurred. Another is assuming every month has the same number of days. A birth date on the 29th, 30th, or 31st can reach a shorter month without an exact same-day anniversary; systems need a documented rule for that case.",
        "Time of birth and local timezone can matter for official records near midnight, but this page accepts a date only and calculates at the device’s local calendar date. Its total-hours figure is an estimate based on whole days. It is not suitable for a legal ruling or a record that requires a birth time, location, or other jurisdiction-specific convention."
      ]},
      { heading: "Use the result for the right purpose", paragraphs: [
        "A date calculator is helpful for everyday questions, planning, and checking a calendar interval. If a form asks for completed years, use the years figure. If a task asks for days elapsed, use the total-day number and confirm whether the task counts the start date inclusively. If an institution defines age using a cutoff hour, school year, or local time, follow its written instructions.",
        "The SmartEdgeTools Age Calculator runs the date arithmetic in the browser. It displays years, months, days, total days, complete weeks, estimated hours, and days until the next birthday. Keep the requested measure in mind when copying a result; the page intentionally presents several totals because each describes a different view of the interval."
      ]}
    ],
    table: { caption: "Calendar age depends on both dates and month boundaries", headers: ["Birth date", "As-of date", "Calendar result"], rows: [["January 1, 2000", "November 1, 2026", "26 years, 10 months, 0 days"], ["October 15, 2025", "November 1, 2026", "1 year, 0 months, 17 days"]] },
    takeaways: ["Use full dates, not only birth and current years.", "Calendar age and elapsed days answer different questions.", "Follow official cutoff and timezone rules when eligibility matters."],
    faq: [
      { question: "Why does age in months not equal total days divided by 30?", answer: "Calendar months have different lengths. The age breakdown follows month anniversaries, while total days counts the exact date interval." },
      { question: "How does the calculator handle February 29?", answer: "When a month anniversary falls in a shorter month, the code uses that month’s last day. An official rule may differ." },
      { question: "Does it calculate age at a specific time of birth?", answer: "No. It accepts a date only and uses the current date on the device. It does not ask for a birth time or location." }
    ],
    related: [{ href: "/age-calculator", label: "Age Calculator" }, { href: "/birth-chart", label: "Birth Chart Calculator" }, { href: "/bmi-calculator", label: "BMI Calculator" }]
  },
  /* [SOURCE NEEDED] Review the BMI category and limitation wording against a qualified health source before publication. */
  {
    slug: "bmi-calculation-limits",
    title: "How BMI Is Calculated and What It Does and Does Not Tell You",
    description: "Understand the metric and imperial BMI formulas, check example calculations, and read the limits of a height-and-weight measure.",
    intro: "Body Mass Index, or BMI, is a calculation that relates weight to height. A calculator can apply the formula quickly, but the result is only one number derived from those two inputs. This guide shows the metric and imperial methods, explains the category labels used by the tool, and makes clear what the calculation cannot determine about an individual.",
    sections: [
      { heading: "The BMI formulas", paragraphs: [
        "In metric units, BMI = weight in kilograms ÷ height in metres squared. Convert centimetres to metres first, then multiply the height by itself. For imperial input, the SmartEdgeTools calculator uses BMI = 703 × weight in pounds ÷ height in inches squared. Both formulas produce a numeric index, which the page rounds to one decimal place.",
        "The page labels the result with one of four ranges shown in its interface: below 18.5, 18.5 to 24.9, 25 to 29.9, and 30 or higher. These are the labels applied by the calculator. A category is not a diagnosis and does not incorporate medical history or other personal information."
      ]},
      { heading: "Worked examples", paragraphs: [
        "Metric example: for 70 kg and 175 cm, convert 175 cm to 1.75 m. Then calculate 70 ÷ (1.75 × 1.75) = 22.857..., which the page displays as 22.9. The interface places that rounded result in its 18.5–24.9 range.",
        "A second metric example: 82.5 kg at 175 cm gives 82.5 ÷ 3.0625 = 26.938..., displayed as 26.9. According to the page’s ranges, the value is labeled Overweight. That describes the tool’s classification rule; it does not assess a person’s health.",
        "Imperial example: 154 lb and 69 in gives 703 × 154 ÷ (69 × 69) = about 22.7 after rounding to one decimal. Select the imperial mode before entering those units. Switching modes clears the inputs so a value in pounds is not accidentally interpreted as kilograms."
      ]},
      { heading: "What BMI does not measure", paragraphs: [
        "BMI uses only height and weight. The formula does not directly measure body fat, muscle, bone, or where weight is distributed. It also does not include age, pregnancy, health history, or other context. That means the same index can have different significance for different people. Use it as a simple calculation, not as a complete description of health.",
        "The category bands shown on the page are a way to label a numeric range in the interface. They should not be read as personalized guidance. If you have questions about your weight, growth, symptoms, or health risks, discuss them with a qualified clinician who can consider your circumstances."
      ]},
      { heading: "Common mistakes and things to check", paragraphs: [
        "Use the correct mode and units. Metric mode expects kilograms and centimetres; imperial mode expects pounds and inches. Do not enter height in metres into a field labeled centimetres. Make sure weight and height have not been swapped, then check the arithmetic using the squared height in the denominator.",
        "The result is rounded to one decimal before its category label is selected. If another calculator shows more decimal places or a category near a boundary, the displayed labels may differ. The page’s output is not a medical assessment and should not be used to diagnose a condition or make treatment decisions."
      ]},
      { heading: "How to use the result carefully", paragraphs: [
        "Enter the measurements in a consistent unit system, calculate, and record the result with its units and date if you need to compare values later. Do not compare an adult result with a child’s growth assessment as if they used the same interpretation. This page presents the calculator’s numeric output and its own category display, not age-specific curves or clinical context.",
        "The BMI Calculator runs its arithmetic in the browser. It does not need a date of birth or medical history to produce the number. That simplicity is useful for understanding the formula, but it is also why the result should be kept in context. A single height-and-weight index cannot replace a conversation about individual health."
      ]},
      { heading: "Keep the calculation separate from health decisions", paragraphs: [
        "The calculator can help you check the arithmetic or understand how a change in height or weight affects the index. It cannot explain why a person’s measurements changed, whether a number is expected for that person, or what action would be appropriate. Those questions require context that is not part of the two input fields.",
        "If you are using the calculation for a school exercise, show the formula and units so the result can be followed. If you are using it because of a personal health concern, treat the number as a starting point for a conversation rather than an instruction. Ask a qualified clinician how to interpret measurements in light of age, health history, and other relevant factors."
      ]}
    ],
    table: { caption: "Formula examples using the calculator’s rounding", headers: ["Units", "Inputs", "BMI shown"], rows: [["Metric", "70 kg; 175 cm", "22.9"], ["Metric", "82.5 kg; 175 cm", "26.9"], ["Imperial", "154 lb; 69 in", "22.7"]] },
    takeaways: ["Use the correct metric or imperial inputs.", "The tool rounds the number to one decimal and applies its displayed ranges.", "BMI is a height-and-weight calculation, not a diagnosis."],
    faq: [
      { question: "Why does the formula square height?", answer: "That is part of the BMI definition: weight is divided by height multiplied by itself, using metres for the metric formula." },
      { question: "Does a BMI category diagnose a health condition?", answer: "No. It is the label the interface applies to a numeric range. It does not account for individual medical context." },
      { question: "Why did switching units clear the values?", answer: "The tool clears both fields when the mode changes to prevent a number entered in one unit system from being reused under another." }
    ],
    related: [{ href: "/bmi-calculator", label: "BMI Calculator" }, { href: "/age-calculator", label: "Age Calculator" }, { href: "/unit-converter", label: "Unit Converter" }]
  },
  {
    slug: "merge-pdf-files-safely",
    title: "How to Merge PDF Files Without Uploading Them",
    description: "Combine PDFs in a deliberate order, understand browser-side processing, and check the final file before sharing.",
    intro: "Combining several PDFs is straightforward when the files are valid and you know the order you want. The SmartEdgeTools PDF Merge reads selected files in your browser, copies their pages into a new document, and offers the result for download. This guide covers the workflow, what local processing means in this code, and what to inspect before sending the merged file to someone else.",
    sections: [
      { heading: "Prepare the files before merging", paragraphs: [
        "Give the source PDFs clear names and decide their order before opening the tool. For example, a report might place a cover first, the main text next, and appendices last. The merge operation follows the order in which files are selected. A quick naming scheme such as 01-cover, 02-report, and 03-appendix can make a folder easier to review, although the final selection order still needs checking.",
        "Keep the original documents. Merging creates a new output file; it does not edit the source files. If you need to change a page, remove a blank sheet, rotate content, or redact personal information, do that in an appropriate PDF editor and review the result before sharing."
      ]},
      { heading: "Merge and verify the output", paragraphs: [
        "Select at least two PDF files in the order you want. Start the merge and wait for the browser to finish reading each file. Download the result, open it, and confirm the first and last pages as well as the transition between each source document. Check page count, orientation, legibility, and whether any pages appear blank or out of order.",
        "A two-page PDF followed by a three-page PDF should produce a five-page document with the first file’s pages before the second file’s pages. A three-file selection of A, B, and C preserves that sequence in the output. Reordering the files before running the tool is easier than discovering later that the final packet is assembled incorrectly."
      ]},
      { heading: "What browser-side processing means", paragraphs: [
        "The merge code uses a PDF library in the browser to read the selected files, copy pages, and create the download. The page does not send PDF file contents to the site’s rewrite API or another upload endpoint as part of this operation. Processing still uses your device’s memory and browser capabilities, so a very large file can take time or exceed available memory.",
        "Browser-side processing is not the same as a guarantee that no other site component makes network requests. Analytics and advertising scripts are separate from the merge operation; see the Privacy Policy for those services. If a document is highly sensitive, consider your device, browser, and network context before opening it in any website."
      ]},
      { heading: "Common errors and limits", paragraphs: [
        "The tool requires at least two files. A damaged PDF, an unsupported encryption setting, or a password-protected document may fail to load. The merge function copies pages; it does not remove restrictions, recover a damaged file, or repair incorrect page content. If one source fails, open it locally to confirm it works and check whether it is encrypted before trying again.",
        "Large PDFs can consume substantial memory because the browser must read and construct the document. If processing fails, close other large applications, try fewer or smaller files, or use a trusted desktop PDF program. Avoid uploading the same file repeatedly if the browser appears stuck; first wait for the current operation or reload the page after saving any needed source copies."
      ]},
      { heading: "Protect the finished document", paragraphs: [
        "Before sharing, review the merged pages for personal data, hidden notes, signatures, or information that was not meant for the recipient. A merge tool does not redact content. Check that the file name is appropriate and that the recipient can open the PDF. If the document will be used for an application or formal submission, confirm that the destination accepts a merged file and any file-size limit.",
        "A practical workflow is to keep an untouched folder of source files, create the merged copy, verify page order and readability, then share only after checking the destination’s requirements. This simple review catches many assembly problems without relying on the file name alone."
      ]},
      { heading: "When a merge is not enough", paragraphs: [
        "Merging combines pages but does not make the content consistent. A packet can contain pages with different paper sizes, orientations, scan quality, or margins. Open the completed file and review transitions between sources. If a page is sideways or unreadable, correct that source in a suitable editor and create a fresh merged copy rather than assuming the merge step repaired it.",
        "The same review matters for forms and supporting documents. Confirm that signatures and fields remain visible, that page order matches any checklist, and that the output is not larger than the receiving service allows. This tool makes a combined PDF; the person preparing the document remains responsible for its contents and suitability for the intended recipient."
      ]}
    ],
    table: { caption: "How selected file order determines page order", headers: ["Selected order", "Page counts", "Output sequence"], rows: [["Report, Appendix", "4 + 2", "Report pages 1–4, then appendix pages 1–2"], ["Cover, Main, Forms", "1 + 5 + 3", "Cover, main document, then forms"]] },
    takeaways: ["Select files in the intended order and check the merged pages.", "The merge operation processes file contents in the browser.", "Keep source copies and review the new file before sharing."],
    faq: [
      { question: "Are PDF files sent to the site when I merge them?", answer: "The merge code processes the selected files in the browser and does not upload their contents to the site’s API." },
      { question: "Can I merge one PDF by itself?", answer: "No. The tool requires at least two PDF files to create a merged document." },
      { question: "Will merging remove a password from a PDF?", answer: "No. Password-protected or restricted files may fail to load; the tool does not remove security restrictions." }
    ],
    related: [{ href: "/pdf/merge", label: "PDF Merge" }, { href: "/image/compress", label: "Image Compressor" }, { href: "/word-counter", label: "Word Counter" }]
  },
  {
    slug: "convert-common-units",
    title: "How to Convert Common Units: Length, Weight and Temperature",
    description: "Use clear conversion factors and temperature formulas, with a quick-reference table and examples for common measurements.",
    intro: "Unit conversion is easiest when you know which quantity you are converting and whether the scales use only a multiplier or also an offset. Length and weight conversions use scale factors. Temperature conversions need an additional adjustment because their zero points differ. This guide gives practical examples and a quick-reference table, then shows how to check a result before using it.",
    sections: [
      { heading: "Start with the quantity and unit", paragraphs: [
        "Write the value with its unit before doing arithmetic. A measurement of 5 could mean metres, kilometres, pounds, or degrees, and those quantities cannot be treated as the same thing. Choose the matching category in the Unit Converter, enter the value, then select both the source and target units. Keep the unit beside the number throughout the calculation.",
        "A conversion factor tells you how many base units correspond to one selected unit. To convert from one unit to another, multiply by the source factor and divide by the target factor. This gives a clear way to check common length, weight, speed, and area conversions. Temperature uses its own equations rather than a single factor."
      ]},
      { heading: "Length and weight examples", paragraphs: [
        "For length, 5 kilometres × 1,000 metres per kilometre = 5,000 metres. To go from metres to kilometres, divide metres by 1,000. The direction of the factor matters: moving to a smaller unit produces a larger numeric count, while moving to a larger unit produces a smaller count for the same distance.",
        "For weight, 2 kilograms converts to about 4.409245 pounds using the converter’s avoirdupois-pound factor. The familiar quick estimate of 2.2 pounds per kilogram gives about 4.4 pounds, which is close but less precise. Use the displayed unit name because there are different historical definitions of some units and the tool uses the factor attached to that label."
      ]},
      { heading: "Temperature needs an offset", paragraphs: [
        "To convert Celsius to Fahrenheit, multiply by 9/5 and add 32: °F = (°C × 9/5) + 32. To convert Fahrenheit to Celsius, subtract 32 and multiply by 5/9. Celsius to Kelvin adds 273.15. Since the scales do not share the same zero, multiplying by a ratio alone cannot convert between them.",
        "For example, 68°F becomes (68 − 32) × 5/9 = 20°C. Then 20°C + 273.15 = 293.15 K. A temperature interval of one degree has a different numeric size in Fahrenheit than in Celsius, which is why the conversion formulas include both scaling and an offset."
      ]},
      { heading: "Quick-reference values", paragraphs: [
        "The following values are useful for checking whether a result is in the right range. They are rounded for quick reference. The Unit Converter uses stored factors and displays more digits for many conversions, so small differences from this table can be caused by rounding in the table rather than by an incorrect calculation.",
        "For an area conversion, square units need squared factors: one square kilometre contains one million square metres because 1,000 metres is squared. Speed also combines distance and time units. If a value is kilometres per hour, changing only the distance label without converting the hour part will not produce miles per hour."
      ]},
      { heading: "Common mistakes and a final check", paragraphs: [
        "Check the category, source unit, and destination unit before copying the number. Do not use a length factor for area, or a multiplier-only method for temperature. Keep an eye on metric prefixes: centimetres and metres differ by 100, while millimetres and metres differ by 1,000. A result’s numeric size can become much larger when expressed in a smaller unit without the physical measurement changing.",
        "The SmartEdgeTools converter supports length, weight, temperature, speed, and area. It does not include volume. Most non-temperature values are formatted to a precision of up to ten significant digits, while temperature displays four decimal places. For coursework, engineering, or laboratory tasks, follow the precision and significant-figure rules provided by the assignment or standard you are using."
      ]},
      { heading: "Use conversions in a calculation", paragraphs: [
        "When a converted value is part of a larger problem, carry the unit through each step. For instance, if you need the distance traveled in 30 minutes at 60 kilometres per hour, first make the time consistent with the speed’s hour unit: 30 minutes is 0.5 hour, so the distance is 30 kilometres. Converting only the speed number while forgetting the time unit would produce a misleading answer.",
        "For schoolwork, include the source value, conversion relationship, and final unit in your working. This helps catch an upside-down factor. If converting 5 kilometres to metres gives less than 5, the direction likely needs checking because a kilometre contains 1,000 metres. Estimation is a useful second check: the answer should be in a plausible range before you rely on the displayed digits."
      ]}
    ],
    table: { caption: "Rounded quick-reference conversions", headers: ["From", "To", "Approximate result"], rows: [["1 km", "m", "1,000 m"], ["2 kg", "lb", "4.409245 lb"], ["68°F", "°C", "20°C"], ["20°C", "K", "293.15 K"]] },
    takeaways: ["Always keep the unit attached to the number.", "Temperature uses formulas with offsets; scale-factor categories use conversion factors.", "Use the tool’s available categories and respect the precision needed for the task."],
    faq: [
      { question: "Why does converting temperature require adding or subtracting a number?", answer: "Celsius, Fahrenheit, and Kelvin use different zero points, so the conversion combines a scale factor with an offset." },
      { question: "Which unit groups does the converter include?", answer: "It includes length, weight, temperature, speed, and area. Volume is not currently available." },
      { question: "Why is a quick-reference answer slightly different?", answer: "Quick-reference tables round values. The converter may show more digits from its internal factor and display formatting." }
    ],
    related: [{ href: "/unit-converter", label: "Unit Converter" }, { href: "/currency-converter", label: "Currency Converter" }, { href: "/percentage-calculator", label: "Percentage Calculator" }]
  },
  {
    slug: "create-strong-password",
    title: "How to Create a Strong Password You Can Actually Remember",
    description: "Use length, varied characters, and a password manager habit to create passwords that are hard to guess and practical to use.",
    intro: "A strong password is usually long, unpredictable, and unique to one account. Short, familiar words are easy to guess even when a number or symbol is added. This guide explains what makes a password hard to attack, how to use the SmartEdgeTools Password Generator, and how to store the result safely without reusing it across accounts.",
    sections: [
      { heading: "Length matters more than a clever word", paragraphs: [
        "Each extra character multiplies the number of possible combinations. That is why a 16-character random password is far harder to guess by trying combinations than an 8-character one, even if the shorter password looks complicated. The SmartEdgeTools generator offers lengths from 8 to 32 characters, with 16 as its starting length. For an important account, choose at least 16 characters unless the service sets a lower limit.",
        "A password made from a single dictionary word, a name, or a date is vulnerable to guessing lists, even with a capital letter or a digit at the end. Attackers try common words, names, keyboard patterns, and leaked passwords first. Random characters from several groups do not follow those patterns, which is why a generator is useful for accounts you do not need to type from memory every day."
      ]},
      { heading: "Use several character groups, and check the service rules", paragraphs: [
        "The generator lets you include uppercase letters, lowercase letters, numbers, and symbols such as !@#$%^&*()_+-=[]{}|;:,.<>? . Using all four groups increases the possible characters at each position. Its strength label calls a password Weak when it is short or uses few groups, Medium in the middle range, and Strong when it is longer and uses more groups. Treat that label as a rough guide, not a guarantee: a long random password is strong because of length and unpredictability, not because a label says so.",
        "Some websites limit length or symbols. If a generated password is rejected, keep the length as high as the service allows and keep several character groups enabled, rather than falling back to a short familiar word. Do not remove symbols and shorten the password at the same time unless the service requires it."
      ]},
      { heading: "Generate it in the browser, then store it safely", paragraphs: [
        "In the Password Generator, set the length, choose the character groups, and select Generate Password. Copy the result into the account or into a password manager. The page generates the password in your browser using the browser's cryptographic random values; it does not ask you to create an account on SmartEdgeTools to generate one.",
        "For everyday use, a password manager is the practical way to keep a different long password for each account. If you write a password down, keep it in a private place that only you can access, and do not store it in a shared document, a photo, or an email draft. Never share a password in a chat message or send it to a support agent who asks for it."
      ]},
      { heading: "One account, one password", paragraphs: [
        "Reusing the same password means one leak can open several accounts. If a service reports a breach, change that account's password first, then check whether the same password was used anywhere else and change those too. Use two-factor authentication where it is offered, especially for email, banking, and accounts that can reset other passwords.",
        "Email deserves special care: anyone who controls your email can often reset passwords on other services. Give your email account a long, unique password and turn on its strongest available second factor."
      ]},
      { heading: "What not to do", paragraphs: [
        "Avoid birthdays, pet names, school names, favourite teams, and simple sequences, even with substitutions such as replacing a letter with a similar-looking number. Avoid reusing a work password for a personal account, and avoid a password that is only a slight variation of an older one, such as adding 1 at the end. If you must remember a password without a manager, use a long passphrase made from several unrelated words and add numbers and symbols, and keep it unique to that account."
      ]}
    ],
    table: { caption: "Stronger choices for common password habits", headers: ["Instead of", "Try", "Why it helps"], rows: [["A short familiar word with 123", "16+ random characters from several groups", "Length and unpredictability make guessing far harder"], ["The same password everywhere", "A unique password per account, stored in a manager", "One leak does not open other accounts"], ["Changing only the last digit", "A completely new random password", "Small variations are easy to predict"]] },
    takeaways: ["Use at least 16 characters for important accounts when the service allows it.", "Combine uppercase, lowercase, numbers, and symbols, and keep the password unique.", "Store generated passwords in a password manager and enable two-factor authentication where offered."],
    faq: [
      { question: "How long should a password be?", answer: "At least 16 characters for important accounts when the service allows it. Longer random passwords are harder to guess by trying combinations." },
      { question: "Is a password with symbols automatically strong?", answer: "No. Symbols help, but length and unpredictability matter more. A short password with one symbol can still be weak." },
      { question: "Does the SmartEdgeTools generator upload my password?", answer: "The generator runs in your browser and creates the password there. Copy it into the account or password manager you trust, and do not share it." },
      { question: "What should I do after a data breach?", answer: "Change the affected account's password to a new, unique one, check for reuse on other accounts, and review the account's security settings." }
    ],
    related: [{ href: "/password", label: "Password Generator" }, { href: "/qr-code", label: "QR Code Generator" }, { href: "/word-counter", label: "Word Counter" }]
  },
  {
    slug: "format-json-validate",
    title: "How to Format and Validate JSON (With Examples)",
    description: "Learn JSON syntax, how formatting and minifying work, and how to find and fix common validation errors.",
    intro: "JSON is a text format for structured data used by APIs, configuration files, and web applications. A JSON value can be an object, an array, a string, a number, true, false, or null. Formatting makes that text easier to read, minifying makes it compact, and validating checks whether the text follows JSON rules at all. This guide explains all three, using the SmartEdgeTools JSON Formatter and Validator as the example tool.",
    sections: [
      { heading: "What valid JSON looks like", paragraphs: [
        "An object uses curly brackets, with double-quoted keys, a colon, and values separated by commas, for example {\"name\":\"Mina\",\"items\":[1,2]}. An array uses square brackets. Strings must use double quotes, not single quotes. Numbers do not use quotes. True, false, and null are written in lower case.",
        "Whitespace between tokens does not change the data. That is why the same JSON can be written on one long line or spread over many lines. Formatting only changes whitespace and indentation; it does not rename fields, reorder data in a meaningful way, or change values."
      ]},
      { heading: "Format, minify, and choose indentation", paragraphs: [
        "Paste a JSON value into the tool, choose an indent of 2 spaces, 4 spaces, or a tab, then select Format & validate. The tool parses the input and prints the same data with consistent indentation, so nested objects and arrays are easier to follow. Select Minify instead to remove insignificant whitespace for a compact copy.",
        "The tool also offers a Load example button, which fills in {\"name\":\"SmartEdgeTools\",\"features\":[\"format\",\"validate\"],\"active\":true}. Try formatting that first, then minifying the result, to see that both operations keep the same fields and values. Copy the output only after it validates."
      ]},
      { heading: "How to read a validation error", paragraphs: [
        "If the input is invalid, the tool shows an error message and, when the parser reports a position, a line and column hint. Use that hint as a starting point, not as a perfect pointer: the actual mistake is often just before the reported position, such as a missing comma or bracket on the previous line.",
        "Check the structure around that point. Count opening and closing brackets, check that every object key is quoted, and check that commas separate items but do not follow the last item. Fix one error at a time and run the tool again, because a single early error can hide later ones."
      ]},
      { heading: "Common errors and how to fix them", paragraphs: [
        "Single quotes are the most common cause: {'name':'Mina'} is not JSON, even though it looks similar in other languages. Change single quotes to double quotes. Unquoted keys, such as {name:\"Mina\"}, are also invalid; quote the key. A trailing comma, such as {\"a\":1,}, is invalid; remove the comma after the last item.",
        "A missing comma, a missing closing bracket, or a value such as undefined, NaN, or a date written without quotes will also fail. JSON has no comments, so a line starting with // inside JSON is invalid. If you need a note, keep it outside the JSON value."
      ]},
      { heading: "What the formatter does not do", paragraphs: [
        "The formatter does not repair broken JSON and does not guess at a correction. That is deliberate: guessing could change a value without you noticing. It also does not check whether the data is correct for your application, only whether the text is valid JSON. A valid JSON value can still contain the wrong field name, the wrong number, or a missing item for your task.",
        "Processing happens in your browser, and the formatter code does not send the text you enter to a server. That is useful for ordinary API responses and configuration, but still avoid pasting secrets, passwords, or highly sensitive personal data into any website, especially on a shared device."
      ]},
      { heading: "A practical workflow", paragraphs: [
        "Copy the JSON from your API response, file, or error message, paste the complete value, and format it. Read the nested structure, check the fields you need, and copy the formatted or minified version as required. If the tool reports an error, fix the syntax, validate again, and only then use the result in your application or configuration.",
        "For a large file, work on a copy and keep the original unchanged until the formatted version validates. If a value is very large, check that you pasted the complete value, because a cut-off ending will look like a missing bracket error."
      ]}
    ],
    table: { caption: "Common JSON errors and fixes", headers: ["Invalid example", "Problem", "Fix"], rows: [["{'name':'Mina'}", "Single quotes", "Use double quotes: {\"name\":\"Mina\"}"], ["{name:\"Mina\"}", "Unquoted key", "Quote the key: {\"name\":\"Mina\"}"], ["{\"a\":1,}", "Trailing comma", "Remove the last comma: {\"a\":1}"], ["{\"items\":[1,2]} // note", "Comment in JSON", "Remove the comment or keep it outside the JSON"]] },
    takeaways: ["JSON requires double-quoted strings and keys, and no trailing commas.", "Formatting changes whitespace only; minifying removes it. Neither changes values.", "Use the error line and column as a starting point, fix one error at a time, and validate again."],
    faq: [
      { question: "What is the difference between formatting and minifying JSON?", answer: "Formatting adds consistent indentation to make JSON readable. Minifying removes insignificant whitespace to make it compact. Both keep the same data." },
      { question: "Why is my JSON invalid if it looks correct?", answer: "Common causes are single quotes, unquoted keys, a trailing comma, a missing comma or bracket, and comments. Check the reported line and column, then check just before that position." },
      { question: "Can the formatter fix my JSON automatically?", answer: "No. It reports the error but does not guess a correction, so that values are not changed unexpectedly." },
      { question: "Is my JSON uploaded when I use the tool?", answer: "The formatter runs in the browser and its code does not send the entered JSON to a server. Avoid sensitive data on a shared device." }
    ],
    related: [{ href: "/json-formatter", label: "JSON Formatter & Validator" }, { href: "/word-counter", label: "Word Counter" }, { href: "/text-case", label: "Case Converter" }]
  },
  {
    slug: "typing-speed-test-improve-wpm",
    title: "How to Take a Typing Speed Test and Improve Your WPM",
    description: "Understand how WPM and accuracy are calculated in a 30-second test, and practise in a way that improves both.",
    intro: "A typing speed test measures how much text you can type correctly in a set time. The SmartEdgeTools test lasts 30 seconds and uses one fixed passage. This guide explains exactly how its WPM and accuracy are calculated, how to take the test fairly, and how to practise without building bad habits.",
    sections: [
      { heading: "How this test works", paragraphs: [
        "Press Start Test, then type the passage shown on the page into the input box. The timer counts down from 30 seconds, and a progress bar shows how far through the passage your typing has reached. Characters you type correctly appear in green, and characters that do not match appear in the accent colour, so you can see mistakes as you go.",
        "The input is disabled until you press Start Test, and pressing Start Test again restarts the test with a fresh 30 seconds. The result appears when the timer reaches zero. The test does not save your result or compare it with other people; it reports only the result for that run."
      ]},
      { heading: "How WPM and accuracy are calculated here", paragraphs: [
        "WPM is based on correct characters only, not on everything you typed. The tool counts correct characters, divides by 5 to estimate words, and divides by 0.5 minutes, because the test lasts 30 seconds. In symbols: WPM = correct characters ÷ 5 ÷ 0.5.",
        "Accuracy is correct characters divided by all characters you typed, multiplied by 100 and rounded to a whole percent. For example, if you type 160 characters and 150 of them match the passage, accuracy is 150 ÷ 160 × 100 = 93.75%, shown as 94%, and WPM is 150 ÷ 5 ÷ 0.5 = 60."
      ]},
      { heading: "Why the same person can get different scores", paragraphs: [
        "Scores depend on the passage, the duration, and whether you correct mistakes. A short, familiar passage, a longer test, or a test that allows backspacing and corrections will give a different result. That is why you should compare runs of the same test, with the same passage and the same 30 seconds, rather than comparing a result here directly with a result from a different website.",
        "Typing extra characters beyond the passage, or skipping ahead, also affects the score. Characters typed past the end of the sample have no matching sample character, so they are not counted as correct, and they lower accuracy because they increase the total typed count."
      ]},
      { heading: "Practise accuracy first, then speed", paragraphs: [
        "Speed built on errors is hard to use, because you spend time fixing mistakes. Practise at a pace where most characters are correct, even if that feels slow at first. Keep your hands relaxed, look at the passage rather than at your hands when you can, and aim for a steady rhythm instead of bursts followed by pauses.",
        "Short, regular practice is more useful than one long session when you are tired. Take the 30-second test, note both WPM and accuracy, and practise the specific problem: if accuracy is low, slow down; if accuracy is high but WPM is low, increase pace gradually while keeping accuracy steady."
      ]},
      { heading: "Common mistakes to avoid", paragraphs: [
        "Do not rush the first words and then stall, and do not ignore the colour feedback. If many characters are marked wrong, stop, restart, and type more slowly. Do not memorise one passage and treat that score as your general typing speed; the skill that transfers is accurate, rhythmic typing on new text, not recall of one paragraph.",
        "Also avoid practising only on a phone keyboard if you need to type on a computer keyboard, or only in short bursts if you need to type longer documents. Match practice to the keyboard and the task you actually need."
      ]}
    ],
    table: { caption: "Worked typing examples for a 30-second test", headers: ["Correct characters", "Typed characters", "WPM", "Accuracy"], rows: [["150", "160", "60", "94%"], ["100", "110", "40", "91%"], ["200", "205", "80", "98%"]] },
    takeaways: ["WPM here is correct characters ÷ 5 ÷ 0.5 minutes, for a 30-second test.", "Accuracy is correct characters ÷ typed characters × 100.", "Compare runs of the same test, practise accuracy first, then increase speed gradually."],
    faq: [
      { question: "How long is the SmartEdgeTools typing test?", answer: "30 seconds. Press Start Test, type the passage, and the result appears when the timer reaches zero." },
      { question: "Does WPM count characters I typed incorrectly?", answer: "No. WPM uses correct characters only. Incorrect characters lower accuracy and do not add to WPM." },
      { question: "Why is my score different on another website?", answer: "Passages, durations, and rules for corrections differ between tests. Compare results only when the test conditions match." },
      { question: "Should I practise speed or accuracy first?", answer: "Accuracy first. Once accuracy is steady, increase pace gradually and keep checking that accuracy does not fall sharply." }
    ],
    related: [{ href: "/typing-test", label: "Typing Speed Test" }, { href: "/word-counter", label: "Word Counter" }, { href: "/stopwatch", label: "Stopwatch" }]
  },
  {
    slug: "calculate-final-grade-needed",
    title: "How to Calculate Your Final Grade and the Score You Need",
    description: "Use weighted grades and the score-needed formula to plan for a final exam, with worked examples.",
    intro: "A final grade calculator answers two different questions. First, what is your grade so far when categories have different weights? Second, what score do you need on the remaining work to reach a target? The SmartEdgeTools Final Grade Calculator has a mode for each question, and this guide explains the maths behind both, so you can check the result against your syllabus.",
    sections: [
      { heading: "Weighted grade: combine categories by weight", paragraphs: [
        "A weighted grade multiplies each score by its weight, adds those products, and divides by the total weight: weighted grade = sum(score x weight) / sum(weight). Weights are usually percentages, but the tool normalises the result, so if the weights you enter add to less than 100%, the result is still the average across the categories you supplied.",
        "For example, 88% on work weighted 40% and 92% on work weighted 60% gives (88 x 40 + 92 x 60) / 100 = 90.4%. A high score in a small category cannot outweigh a low score in a large category, which is why checking the weights matters more than averaging the scores directly."
      ]},
      { heading: "Score needed: work backwards from your target", paragraphs: [
        "For the remaining work, the formula is: required score = (target - current grade x (1 - remaining weight)) / remaining weight, where weights are fractions. If your current grade is 82%, the final is worth 30%, and your target is 85%, you need (85 - 82 x 0.70) / 0.30 = 92%.",
        "Another example: a current grade of 75%, remaining work worth 40%, and a target of 80% needs (80 - 75 x 0.60) / 0.40 = 87.5%. If the required score is above 100%, the target is not reachable with those inputs, and the tool says so. If it is 0% or below, you have already met the target on these inputs."
      ]},
      { heading: "How to use the tool", paragraphs: [
        "In Weighted grade mode, add a row for each category, enter its score from 0 to 100 and a weight greater than zero, and add more rows as needed. In Score needed on final mode, enter your current grade before the exam, the remaining weight as a percentage up to 100%, and your target grade from 0 to 100. All calculation runs in your browser.",
        "Use the grade that represents completed work only for the current grade. Do not include the final exam in both the current grade and the remaining weight, or the result will be wrong. If your course drops the lowest score, gives extra credit, or rounds grades, apply that policy separately, because the tool does not know your school's rules."
      ]},
      { heading: "Common mistakes", paragraphs: [
        "The most common mistake is taking a simple average of scores and ignoring weights. Another is entering weights that do not match the syllabus, such as using 20% for homework when the syllabus says 10%. A third is treating a target as guaranteed: the calculator shows the maths, not a promise from your instructor.",
        "Also check whether scores are percentages or points. The tool expects percentages from 0 to 100. If your gradebook uses points, convert each score to a percentage first, or use the same point scale consistently and check the result by hand."
      ]}
    ],
    table: { caption: "Worked final-grade examples", headers: ["Situation", "Calculation", "Result"], rows: [["88% at 40% and 92% at 60%", "(88 x 40 + 92 x 60) / 100", "90.4% weighted grade"], ["Current 82%, final 30%, target 85%", "(85 - 82 x 0.70) / 0.30", "92% needed on the final"], ["Current 75%, remaining 40%, target 80%", "(80 - 75 x 0.60) / 0.40", "87.5% needed"]] },
    takeaways: ["Weighted grade = sum(score x weight) / sum(weight).", "Required score = (target - current x (1 - remaining weight)) / remaining weight.", "Check weights against your syllabus and your school's rounding and dropped-score rules."],
    faq: [
      { question: "What if my weights do not add to 100%?", answer: "The tool normalises across the categories you entered, so the result is the weighted average of those categories. For a full course grade, enter all categories so the weights add to 100%." },
      { question: "What does a required score above 100% mean?", answer: "It means the target cannot be reached with the current grade and remaining weight you entered. Lower the target, or check whether the inputs match your syllabus." },
      { question: "Does the calculator know my letter grade?", answer: "No. It reports a percentage. Letter-grade boundaries differ by school and course, so check your syllabus for the boundary that applies to you." },
      { question: "Is my grade data uploaded?", answer: "The calculation runs in your browser. The tool does not ask you to create an account to calculate a grade." }
    ],
    related: [{ href: "/final-grade-calculator", label: "Final Grade Calculator" }, { href: "/percentage-calculator", label: "Percentage Calculator" }, { href: "/word-counter", label: "Word Counter" }]
  },
  {
    slug: "generate-random-numbers",
    title: "How to Generate Random Numbers in a Range (With or Without Duplicates)",
    description: "Understand ranges, duplicates, and fair random generation, and use the tool for draws, sampling, and decisions.",
    intro: "A random number generator picks numbers from a range you choose, such as 1 to 100. The SmartEdgeTools generator lets you choose how many numbers to generate, up to 100, and whether duplicates are allowed. This guide explains what those choices mean, how the tool generates numbers in your browser, and when a random draw is, and is not, the right method.",
    sections: [
      { heading: "Set a clear range and quantity", paragraphs: [
        "Enter a minimum and a maximum as whole numbers, with the minimum no greater than the maximum. The default is 1 to 100 with one number, but you can generate up to 100 numbers in one run. Every number in the range, including both endpoints, can be picked. If you need a single winner, generate one number. If you need a sample, generate the quantity you need in one run and keep the list together.",
        "Check the range before you draw. A draw from 1 to 10 is not the same as a draw from 0 to 10, and a draw from 1 to 100 gives each number a much smaller chance than a draw from 1 to 6. The tool rejects a quantity outside 1 to 100 and a minimum greater than the maximum, so fix those inputs before generating again."
      ]},
      { heading: "Duplicates on or off", paragraphs: [
        "With duplicates allowed, the same number can appear more than once, just as rolling a die can repeat a value. That is correct for independent draws, such as simulating dice or repeated random choices. With No duplicate numbers selected, each number appears at most once, which is correct for a raffle, a lottery-style draw, or choosing distinct items.",
        "Unique draws have a limit: you cannot ask for more distinct numbers than the range contains. For example, you cannot generate 11 unique numbers from 1 to 10, and the tool reports that the range does not contain enough distinct numbers. Widen the range or reduce the quantity, then draw again."
      ]},
      { heading: "How the numbers are generated", paragraphs: [
        "The tool runs in your browser and uses the browser's cryptographic random values, with a rejection step that discards values outside the range so that each number in the range has an equal chance. That is different from a simple pattern or a predictable sequence, and it does not need a seed from you.",
        "Random does not mean evenly spread in a small sample. Five draws from 1 to 100 can cluster, repeat when duplicates are allowed, or leave large gaps, and that is still random. Do not re-draw until you get a result you like and call it random, because that changes the process from a draw to a choice."
      ]},
      { heading: "Fair uses and limits", paragraphs: [
        "Use random draws for fair selection, practice data, games, and sampling when every option should have an equal chance. For a formal lottery, gambling, security keys, or a legal draw, use the rules and audited system required for that purpose, not a general browser tool. The tool also does not shuffle a list you paste in; it generates numbers, so map each number to an item yourself if you are picking from a list.",
        "Keep a record of the draw if it matters: the range, the quantity, whether duplicates were allowed, and the generated list, which you can copy as a comma-separated list. If you need the same result again later, save the list, because a new draw will give a different result."
      ]}
    ],
    table: { caption: "Which random setting to choose", headers: ["Task", "Duplicates", "Example"], rows: [["Pick one winner", "Either, quantity 1", "1 number from 1 to 100"], ["Draw a raffle with no repeat winners", "Unique only", "5 distinct numbers from 1 to 50"], ["Simulate dice rolls", "Duplicates allowed", "10 numbers from 1 to 6, repeats possible"]] },
    takeaways: ["Both endpoints of the range can be picked.", "Unique draws cannot exceed the size of the range.", "A small random sample can cluster; that does not mean it was unfair."],
    faq: [
      { question: "Can the same number appear twice?", answer: "Yes, when duplicates are allowed. Turn on No duplicate numbers if each result must be distinct." },
      { question: "Why did my unique draw fail?", answer: "The quantity was larger than the number of distinct values in the range. Widen the range or reduce the quantity." },
      { question: "How many numbers can I generate at once?", answer: "From 1 to 100 numbers per run." },
      { question: "Is the result saved?", answer: "No. Copy the generated list if you need it later, because a new draw will differ." }
    ],
    related: [{ href: "/random-number", label: "Random Number Generator" }, { href: "/password", label: "Password Generator" }, { href: "/qr-code", label: "QR Code Generator" }]
  },
  {
    slug: "create-qr-code",
    title: "How to Create a QR Code That Scans Reliably",
    description: "Create a QR code for a link or text, test it, and avoid the mistakes that make codes hard to scan.",
    intro: "A QR code stores text or a link in a pattern a phone camera can read. The SmartEdgeTools QR Code Generator creates the code entirely in your browser as a 300-pixel PNG image you can download. This guide explains what to put in a code, how to test it, and how to print or share it so it still scans.",
    sections: [
      { heading: "What to put in the code", paragraphs: [
        "Enter the exact text or URL you want the scanner to receive, then select Generate QR Code. For a website, use the full address, including https://, and check for typos before generating, because a small typo sends people to the wrong page or to no page at all. For plain text, keep it short: the tool reports an error for input it cannot encode and suggests shorter text.",
        "Do not put passwords, private keys, or sensitive personal data in a QR code. Anyone who can see the printed code can scan it and read the contents. For a link that may change, use a stable page you control rather than a temporary address, or be ready to reprint the code when the address changes."
      ]},
      { heading: "Test before you print or share", paragraphs: [
        "Scan the generated code with a phone camera and with a second phone if possible, and confirm it opens the intended page or shows the intended text. Test at the size and distance people will actually use: a code that scans on a large screen may fail when printed small, and a code on a curved or glossy surface may fail from glare.",
        "Keep good contrast and a clear margin around the code. The tool uses a margin of 1 module around the pattern. Do not cover the centre with a large logo, do not stretch the image so the squares become rectangles, and do not place text or graphics over the pattern."
      ]},
      { heading: "Size, download, and printing", paragraphs: [
        "Select Download QR Code to save the image as qrcode.png, a 300-pixel square image. That size is suitable for screens and for small print, such as a card or a label. For a large poster, a 300-pixel image may look soft when enlarged, so test a printed copy at the final size before producing many copies.",
        "If the printed code fails, print it larger, increase contrast, use matte paper if glare is a problem, and test again. If the content is long, shorten the URL or the text where possible, because shorter content generally produces a simpler, easier-to-scan pattern."
      ]},
      { heading: "What a QR code does not do", paragraphs: [
        "A QR code does not check that a link is safe, does not hide its contents, and does not track scans by itself. A scanner will show the link or text before opening it in most cases, so check the destination before following an unfamiliar code. The generator does not create a tracking link, a login page, or a payment page; it only encodes the text you enter."
      ]}
    ],
    table: { caption: "QR code checklist", headers: ["Check", "Good practice", "Avoid"], rows: [["Content", "Full, checked URL or short text", "Typos, passwords, or private data"], ["Test", "Scan on a phone at real size and distance", "Sharing without a test scan"], ["Print", "High contrast, clear margin, tested final size", "Stretching, covering, or tiny printing"]] },
    takeaways: ["Use the full, checked URL and keep text short.", "Test the code at the size and distance people will use.", "The download is a 300-pixel PNG, so test large prints before mass printing."],
    faq: [
      { question: "What file do I get when I download a QR code?", answer: "A PNG image named qrcode.png, 300 pixels square, generated in your browser." },
      { question: "Why does my QR code not scan?", answer: "Common causes are low contrast, a code printed too small, glare, a covered pattern, or a stretched image. Print larger, restore contrast and margin, and test again." },
      { question: "Can I put a password in a QR code?", answer: "You should not. Anyone who sees the code can scan it, so treat QR contents as visible to anyone with the image." },
      { question: "Is my QR text uploaded?", answer: "The code is generated in the browser, and the tool's code does not send the text you enter to a server to create the image." }
    ],
    related: [{ href: "/qr-code", label: "QR Code Generator" }, { href: "/password", label: "Password Generator" }, { href: "/image/resize", label: "Image Resizer" }]
  },
  {
    slug: "use-color-picker-hex-rgb-hsl",
    title: "How to Use a Color Picker: HEX, RGB, and HSL Explained",
    description: "Pick a colour, copy its HEX, RGB, and HSL values, choose shades, and check contrast before you use it.",
    intro: "A colour picker gives you a reusable value for a colour, not just a visual swatch. The SmartEdgeTools Color Picker shows the selected colour in HEX, RGB, and HSL, and offers nine lighter and darker-looking shades to copy. This guide explains what each format means, how to use the shades, and how to check that text on that colour stays readable.",
    sections: [
      { heading: "Pick a colour two ways", paragraphs: [
        "Use the browser colour control to pick visually, or enter a six-digit HEX code directly. The tool starts with #E85D2F, a warm orange-red. When you change the colour, all formats update together, so copy the format your tool needs rather than retyping a value from another format and risking a typo.",
        "HEX is the most common value in CSS and design tools. RGB gives the red, green, and blue channels as numbers. HSL gives hue as an angle, saturation as a percentage, and lightness as a percentage, which is often easier for adjusting how vivid or light a colour feels."
      ]},
      { heading: "Worked example: #E85D2F", paragraphs: [
        "For the starting colour #E85D2F, the red channel is 232, green is 93, and blue is 47, so the RGB value is rgb(232, 93, 47). In HSL, the hue is about 15 degrees, saturation about 80%, and lightness about 55%, written hsl(15, 80%, 55%). The exact rounded values shown by the tool are the ones to copy for your design.",
        "HEX uses pairs of hexadecimal digits for red, green, and blue. E8 is 232 in decimal, 5D is 93, and 2F is 47. That is why the same colour can be written in three different notations without changing how it looks."
      ]},
      { heading: "Use the shades, but check them", paragraphs: [
        "The shade row shows nine variations from darker to lighter, made by scaling the colour, and clicking a shade copies it. Shades are useful for hover states, backgrounds, borders, and accents that should feel related without being identical. Do not assume a shade is automatically readable for text: a light shade may be fine for a background but poor for small white text, and a dark shade may be fine for text but too heavy for a large background.",
        "Name colours in your design system when you reuse them, such as brand orange, brand orange dark, and brand orange light, and record the HEX value with each name. That prevents small variations from spreading across pages."
      ]},
      { heading: "Contrast is a separate check", paragraphs: [
        "A colour value alone does not guarantee readable text. Check the contrast between the text colour and the background colour at the size and weight where it will appear, and do not use colour as the only way to communicate meaning, such as red for error with no icon or text. A colour that looks clear on your screen may be harder to read on a phone in bright light or for a person with low vision.",
        "For important text, test the combination with a contrast checker and test it on a real device. For decorative elements, such as a border or a large illustration, exact contrast matters less, but keep the design consistent and avoid combinations that vibrate or strain the eye."
      ]}
    ],
    table: { caption: "Colour formats at a glance", headers: ["Format", "Example for #E85D2F", "Common use"], rows: [["HEX", "#E85D2F", "CSS and most design tools"], ["RGB", "rgb(232, 93, 47)", "When channel values are needed"], ["HSL", "hsl(15, 80%, 55%)", "Adjusting vividness and lightness"]] },
    takeaways: ["HEX, RGB, and HSL describe the same colour in different notations.", "Copy the format your tool needs, and copy shades directly to avoid typos.", "Check text contrast separately; a colour value alone does not guarantee readability."],
    faq: [
      { question: "What is the difference between HEX and RGB?", answer: "HEX writes the red, green, and blue channels as hexadecimal pairs. RGB writes the same three channels as decimal numbers. Both describe the same colour." },
      { question: "Can the picker sample a colour from a photo?", answer: "No. It shows values for the colour you pick or enter, and shades of that colour. It does not sample colours from an image or from another part of your screen." },
      { question: "How do I copy a shade?", answer: "Click the shade in the shade row. The tool copies that shade value for you to paste into your design." },
      { question: "Why does my colour look different on another screen?", answer: "Screens differ in brightness, calibration, and colour settings, so the same value can look slightly different. Check important colours on the devices your audience will use." }
    ],
    related: [{ href: "/color-picker", label: "Color Picker" }, { href: "/image/resize", label: "Image Resizer" }, { href: "/qr-code", label: "QR Code Generator" }]
  },
  {
    slug: "use-stopwatch-laps",
    title: "How to Use a Stopwatch and Read Lap Times",
    description: "Start, pause, resume, and record laps, and understand the difference between a lap time and total elapsed time.",
    intro: "A stopwatch measures elapsed time, and laps let you split that time into parts. The SmartEdgeTools Stopwatch shows time as minutes, seconds, and hundredths of a second, and records laps while it runs. This guide explains how to use it for practice, workouts, cooking, and timing tasks, and how to read the two times shown for each lap.",
    sections: [
      { heading: "Start, pause, resume, and reset", paragraphs: [
        "Press Start to begin, Pause to stop the count without losing it, and Start again to resume from the paused time. The button label changes to Resume when there is a paused time. Press Reset to clear the time and all laps and return to 00:00.00. Reset does not save the laps, so note any times you need before resetting.",
        "The display format is MM:SS.CS, where CS is hundredths of a second. For example, 01:23.45 means 1 minute, 23 seconds, and 45 hundredths. The timer updates about every 30 milliseconds in the browser, and the display rounds down to hundredths, so very short intervals should be treated as approximate."
      ]},
      { heading: "How laps work", paragraphs: [
        "Press Lap only while the stopwatch is running; the button is disabled when it is paused or at zero. Each lap row shows two times: the lap duration, which is the time since the previous lap, and the total elapsed time at that lap. The first lap duration equals the total time at that lap, because there is no previous lap.",
        "For example, if Lap 1 is pressed at 00:30.00 and Lap 2 at 01:10.00, Lap 2 lasted 40 seconds, while the total time at Lap 2 was 1 minute 10 seconds. Use lap durations to compare parts of a task, and total times to check progress against a deadline or a target."
      ]},
      { heading: "Practical timing tips", paragraphs: [
        "Decide what counts as the start and finish before you start, especially when timing people or tasks. For a race or a practice run, use Lap at each checkpoint rather than stopping and restarting, so the total time stays continuous. For cooking or a work task, use Pause when you are interrupted, so the paused time does not count as working time.",
        "Keep the page open while timing. The stopwatch runs in the browser page, and closing or refreshing the page will lose the current time and laps. If a time matters for a record, write it down or take a screenshot as soon as you finish."
      ]},
      { heading: "Accuracy limits", paragraphs: [
        "A browser stopwatch is suitable for practice, study, workouts, and everyday timing, but it is not a certified timing device. Browser timers, device load, and human reaction time when pressing Start, Lap, or Pause all add small errors. For official races, laboratory measurements, or legal timing, use the timing system required for that purpose.",
        "For fair comparisons, use the same device, the same start and finish rules, and the same lap points each time. A difference of a few hundredths of a second between runs may be reaction time, not a real change in performance."
      ]}
    ],
    table: { caption: "Stopwatch example: two laps", headers: ["Lap", "Lap duration", "Total elapsed time"], rows: [["Lap 1", "00:30.00", "00:30.00"], ["Lap 2", "00:40.00", "01:10.00"], ["Lap 3", "00:25.00", "01:35.00"]] },
    takeaways: ["Time is shown as minutes, seconds, and hundredths: MM:SS.CS.", "Each lap shows both its own duration and the total time at that lap.", "Pause keeps the time; Reset clears time and laps, so save times first."],
    faq: [
      { question: "What is the difference between lap time and total time?", answer: "Lap time is the duration since the previous lap. Total time is the elapsed time from the start to that lap." },
      { question: "Can I record a lap while paused?", answer: "No. The Lap button is disabled when the stopwatch is not running. Resume first, then press Lap." },
      { question: "Does the stopwatch keep running if I close the page?", answer: "No. It runs in the browser page, so closing or refreshing the page loses the current time and laps." },
      { question: "Is a browser stopwatch exact?", answer: "It is suitable for everyday timing, but browser timing and human reaction time add small errors. It is not a certified timing device." }
    ],
    related: [{ href: "/stopwatch", label: "Stopwatch" }, { href: "/typing-test", label: "Typing Speed Test" }, { href: "/random-number", label: "Random Number Generator" }]
  },
  {
    slug: "count-words-characters-reading-time",
    title: "How to Count Words, Characters, and Reading Time",
    description: "Understand how word, character, sentence, paragraph, and reading-time counts are calculated, and when each one matters.",
    intro: "Word counts matter for essays, articles, captions, and forms, but different tools count slightly differently. The SmartEdgeTools Word Counter shows words, characters, characters without spaces, sentences, paragraphs, and estimated reading time as you type or paste. This guide explains exactly how each count is calculated here, so you can check a result instead of guessing.",
    sections: [
      { heading: "How each count is calculated", paragraphs: [
        "Words are counted by trimming the text and splitting on whitespace, so a word separated by spaces, tabs, or line breaks counts once, and extra spaces do not create extra words. Characters count every character in the text, including spaces and line breaks. Characters without spaces remove all whitespace first, then count what remains.",
        "Sentences are counted by splitting on groups of ., !, and ? and keeping only non-empty parts, so an abbreviation with periods or an ellipsis can affect the count. Paragraphs are counted by splitting on line breaks and keeping only non-empty blocks. If your text has no line breaks, it counts as one paragraph, even if it is long."
      ]},
      { heading: "Reading time: a rough estimate", paragraphs: [
        "Reading time is calculated as words divided by 200, rounded up to whole minutes, and shown as minutes. For example, 400 words gives 2 minutes, and 401 words gives 3 minutes, because the tool rounds up. Zero words gives 0 minutes.",
        "Treat reading time as a rough guide, not a promise. Real reading speed varies with topic, language, layout, and whether the reader is skimming or studying. A technical text will usually take longer than the estimate, and a simple list may take less time."
      ]},
      { heading: "Which count to use for which task", paragraphs: [
        "Use words for essays, articles, and assignments that set a word limit. Use characters, or characters without spaces, for captions, bios, and forms that set a character limit, and check whether the limit includes spaces before you submit. Use sentences and paragraphs to check structure: very long sentences and very long paragraphs are often harder to read, even if the word count is correct.",
        "For a draft, check the counts after you finish editing, not only while you write. Cutting filler, splitting long sentences, and breaking long paragraphs can change the counts without changing the main ideas, and that is often an improvement."
      ]},
      { heading: "Why counts differ between tools", paragraphs: [
        "Tools differ on edge cases: hyphenated words, numbers, abbreviations, URLs, and words joined by punctuation. One tool may count hello-world as one word and another as two, and one tool may count an abbreviation as several sentences. That does not mean one tool is broken; it means the counting rule differs.",
        "For a formal limit, follow the rule of the organisation that set it, and check the result with their tool or method if they provide one. For everyday writing, use the same counter for drafts and final checks, so the counts are comparable."
      ]}
    ],
    table: { caption: "Worked word-counter examples", headers: ["Text", "Words", "Reading time"], rows: [["Hello world", "2", "1 min (rounded up)"], ["400 words of text", "400", "2 min"], ["401 words of text", "401", "3 min (rounded up)"]] },
    takeaways: ["Words split on whitespace; characters include spaces unless you use the no-spaces count.", "Reading time is words / 200, rounded up to whole minutes.", "Counts differ between tools on hyphens, abbreviations, and punctuation; follow the limit-setter's rule for formal work."],
    faq: [
      { question: "Do extra spaces add words?", answer: "No. The tool trims the text and splits on whitespace, so extra spaces do not create extra words." },
      { question: "What is the difference between characters and characters without spaces?", answer: "Characters count everything, including spaces and line breaks. Characters without spaces remove all whitespace first." },
      { question: "Why is reading time rounded up?", answer: "The tool divides words by 200 and rounds up to a whole minute, so 401 words shows as 3 minutes, not 2 minutes." },
      { question: "Is my text uploaded to count it?", answer: "The counter runs in your browser as you type or paste. It does not ask you to create an account to count text." }
    ],
    related: [{ href: "/word-counter", label: "Word Counter" }, { href: "/text-case", label: "Case Converter" }, { href: "/typing-test", label: "Typing Speed Test" }]
  },
  {
    slug: "convert-text-case",
    title: "How to Convert Text Case: Uppercase, Title Case, camelCase, and More",
    description: "Choose the right case for headings, code, file names, and prose, and avoid the mistakes each format can cause.",
    intro: "Text case changes how words look, and in code it can also change meaning. The SmartEdgeTools Case Converter shows eight formats at once from the text you enter, and clicking a format copies it. This guide explains each format, when to use it, and when a case change can break something.",
    sections: [
      { heading: "Formats for ordinary writing", paragraphs: [
        "UPPERCASE makes every letter capital, which is useful for short labels, warnings, or acronyms, but hard to read in long text and often read as shouting online. lowercase makes every letter small, which is useful for email addresses and some identifiers, but not for normal sentences. Title Case capitalises the first letter of each word, as in Hello World, and is common for headings. Sentence case capitalises only the first letter of the sentence, as in Hello world, and is common for body text and descriptions.",
        "For headings, follow the style of the publication or organisation you are writing for, because title case rules differ on small words such as and, of, and the. The tool applies a simple first-letter rule; it does not apply a full publishing style guide, so check headings that contain small words or proper names."
      ]},
      { heading: "Formats for code and file names", paragraphs: [
        "camelCase joins words with no spaces and capitalises each word after the first, as in helloWorld, and is common for variable and function names in many programming languages. snake_case joins words with underscores, as in hello_world, and is common for file names, database fields, and Python identifiers. kebab-case joins words with hyphens, as in hello-world, and is common for URLs, file names, and CSS class names.",
        "In code, case usually matters: helloWorld, HelloWorld, and hello_world can be three different names. Do not change case in code without checking the language and the existing names, and do not change case in passwords, URLs, or file paths without checking, because those can also be case-sensitive."
      ]},
      { heading: "Reverse case: a special case", paragraphs: [
        "The reverse format flips the case of each letter, so Hello World becomes hELLO wORLD, and the tool labels it esreveR as an example of the effect. It is useful for fixing text typed with Caps Lock on, or for a playful effect, but it is not a standard format for publishing or code. If you typed a whole paragraph with Caps Lock on, converting to sentence case or lowercase first, then fixing the first letter, is usually cleaner than reversing every letter."
      ]},
      { heading: "How to use the tool safely", paragraphs: [
        "Enter your text, read all eight results, and click the format you want to copy. Check the result before pasting, especially for proper names, acronyms, and words with apostrophes, because a simple case rule can change McDonald, NASA, or don't in a way you do not want. For a long document, convert in sections and review each section, rather than converting everything at once and assuming it is correct.",
        "The conversion runs in your browser and does not need an account. For sensitive text, still avoid pasting passwords or private data into any website, even for a simple format change."
      ]}
    ],
    table: { caption: "Text case formats for Hello World", headers: ["Format", "Result", "Common use"], rows: [["UPPERCASE", "HELLO WORLD", "Short labels and acronyms"], ["lowercase", "hello world", "Email and some identifiers"], ["Title Case", "Hello World", "Headings"], ["Sentence case", "Hello world", "Body text"], ["camelCase", "helloWorld", "Code names"], ["snake_case", "hello_world", "File and field names"], ["kebab-case", "hello-world", "URLs and CSS classes"], ["Reverse", "hELLO wORLD", "Fixing Caps Lock text"]] },
    takeaways: ["Title Case is for headings; Sentence case is for body text.", "In code, case usually matters, so check names before changing them.", "Always review proper names and acronyms after a case conversion."],
    faq: [
      { question: "Does Title Case capitalise every word?", answer: "The tool capitalises the first letter of each word. Full publishing style guides have extra rules for small words, so check headings against the style you follow." },
      { question: "What is the difference between snake_case and kebab-case?", answer: "snake_case joins words with underscores, as in hello_world. kebab-case joins words with hyphens, as in hello-world." },
      { question: "Can changing case break code?", answer: "Yes. In many languages, variable and function names are case-sensitive, so helloWorld and HelloWorld can be different names." },
      { question: "How do I copy a converted result?", answer: "Click the format you want. The tool copies that result, and shows Copied for that format." }
    ],
    related: [{ href: "/text-case", label: "Case Converter" }, { href: "/word-counter", label: "Word Counter" }, { href: "/json-formatter", label: "JSON Formatter & Validator" }]
  },
  {
    slug: "improve-text-ai-safely",
    title: "How to Improve Text With AI Without Losing Meaning",
    description: "Use the AI Text Improver for clearer, professional text, check every change, and keep sensitive text out.",
    intro: "The SmartEdgeTools AI Text Improver rewrites text in a professional and clear way, keeping the intended meaning and without adding facts. It is useful for emails, updates, and drafts that need to sound clearer, but a rewrite can still change emphasis or drop a qualification. This guide explains how to use it well, what its limits are, and what not to submit.",
    sections: [
      { heading: "What the tool does", paragraphs: [
        "Enter text up to 8,000 characters, and the tool sends it to the site's rewrite endpoint, which forwards it to OpenRouter and an available language model using the openrouter/auto model. The instruction is fixed: rewrite in a professional and clear way, keep the intended meaning, do not add facts, and return only the rewritten text. There are no tone controls in the current tool.",
        "The endpoint limits requests to 5 per minute per IP address, with a 60-second retry wait after that limit, and times out after 25 seconds. If you see a rate-limit or unavailable message, wait and try again, or split a long text into smaller sections under 8,000 characters."
      ]},
      { heading: "Write good input, then check the output", paragraphs: [
        "Short passages with a clear audience are easier to review. Include only details that should remain, and keep numbers, dates, names, and conditions exact in the input, because a rewrite can round a number, soften a condition, or drop a caveat without making the text obviously wrong. After you get the result, compare it line by line with your source, restore any missing facts, and check tone: professional and clear is not the same as formal, friendly, or legally precise.",
        "Do not use the output for legal, medical, financial, or safety-critical text without a qualified human review. The tool does not know your contract, your policy, or your audience's requirements, and it cannot verify facts. For school or work, follow their rules for AI assistance and disclose AI help where required."
      ]},
      { heading: "What not to submit", paragraphs: [
        "Because text is sent to an external AI service, do not submit passwords, personal records, confidential business material, health information, or other sensitive information. The tool's own page warns about this, and the Privacy Policy describes analytics and advertising separately. If a passage contains sensitive details, remove them before rewriting, or rewrite it yourself.",
        "Also avoid submitting text you do not have the right to use, such as copyrighted work you are not permitted to adapt. A rewrite does not make someone else's work yours, and it does not remove copyright or attribution requirements."
      ]},
      { heading: "When AI rewriting is not the right tool", paragraphs: [
        "Use the AI improver for clarity, not for research, calculation, or fact-checking. It does not browse the web, does not verify a claim, and is instructed not to add facts, but it can still misread an ambiguous sentence. For a factual answer, use a calculator, a converter, or a trusted source, and for a creative draft, use the rewrite as a starting point that you edit in your own voice.",
        "If the tool is temporarily unavailable, the page shows an unavailable message. That can happen when the AI service key is not configured on the server or when the service fails; it does not mean your text was saved. Try again later, or edit the text manually in the meantime."
      ]}
    ],
    table: { caption: "AI rewrite: good and risky uses", headers: ["Use", "Good for AI rewrite", "Needs human review"], rows: [["Email or update", "Clearer wording, same facts", "Dates, amounts, and commitments"], ["Draft description", "Shorter, more professional text", "Claims about a product or service"], ["Sensitive or legal text", "No, do not submit it", "Yes, use a qualified human"]] },
    takeaways: ["The tool rewrites up to 8,000 characters in a professional, clear style, without adding facts.", "Compare the output with the source and restore any dropped qualifications.", "Never submit passwords, personal records, or confidential material to an external AI service."],
    faq: [
      { question: "How long can my text be?", answer: "Up to 8,000 characters. For longer content, rewrite it in smaller sections." },
      { question: "Why did I get a too-many-requests message?", answer: "The endpoint allows 5 rewrite requests per minute per IP address. Wait a minute and try again." },
      { question: "Does the improver add facts?", answer: "It is instructed not to add facts, but it can still misread a sentence or drop a qualification, so check the output against your source." },
      { question: "Is my text sent to an external service?", answer: "Yes. The tool forwards your text to OpenRouter and an available language model, so do not submit sensitive information." }
    ],
    related: [{ href: "/ai-rewrite", label: "AI Text Improver" }, { href: "/word-counter", label: "Word Counter" }, { href: "/text-case", label: "Case Converter" }]
  },
  {
    slug: "understand-birth-chart",
    title: "How to Understand a Birth Chart: Signs, Planets, and Houses",
    description: "Learn what a natal chart shows, why charts differ between sites, and why astrology is not a science.",
    intro: "A birth chart, also called a natal chart, is a map of the sky from a specific place at the moment of birth, as interpreted by astrology. The SmartEdgeTools Birth Chart Calculator shows that chart through an embedded widget from AstroWay. This guide explains the main parts of a chart, why the same birth details can give different charts on different sites, and what a chart cannot do.",
    sections: [
      { heading: "What the chart shows", paragraphs: [
        "Enter your birth date, time, and place in the widget to explore planetary placements and houses. Astrologers read a chart using three building blocks: the zodiac signs, the planets and other points, and the houses, which are divisions of the sky based on time and place. The Ascendant, or rising sign, is the sign on the eastern horizon at birth. The Midheaven is the point highest in the sky at birth, often linked in astrology to public life and career.",
        "Aspects are the angles between planets, such as conjunctions and oppositions, which astrologers use to describe how themes interact. Retrograde means a planet appears to move backward from Earth's point of view; that is an optical effect, not a real reversal of the planet's motion."
      ]},
      { heading: "Why birth time and place matter in astrology", paragraphs: [
        "In astrology, the exact time and place change the Ascendant and the houses, because the sky turns during the day. A chart made without a birth time, or with a rounded time, can still show planetary signs, which change more slowly, but its houses and Ascendant will be uncertain. If you do not know your birth time, treat the house and Ascendant parts as uncertain rather than exact, and do not use them for decisions.",
        "Different sites can also give different charts for the same details because astrologers use different house systems, such as Placidus and Whole Sign, and different zodiac conventions, such as tropical or sidereal. A difference between sites does not necessarily mean one site made a calculation error; it may mean the systems differ."
      ]},
      { heading: "Astrology is not science", paragraphs: [
        "Astrology is a cultural and reflective tradition, not a science, and scientific studies have not shown that birth charts predict personality or events. Use a chart for interest and self-reflection if you enjoy it, and do not base medical, financial, legal, or major life decisions on it. If a chart reading causes worry, talk to a trusted person or a qualified professional, not to the chart alone.",
        "Be careful with readings that claim to predict a specific event, a person's character, or compatibility with certainty. A general statement that could apply to many people can feel personal even when it is not specific, and that feeling does not make it a prediction."
      ]},
      { heading: "Who provides the chart, and what happens to your details", paragraphs: [
        "The chart is generated by an embedded widget from AstroWay, a third-party service, rather than by SmartEdgeTools code. The page states that AstroWay says birth details entered in the widget stay in the visitor's browser and are not sent to its server, and the widget is loaded from AstroWay's site. If the widget does not load, check your connection or try again later, and remember that SmartEdgeTools cannot fix a third-party widget from its own code.",
        "Even with that statement, avoid entering more personal detail than the widget needs, and do not enter passwords, account details, or other sensitive information in a birth chart widget. The chart needs only birth date, time, and place to produce its usual output."
      ]}
    ],
    table: { caption: "Birth chart terms", headers: ["Term", "Meaning in astrology", "Caution"], rows: [["Ascendant", "Sign on the eastern horizon at birth", "Needs an accurate birth time"], ["Midheaven", "Point highest in the sky at birth", "Interpretation, not a measurement"], ["Houses", "Divisions of the sky by time and place", "Varies by house system"], ["Retrograde", "Planet appears to move backward", "Optical effect, not a real reversal"]] },
    takeaways: ["A natal chart maps signs, planets, and houses for a birth time and place.", "House system and zodiac convention can change the chart, so charts can differ between sites.", "Astrology is not science; do not base medical, financial, or legal decisions on a chart."],
    faq: [
      { question: "Why does my chart look different on another website?", answer: "Sites use different house systems, such as Placidus and Whole Sign, and different zodiac conventions, such as tropical or sidereal, so the same birth details can produce different charts." },
      { question: "Can a birth chart predict my future?", answer: "No. Astrology is a cultural and reflective tradition, not a science, and studies have not shown that birth charts predict personality or events." },
      { question: "Who provides the chart calculation?", answer: "An embedded widget from AstroWay, a third-party service, rather than SmartEdgeTools code. If the widget does not load, check your connection or try again later." },
      { question: "Do I need an exact birth time?", answer: "For houses and the Ascendant, yes. Without an accurate time, treat those parts as uncertain, while planetary signs change more slowly." }
    ],
    related: [{ href: "/birth-chart", label: "Birth Chart Calculator" }, { href: "/age-calculator", label: "Age Calculator" }, { href: "/random-number", label: "Random Number Generator" }]
  }
];

export function ArticleBody({ article }: { article: NewArticle }) {
  return (
    <>
      {article.sections.map((section) => (
        <section key={section.heading}>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3">{paragraph}</p>)}
        </section>
      ))}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="mb-2 text-left font-semibold">{article.table.caption}</caption>
          <thead><tr>{article.table.headers.map((header) => <th key={header} className="border-b border-gray-300 px-3 py-2">{header}</th>)}</tr></thead>
          <tbody>{article.table.rows.map((row) => <tr key={row.join("|")}>{row.map((cell, index) => <td key={`${cell}-${index}`} className="border-b border-gray-200 px-3 py-2">{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Key takeaways</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">{article.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Frequently asked questions</h2>
        {article.faq.map(({ question, answer }) => <div key={question} className="mt-4"><h3 className="font-semibold text-gray-900">{question}</h3><p className="mt-1">{answer}</p></div>)}
      </section>
      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Related tools</h2>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">{article.related.map((item) => <li key={item.href}><Link className="text-blue-600 hover:underline" href={item.href}>{item.label}</Link></li>)}</ul>
      </section>
    </>
  );
}
