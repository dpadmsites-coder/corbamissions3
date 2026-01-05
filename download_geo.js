const fs = require('fs');
const https = require('https');
const path = require('path');

const url = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";
const outFile = path.join(__dirname, 'public', 'countries.json');

console.log(`Downloading from ${url}...`);

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            const targets = ["Brazil", "Brasil", "Australia"];
            const filtered = {
                type: "FeatureCollection",
                features: json.features.filter(f => targets.includes(f.properties.name))
            };
            fs.writeFileSync(outFile, JSON.stringify(filtered));
            console.log("Success: wrote " + filtered.features.length + " countries to " + outFile);
            console.log("Countries found: " + filtered.features.map(f => f.properties.name).join(", "));
        } catch (e) {
            console.error("Error parsing or writing:", e);
            process.exit(1);
        }
    });
}).on('error', (e) => {
    console.error("Network error:", e);
    process.exit(1);
});
