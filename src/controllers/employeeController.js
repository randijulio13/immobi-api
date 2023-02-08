const { Employee, Role } = require('../models')
const { isEmptyObject } = require('../helpers')

const get = async (req, res) => {
    let data = await Employee.findAll({
        attributes: ['id', 'name', 'id_jabatan', 'age', 'gender', 'tanggal_lahir', 'alamat'],
        include: {
            model: Role,
            attributes: ['nama_jabatan']
        }
    })
    res.status(200).json({
        message: "OK",
        data
    })
}

const create = async (req, res) => {
    try {
        console.log('body'+req.body);
        await Employee.create(req.body);
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
    if (req.body.name) update.name = req.body.name
    if (req.body.id_jabatan) update.id_jabatan = req.body.id_jabatan
    if (req.body.age) update.age = req.body.age
    if (req.body.gender) update.gender = req.body.gender
    if (req.body.tanggal_lahir) update.tanggal_lahir = req.body.tanggal_lahir
    if (req.body.alamat) update.alamat = req.body.alamat

    let data = await Employee.findOne({ where: { id } })
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

    await Employee.destroy({
        where: {
            id
        }
    })

    return res.status(200).json({ message: 'Data deleted' })
}

module.exports = { get, create, update, destroy }