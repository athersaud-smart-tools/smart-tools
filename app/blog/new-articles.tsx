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
        "Example two: suppose the principal is PKR 1,000,000, the annual rate is 12%, and the term is three years. The monthly rate is 0.01 and there are 36 payments. The formula gives about PKR 33,214.31 per month, about PKR 1,195,715.15 total, and about PKR 195,715.15 in interest. In the SmartEdgeTools calculator, choose Rs for a PKR principal so the results are labelled in rupees. That label is for your own figures; it is not a currency conversion."
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
    table: { caption: "Worked examples using a fixed annual rate and monthly payments", headers: ["Principal", "Annual rate", "Term", "Estimated monthly payment"], rows: [["$10,000", "5.5%", "5 years", "$191.01"], ["PKR 1,000,000", "12%", "3 years", "PKR 33,214.31"]] },
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
        "A quote such as 1 USD = 276.75 PKR says one US dollar is estimated to equal 276.75 Pakistani rupees at the quoted rate. To convert 10 USD, multiply 10 by 276.75, which gives 2,767.50 PKR before any fees. Reversing the pair changes the operation: one rupee is worth approximately the reciprocal of that quote in dollars, not 276.75 dollars.",
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
        "Using a returned reference quote of 1 USD = 276.745272 PKR, 10 USD converts to 2,767.45272 PKR, displayed as 2,767.45 when rounded to two decimal places. This is the arithmetic result from the rate; it does not include a bank or card adjustment.",
        "At a quoted 1 EUR = 1.08 USD, 50 EUR converts to 54 USD. If the provider’s customer rate instead were 1 EUR = 1.05 USD, the same 50 EUR would convert to 52.50 USD before fees. The examples show why the quote used matters; they do not promise that either rate is available when you transact.",
        "Suppose a provider quotes 1 USD = 280 PKR but charges an additional 500 PKR transfer fee. The converter can estimate the exchange portion of 10 USD as 2,800 PKR, but that amount alone does not describe the recipient’s net amount. Confirm whether the fee is paid separately or deducted from the transfer."
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
    table: { caption: "Illustrative conversions before transaction fees", headers: ["Rate", "Source amount", "Calculated amount"], rows: [["1 USD = 276.745272 PKR", "10 USD", "2,767.45 PKR"], ["1 EUR = 1.08 USD", "50 EUR", "54 USD"], ["1 USD = 280 PKR", "10 USD", "2,800 PKR"]] },
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
