const parseEnv = () => {
  const values = [];
  for (let value of Object.keys(process.env)) {
    if (value.slice(0, 4) === "RSS_") {
      value.push(`${val}=${process.env[val]}`);
    }
  }
  console.log(vals.join("; "));
};

parseEnv();
