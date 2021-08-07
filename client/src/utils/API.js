// pull and display search results from the NYT News API from their section called "Your Money"
export const getRecentNews = () => {
  return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=money&fq=section_name:("Your Money")&api-key=bSAhQ4HUGXtpkH7xVjlrgXALMEWxr35z`);
};