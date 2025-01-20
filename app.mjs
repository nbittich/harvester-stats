import { readFileSync, writeFileSync } from 'fs';
import { v7 as uuid } from 'uuid';

const sj = [...toJson('harvester0'), ...toJson('harvester1'), ...toJson('harvester2'), ...toJson('harvester3')];


enrich(sj, "prodbeslist.csv", "inProd");
enrich(sj, "catchup-server.csv", "inCatchupServer");


const out = [`"citName","targetUrl","harvestedIn","inProd","inCatchup"`];
for (const s of sj) {
    out.push(`"${s.name}","${s.targetUrl}",${s.server},${s.inProd ? s.inProd : 'N/A'},${s.inCatchupServer ? s.inCatchupServer : 'N/A'}`);
}


writeFileSync("stats.csv", out.join('\n'));

function enrich(sj, filename, keyCount) {
    const f = readFileSync(filename, { encoding: 'utf-8' });

    for (let line of f.split('\n')) {
        line = line.trim();
        if (!line?.length) {
            continue;
        }
        let [count, cityName] = line.split(',');
        cityName = cityName.replaceAll('"', '').trim();
        let idx = sj.findIndex(s => {
            if (!s.name) {
                console.error("no city name here!!! ", s);
                process.exit(-1);
            }
            return s.name.toLowerCase() === cityName.toLowerCase();
        });
        if (idx < 0) {
            console.log("warn. no index found in any harvester for city", cityName, "and count", count, "from file", filename);
            continue;
        }
        // console.log(idx)
        // console.log(sj[idx])
        sj[idx][keyCount] = parseInt(count);
    }
}


function toJson(filename) {
    const f = readFileSync(filename + ".csv", { encoding: 'utf-8' });
    const out = [];
    for (let line of f.split('\n')) {
        line = line.trim();
        if (!line?.length) {
            continue;
        }
        let [name, targetUrl, cronExpr] = line.split(',');
        name = name.replaceAll('"', '').trim();
        targetUrl = targetUrl.replaceAll('"', '').trim();
        cronExpr = cronExpr.replaceAll('"', '').trim();
        if (cronExpr.split(' ').length === 5) {
            cronExpr = "0 " + cronExpr + " *";
        }
        if (cronExpr.split(' ').length !== 7) {
            throw 'bad cron expr ' + cronExpr;
        }
        out.push({
            _id: uuid().replaceAll('-', ''),
            name,
            server: filename,
            creationDate: new Date().toISOString(),
            targetUrl,
            taskDefinition: {
                "name": "collect",
                "order": 0,
                "payload": {
                    "type": "scrapeUrl",
                    "value": targetUrl
                }
            },
            definitionId: '0193e822c0377b8187a6d151dbbb4216',
            cronExpr
        })
    }
    return out;
}
