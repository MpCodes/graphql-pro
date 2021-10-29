const express = require('express');
const connectDB = require('./config/db');
const { graphqlHTTP } = require('express-graphql');
var schema = require('./graphql/bookSchemas');
var cors = require('cors');

const app = express();

// Connect to database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// GraphQL setup
app.use('*', cors());
app.use(
	'/graphql',
	cors(),
	graphqlHTTP({
		schema: schema,
		rootValue: global,
		graphiql: true,
	})
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
