const parseEnv = () => {
  const values = [];
  for (let value of Object.keys(process.env)) {
    if (value.slice(0, 4) === "RSS_") {
      values.push(`${value}=${process.env[value]}`);
    }
  }
  console.log(values.join("; "));
};

parseEnv();
