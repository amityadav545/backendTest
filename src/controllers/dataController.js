// controllers/dataController.js
const Data = require('../models/Data');
let addCount = 0;
let updateCount = 0;
exports.addData = async (req, res) => {
    try {
        await Data.deleteMany({});
        const newData = new Data(req.body);
        await newData.save();
        res.json({ message: 'Data added successfully' });
        addCount++;
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add data' });
    }
};

exports.updateData = async (req, res) => {
    try {
        const { id } = req.params; 
        const newData = req.body;
        const existingData = await Data.findById(id);
        if (!existingData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        existingData.name = newData.name;
        existingData.description = newData.description;
        await existingData.save();

        res.json({ message: 'Data updated successfully' });
        updateCount++; 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update data' });
    }
};

exports.getAllData = async (req, res) => {
    try {
        const allData = await Data.find();
        res.json(allData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to retrieve data' });
    }
};

exports.getCount = (req, res) => {
    res.json({ addCount, updateCount });
};
