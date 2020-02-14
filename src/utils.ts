import {
  Company,
  SearchResponseRecord,
  QuoteResponseRecord,
  LogoResponseRecord
} from "./types";

export function createCompanyRecord(
  searchRecord: SearchResponseRecord,
  logoRecord: LogoResponseRecord,
  quoteRecord: QuoteResponseRecord
): Company {
  return {
    name: searchRecord["2. name"],
    symbol: searchRecord["1. symbol"],
    domain: logoRecord.domain,
    logo: logoRecord.logo,
    region: searchRecord["4. region"],
    marketOpen: searchRecord["5. marketOpen"],
    marketClose: searchRecord["6. marketClose"],
    price: quoteRecord["05. price"],
    currency: searchRecord["8. currency"],
    change: quoteRecord["09. change"],
    changePercent: quoteRecord["10. change percent"],
    closed: quoteRecord["07. latest trading day"]
  };
}

/**
 * Utility function to transform company names retrieved from
 * AV API to be usable up to some degree by ClearBit API to retrieve
 * logo and domain, as it has issues finding such with full company
 * name. Didn't have much time to come up with better solution for now.
 *
 * @param name company name to trim
 * @returns trimmed company name
 */
export function trimCompanyName(name: string): string {
  return name
    .replace("Company", "")
    .replace("Companies", "")
    .replace("Inc.", "")
    .replace("Holding", "")
    .replace("Limited", "")
    .replace("Corporation", "")
    .replace(",", "")
    .replace(" ", "");
}
