const { Department, Role } = require('../models')


const get = async (req, res) => {
    let data = await Department.findAll({ attributes: ['id', 'nama_department'] })
    res.status(200).json({
        message: "OK",
        data
    })
}

const create = async (req, res) => {
    const { nama_department } = req.body;
    try {
        let data = await Department.create({ nama_department });
        return res.status(201).json({
            message: "Data created",
            data
        });
    } catch (err) {
        return res.status(500).json(err);
    }
}

const update = async (req, res) => {
    const { nama_department } = req.body
    const { id } = req.params

    let data = await Department.findOne({ where: { id } })
    if (!data) {
        return res.status(404).json({
            message: 'Data not found'
        })
    }
    await data.update({ nama_department })
    return res.status(200).json({
        message: 'Data updated'
    })
}

const destroy = async (req, res) => {
    const { id } = req.params

    await Department.destroy({
        where: {
            id
        }
    })

    return res.status(200).json({ message: 'Data deleted' })
}

module.exports = { get, create, update, destroy }