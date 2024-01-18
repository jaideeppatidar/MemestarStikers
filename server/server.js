const  express = require('express') ;
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const  env = require('dotenv')
const app = express();
var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 10, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 10, type: 'application/x-www-form-urlencoded' });
app.use(jsonParser);
app.use(urlencodedParser);

app.use(cors());
env.config()
const port = process.env.PORT||8007

const db = mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase")
  .then((data) => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
const schema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const modelData = mongoose.model("Datas", schema);

app.post("/data", async (req, res) => {
  const { img, desc } = req.body;
  try {
    const response = await modelData.create({ img, desc });
    res
      .json({
        message: "data received",
        success: true,
        data: response
      })
      .status(200);
  } catch (err) {
    res.json({

      message: 'data not found',
      success: false,
      data: err
    }).status(500)
  }
});
app.post("/getData", async (req, res) => {
  const id = req.body.id
  console.log(req.body);
  console.log(id);
  try {
    const response = await modelData.findOne({ _id: id });

    res
      .json({
        message: "data send successfully",
        success: true,
        data: response
      })
      .status(200);
  } catch (err) {
    res.json({
      message: 'data not found',
      success: false,
      data: err
    }).status(500)
  }
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});