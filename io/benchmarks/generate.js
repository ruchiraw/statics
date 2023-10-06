const fs = require('fs')


const data = []

const total = 100

const createRecord = (i) => {
  const record = {
    id: i,
    statusCode: 200,
    delay: 50
  }

  return record
}

for (let i = 0; i < total; i++) {
  data.push(createRecord(i))
}

fs.writeFileSync(`data-${total}.json`, JSON.stringify(data))