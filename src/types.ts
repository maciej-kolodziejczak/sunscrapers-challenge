export interface Company {
  name: string;
  symbol: string;
  domain: string;
  logo: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  price: string;
  currency: string;
  change: string;
  changePercent: string;
  closed: string;
}

export interface LogoResponseRecord {
  name: string;
  domain: string;
  logo: string;
}

export type LogoResponse = LogoResponseRecord[];

export interface SearchResponseRecord {
  "1. symbol": string;
  "2. name": string;
  "3. type": string;
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timeZone": string;
  "8. currency": string;
  "9. matchScore": string;
}

export interface SearchResponse {
  bestMatches: SearchResponseRecord[];
}

export interface QuoteResponseRecord {
  "01. symbol": string;
  "02. open": string;
  "03. high": string;
  "04. low": string;
  "05. price": string;
  "06. volume": string;
  "07. latest trading day": string;
  "08. previous close": string;
  "09. change": string;
  "10. change percent": string;
}

export interface QuoteResponse {
  "Global Quote": QuoteResponseRecord;
}
