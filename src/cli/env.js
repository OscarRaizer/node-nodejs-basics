const parseEnv = () => {
  const prefix = "RSS_";

  for (const key in process.env) {
    if (key.startsWith(prefix)) {
      console.log(key, process.env[key]);
    }
  }
};

parseEnv();
