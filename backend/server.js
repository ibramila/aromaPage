const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());


const { Schema } = mongoose;
const userScheme = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

mongoose.set('strictQuery', false);
const Users = mongoose.model("users", userScheme);

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD)
mongoose.connect(DB, (err) => {
    console.log(err);
    if (!err) {
        console.log("Connected");
        app.listen(PORT, () => {
            console.log(`Port:${PORT}`);
        })
    }
})

app.get("/users", (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.status(500).json({ message: err })
        }
    })
})

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    Users.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            } else {
                res.status(404).json({ message: "Not Found" })
            }
        } else {
            res.status(500).json(
                { message: err }
            )
        }
    })
})

app.post("/users", async (req, res) => {
    const user = req.body
    try {
        await Users.create(user)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error);
    }
})

app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    Users.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("Successfully DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
})