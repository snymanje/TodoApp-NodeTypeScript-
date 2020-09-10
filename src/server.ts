import { app } from './app';

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
});
