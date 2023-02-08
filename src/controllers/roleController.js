const { Role, Department } = require('../models')
const { isEmptyObject } = require('../helpers')

const get = async (req, res) => {
    let data = await Role.findAll({
        attributes: ['id', 'id_department', 'nama_jabatan'],
        include: {
            model: Department,
            attributes: ['nama_department']
        }
    })
    res.status(200).json({
        message: "OK",
        data
    })
}

const create = async (req, res) => {
    const { nama_jabatan, id_department } = req.body;
    console.log(id_department);
    try {
        let data = await Role.create({ nama_jabatan, id_department });
        return res.status(201).json({
            message: "Data created",
        });
    } catch (err) {
        return res.status(500).json(err);
    }
}

const update = async (req, res) => {
    const { id } = req.params

    const update = {};
    if (req.body.nama_jabatan) update.nama_jabatan = req.body.nama_jabatan
    if (req.body.id_department) update.id_department = req.body.id_department

    console.log(update);

    if (isEmptyObject(update)) {
        return res.status(400).json({
            message: 'Name / Department ID cannot be empty'
        })
    }

    let data = await Role.findOne({ where: { id } })
    if (!data) {
        return res.status(404).json({
            message: 'Data not found'
        })
    }
    await data.update(update)
    return res.status(200).json({
        message: 'Data updated'
    })
}

const destroy = async (req, res) => {
    const { id } = req.params

    await Role.destroy({
        where: {
            id
        }
    })

    return res.status(200).json({ message: 'Data deleted' })
}

module.exports = { get, create, update, destroy }