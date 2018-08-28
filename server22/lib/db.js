const Table = require('./table')

const db = {
  init() {
    this.comments = new Table()
  },
}

db.init()

require('./seeds/comments')(db)

module.exports = db
