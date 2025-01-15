export const useIFetch = (request: string, opts: object = {}) => {
    const config = useRuntimeConfig();
  
    const token = process.client ? user().token : null;
    return useFetch(request, {
      baseURL: config.app.API,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined, 
        ...(opts.headers || {}), 
      },
      ...opts,
    });
  };
  