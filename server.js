const app = require("./src/app"); 
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});
