const db = require('../db')

class KanalserviceController {
    async getTable(req, res) {
        const data = await db.query('SELECT * FROM kanalservice')
        res.json(data.rows)
    }
}

module.exports = new KanalserviceController()