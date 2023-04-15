const app = require('./app');

// ======================== DUAS FORMAS DE FAZER ==================

require('dotenv').config();

/*const dotenv = require('dotenv');

process.env.PORT

dotenv.config()
*/

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));