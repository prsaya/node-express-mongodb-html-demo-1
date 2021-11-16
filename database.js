const { MongoClient } = require("mongodb")
const uri = "mongodb://127.0.0.1:27017"
const opts = { useUnifiedTopology: true }

const connect = async () => {
	try {
		console.log("# Connecting to database server...")
		const client = await MongoClient.connect(uri, opts)
		console.log("# Connected")
		return client
	}
	catch(err) {
		console.error("# Database connection error")
		throw err
	}
}

module.exports = connect;
