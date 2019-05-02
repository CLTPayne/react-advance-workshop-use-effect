import { useState, useEffect } from "react";

let useApi = (api, params) => {
  const [state, setState] = useState({ loading: false });

  useEffect(() => {
    setState({ loading: true });
    api(params)
      .then(data => setState({ data, loading: false }))
      .catch(error => setState({ error, loading: false }));
  }, [params]);

  return [state];
};

export default useApi;
