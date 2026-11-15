// Birth chart astronomy for the SmartEdgeTools Birth Chart Calculator.
// Low-precision geocentric ecliptic longitudes after Paul Schlyter's
// "How to compute planetary positions" (Sun ~0.01 deg, Moon ~0.1-0.3 deg
// with the main perturbation terms). Good enough to place the Sun, Moon,
// Ascendant and Midheaven in their signs; results within ~1 degree of a
// sign boundary are flagged as "close to the cusp" in the UI.
// Everything runs in the visitor's browser; no birth data leaves the page.

const RAD = Math.PI / 180;
const DEG = 180 / Math.PI;

export function rev(x: number): number {
  return x - 360 * Math.floor(x / 360);
}

function wrap180(x: number): number {
  const r = rev(x);
  return r > 180 ? r - 360 : r;
}

function sinD(x: number): number {
  return Math.sin(x * RAD);
}
function cosD(x: number): number {
  return Math.cos(x * RAD);
}

/** Julian Day for a UTC date-time (proleptic Gregorian calendar). */
export function julianDay(year: number, month: number, day: number, utHours: number): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  const jdn =
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045;
  return jdn - 0.5 + utHours / 24;
}

/** Schlyter day number: days since 1999 Dec 31.0 (= JD 2451543.5). */
function dayNumber(jd: number): number {
  return jd - 2451543.5;
}

function obliquity(d: number): number {
  return 23.4393 - 3.563e-7 * d;
}

/** Geocentric ecliptic longitude of the Sun, degrees 0-360. */
export function sunLongitude(jd: number): number {
  const d = dayNumber(jd);
  const w = 282.9404 + 4.70935e-5 * d; // longitude of perihelion
  const e = 0.016709 - 1.151e-9 * d; // eccentricity
  const M = rev(356.047 + 0.9856002585 * d); // mean anomaly
  const E = M + e * DEG * sinD(M) * (1 + e * cosD(M)); // eccentric anomaly, 1st approx
  const xv = cosD(E) - e;
  const yv = sinD(E) * Math.sqrt(1 - e * e);
  const v = Math.atan2(yv, xv) * DEG; // true anomaly
  // Schlyter's solar elements describe the Sun's apparent (geocentric) orbit,
  // so the true longitude is v + w directly (no 180-degree flip).
  return rev(v + w);
}

function sunMeanLongitude(jd: number): number {
  const d = dayNumber(jd);
  const w = 282.9404 + 4.70935e-5 * d;
  const M = 356.047 + 0.9856002585 * d;
  return rev(M + w);
}

/** Geocentric ecliptic longitude of the Moon, degrees 0-360. */
export function moonLongitude(jd: number): number {
  const d = dayNumber(jd);
  const N = rev(125.1228 - 0.0529538083 * d); // longitude of ascending node
  const i = 5.1454; // inclination
  const w = rev(318.0634 + 0.1643573223 * d); // argument of perigee
  const a = 60.2666; // semi-major axis, Earth radii
  const e = 0.0549; // eccentricity
  const M = rev(115.3654 + 13.0649929509 * d); // mean anomaly

  // Eccentric anomaly with a few Kepler iterations.
  let E = M + e * DEG * sinD(M) * (1 + e * cosD(M));
  for (let k = 0; k < 5; k++) {
    E = E - (E - e * DEG * sinD(E) - M) / (1 - e * cosD(E));
  }
  const xv = a * (cosD(E) - e);
  const yv = a * (Math.sqrt(1 - e * e) * sinD(E));
  const v = Math.atan2(yv, xv) * DEG;
  const r = Math.sqrt(xv * xv + yv * yv);

  const vw = v + w;
  const xh = r * (cosD(N) * cosD(vw) - sinD(N) * sinD(vw) * cosD(i));
  const yh = r * (sinD(N) * cosD(vw) + cosD(N) * sinD(vw) * cosD(i));
  let lon = rev(Math.atan2(yh, xh) * DEG);

  // Main perturbation terms (Schlyter), using mean elements.
  const Ms = rev(356.047 + 0.9856002585 * d);
  const Lm = rev(N + w + M); // Moon mean longitude
  const Ls = sunMeanLongitude(jd);
  const D = rev(Lm - Ls); // mean elongation
  const F = rev(Lm - N); // argument of latitude
  lon +=
    -1.274 * sinD(M - 2 * D) +
    0.658 * sinD(2 * D) +
    -0.186 * sinD(Ms) +
    -0.059 * sinD(2 * M - 2 * D) +
    -0.057 * sinD(M - 2 * D + Ms) +
    0.053 * sinD(M + 2 * D) +
    0.046 * sinD(2 * D - Ms) +
    0.041 * sinD(M - Ms) +
    -0.035 * sinD(D) +
    -0.031 * sinD(M + Ms) +
    -0.015 * sinD(2 * F - 2 * D) +
    0.011 * sinD(M - 4 * D);
  return rev(lon);
}

/** Greenwich Mean Sidereal Time, degrees 0-360. */
export function gmst(jd: number): number {
  return rev(280.46061837 + 360.98564736629 * (jd - 2451545.0));
}

/** Local sidereal time in degrees. Longitude is east-positive. */
export function localSiderealTime(jd: number, longitudeDeg: number): number {
  return rev(gmst(jd) + longitudeDeg);
}

/**
 * Ascendant (rising sign longitude) for a local sidereal time and latitude.
 * Solved numerically: the ascendant is the ecliptic longitude whose point
 * sits exactly on the eastern horizon (altitude 0, rising side).
 */
export function ascendant(lstDeg: number, latitudeDeg: number): number {
  const eps = 23.4393;
  const tanLat = Math.tan(latitudeDeg * RAD);
  const f = (lam: number): number => {
    const decl = Math.asin(sinD(eps) * sinD(lam)) * DEG;
    const ra = rev(Math.atan2(cosD(eps) * sinD(lam), cosD(lam)) * DEG);
    const cosH0 = Math.max(-1, Math.min(1, -tanLat * Math.tan(decl * RAD)));
    const h0 = Math.acos(cosH0) * DEG;
    return wrap180(ra - h0 - lstDeg);
  };
  let prevLam = 0;
  let prevF = f(0);
  for (let lam = 0.25; lam <= 360.0001; lam += 0.25) {
    const cur = lam > 360 ? 360 : lam;
    const curF = f(cur);
    if (prevF === 0) return prevLam;
    if ((prevF < 0 && curF >= 0) || (prevF > 0 && curF <= 0)) {
      // Bisection between prevLam and cur (handle the wrap at 360/0).
      let lo = prevLam;
      let hi = cur;
      let flo = prevF;
      for (let k = 0; k < 40; k++) {
        const mid = (lo + hi) / 2;
        const fm = f(mid);
        if ((flo < 0 && fm >= 0) || (flo > 0 && fm <= 0)) {
          hi = mid;
        } else {
          lo = mid;
          flo = fm;
        }
      }
      return rev((lo + hi) / 2);
    }
    prevLam = cur;
    prevF = curF;
  }
  // Extremely high latitudes can leave a sliver of the ecliptic that never
  // rises; fall back to the closest approach.
  let best = 0;
  let bestAbs = Infinity;
  for (let lam = 0; lam < 360; lam += 0.5) {
    const v = Math.abs(f(lam));
    if (v < bestAbs) {
      bestAbs = v;
      best = lam;
    }
  }
  return best;
}

/** Midheaven longitude for a local sidereal time. */
export function midheaven(lstDeg: number): number {
  const eps = 23.4393;
  return rev(Math.atan2(sinD(lstDeg) / cosD(eps), cosD(lstDeg)) * DEG);
}

export const SIGNS = [
  { name: "Aries", symbol: "♈", element: "Fire", keywords: "bold, direct, energetic" },
  { name: "Taurus", symbol: "♉", element: "Earth", keywords: "steady, patient, practical" },
  { name: "Gemini", symbol: "♊", element: "Air", keywords: "curious, quick, adaptable" },
  { name: "Cancer", symbol: "♋", element: "Water", keywords: "protective, intuitive, home-focused" },
  { name: "Leo", symbol: "♌", element: "Fire", keywords: "expressive, proud, warm" },
  { name: "Virgo", symbol: "♍", element: "Earth", keywords: "precise, helpful, analytical" },
  { name: "Libra", symbol: "♎", element: "Air", keywords: "fair, social, harmony-seeking" },
  { name: "Scorpio", symbol: "♏", element: "Water", keywords: "intense, private, determined" },
  { name: "Sagittarius", symbol: "♐", element: "Fire", keywords: "honest, restless, philosophical" },
  { name: "Capricorn", symbol: "♑", element: "Earth", keywords: "ambitious, disciplined, dry-humoured" },
  { name: "Aquarius", symbol: "♒", element: "Air", keywords: "original, independent, idea-driven" },
  { name: "Pisces", symbol: "♓", element: "Water", keywords: "imaginative, gentle, empathetic" },
] as const;

export interface Placement {
  signIndex: number;
  sign: string;
  symbol: string;
  element: string;
  keywords: string;
  degreeInSign: number; // 0-30
  longitude: number; // 0-360
  nearCusp: boolean; // within 1 degree of a sign boundary
}

export function placement(longitude: number): Placement {
  const lon = rev(longitude);
  const idx = Math.floor(lon / 30) % 12;
  const deg = lon - idx * 30;
  const s = SIGNS[idx];
  return {
    signIndex: idx,
    sign: s.name,
    symbol: s.symbol,
    element: s.element,
    keywords: s.keywords,
    degreeInSign: deg,
    longitude: lon,
    nearCusp: deg < 1 || deg > 29,
  };
}

export interface BirthChartResult {
  sun: Placement;
  moon: Placement;
  rising: Placement | null; // null when birth time is unknown
  midheaven: Placement | null;
}

/**
 * Compute the Big Three + Midheaven.
 * utcOffsetHours is the offset in effect at the birthplace at the moment of
 * birth (including daylight saving, if it applied).
 */
export function computeBirthChart(input: {
  year: number;
  month: number;
  day: number;
  hour: number | null; // local birth hour 0-23, null = unknown time
  minute: number;
  utcOffsetHours: number;
  latitude: number;
  longitude: number;
}): BirthChartResult {
  const localHours = (input.hour ?? 12) + input.minute / 60;
  const utHours = localHours - input.utcOffsetHours;
  // julianDay handles utHours outside 0-24 by rolling into adjacent days.
  const jd = julianDay(input.year, input.month, input.day, 0) + utHours / 24;
  const sun = placement(sunLongitude(jd));
  const moon = placement(moonLongitude(jd));
  if (input.hour === null) {
    return { sun, moon, rising: null, midheaven: null };
  }
  const lst = localSiderealTime(jd, input.longitude);
  return {
    sun,
    moon,
    rising: placement(ascendant(lst, input.latitude)),
    midheaven: placement(midheaven(lst)),
  };
}

export interface CityPreset {
  name: string;
  lat: number;
  lon: number;
  utcOffset: number; // standard time offset in hours
}

// A starter list of birthplaces. The offset is standard time; the UI tells
// users to use the offset that applied at their birth (DST included).
export const CITY_PRESETS: CityPreset[] = [
  { name: "New York, USA", lat: 40.7128, lon: -74.006, utcOffset: -5 },
  { name: "Los Angeles, USA", lat: 34.0522, lon: -118.2437, utcOffset: -8 },
  { name: "Chicago, USA", lat: 41.8781, lon: -87.6298, utcOffset: -6 },
  { name: "Houston, USA", lat: 29.7604, lon: -95.3698, utcOffset: -6 },
  { name: "Toronto, Canada", lat: 43.6532, lon: -79.3832, utcOffset: -5 },
  { name: "Mexico City, Mexico", lat: 19.4326, lon: -99.1332, utcOffset: -6 },
  { name: "São Paulo, Brazil", lat: -23.5505, lon: -46.6333, utcOffset: -3 },
  { name: "Buenos Aires, Argentina", lat: -34.6037, lon: -58.3816, utcOffset: -3 },
  { name: "London, UK", lat: 51.5074, lon: -0.1278, utcOffset: 0 },
  { name: "Paris, France", lat: 48.8566, lon: 2.3522, utcOffset: 1 },
  { name: "Berlin, Germany", lat: 52.52, lon: 13.405, utcOffset: 1 },
  { name: "Madrid, Spain", lat: 40.4168, lon: -3.7038, utcOffset: 1 },
  { name: "Rome, Italy", lat: 41.9028, lon: 12.4964, utcOffset: 1 },
  { name: "Cairo, Egypt", lat: 30.0444, lon: 31.2357, utcOffset: 2 },
  { name: "Lagos, Nigeria", lat: 6.5244, lon: 3.3792, utcOffset: 1 },
  { name: "Johannesburg, South Africa", lat: -26.2041, lon: 28.0473, utcOffset: 2 },
  { name: "Riyadh, Saudi Arabia", lat: 24.7136, lon: 46.6753, utcOffset: 3 },
  { name: "Dubai, UAE", lat: 25.2048, lon: 55.2708, utcOffset: 4 },
  { name: "Karachi, Pakistan", lat: 24.8607, lon: 67.0011, utcOffset: 5 },
  { name: "Mumbai, India", lat: 19.076, lon: 72.8777, utcOffset: 5.5 },
  { name: "Delhi, India", lat: 28.6139, lon: 77.209, utcOffset: 5.5 },
  { name: "Dhaka, Bangladesh", lat: 23.8103, lon: 90.4125, utcOffset: 6 },
  { name: "Bangkok, Thailand", lat: 13.7563, lon: 100.5018, utcOffset: 7 },
  { name: "Jakarta, Indonesia", lat: -6.2088, lon: 106.8456, utcOffset: 7 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198, utcOffset: 8 },
  { name: "Manila, Philippines", lat: 14.5995, lon: 120.9842, utcOffset: 8 },
  { name: "Beijing, China", lat: 39.9042, lon: 116.4074, utcOffset: 8 },
  { name: "Tokyo, Japan", lat: 35.6762, lon: 139.6503, utcOffset: 9 },
  { name: "Seoul, South Korea", lat: 37.5665, lon: 126.978, utcOffset: 9 },
  { name: "Sydney, Australia", lat: -33.8688, lon: 151.2093, utcOffset: 10 },
  { name: "Auckland, New Zealand", lat: -36.8485, lon: 174.7633, utcOffset: 12 },
];
