const fs = require('fs')

var logger = fs.createWriteStream('export.csv')
logger.write('folder,url,title,description,tags,created\n') // format

fs.readFile('daniel-export.json', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    const data = JSON.parse(fileContents)
    for (let i = 0; i < data.length; i++) {
      logger.write(`Imported,${data[i].url},"${data[i].title.replace(/"/g, '&quot;')}",,"${data[i].tags.toString().substr(1).slice(0, -1)}",${data[i].created_at}\n`)
    }
  } catch(err) {
    console.error(err)
  }
})
