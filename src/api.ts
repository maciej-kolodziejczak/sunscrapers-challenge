const apiKey = process.env.NODE_ENV === "production" ? "prodKey" : "devKey";

export const getFromAPI = (baseUrl: string) => async (endpoint: string) => {
  const response = await fetch(`${baseUrl}/${endpoint}`);
  return response.json();
};

export const getFromCB = getFromAPI("https://autocomplete.clearbit.com/v1");
export const getFromAV = getFromAPI("https://www.alphavantage.co");

export const getLogo = <T>(name: string): Promise<T> =>
  getFromCB(`companies/suggest?query=${name}`);
export const getSearchResults = <T>(symbol: string): Promise<T> =>
  getFromAV(
    `/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${apiKey}`
  );
export const getQuote = <T>(symbol: string): Promise<T> =>
  getFromAV(`/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`);
