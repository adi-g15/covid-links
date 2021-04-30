const data = require("./data.json");

const { writeFileSync } = require("fs");

const types = new Set(data.map(d => d.type).flat());
writeFileSync("types.json", JSON.stringify(Array.from(types.values()), null, 4));
