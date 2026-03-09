const express = require('express');
const app = express();
const port = 3000;

const visitorRoutes = require('./routes/Visitor');
const creatorRoutes = require('./routes/Creator');
const investorRoutes = require('./routes/Investor');

app.use(express.json());

app.use("/visitor",visitorRoutes);
app.use("/creator",creatorRoutes);
app.use("/investor",investorRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

