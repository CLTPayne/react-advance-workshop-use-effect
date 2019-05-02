const catsApi = paramsQuery => {
  return fetch(`https://cataas.com/cat/says/${paramsQuery}`).then(r => r.url);
};

export default catsApi;
