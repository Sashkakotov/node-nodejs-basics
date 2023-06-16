const parseArgs = () => {
    const values = [];
    process.argv.forEach((value, i) => {
        if(value.slice(0, 2) === '--') {
            values.push(`${value.slice(2)} is ${process.argv[i+1]}`)
        }
    });
    console.log(values.join(', '))
};

parseArgs();