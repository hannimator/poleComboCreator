const PoleMove = require('../models/polemove-model')

createPoleMove = (req, res) => {
    const body = req.body

    const polemove = new PoleMove(body)

    console.log(polemove);

    if (!polemove) {
        return res.status(400).json({ success: false, error: err })
    }

    polemove
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: polemove._id,
                message: 'Pole move added to DB!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Pole move not added!',
            })
        })
}

updatePoleMoveById = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    PoleMove.findOne({ _id: req.params.id }, (err, polemoves) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Pole move not found!',
            })
        }
        polemoves.name = body.name
        polemoves.isStatic = body.isStatic
        polemoves.isSpinny = body.isSpinny
        polemoves.difficultyLevel = body.difficultyLevel
        polemoves
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: polemoves._id,
                    message: 'pole move updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'pole move not updated!',
                })
            })
    })
}

deletePoleMoveById = async (req, res) => {
    await PoleMove.findOneAndDelete({ _id: req.params.id }, (err, polemoves) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!polemoves) {
            return res
                .status(404)
                .json({ success: false, error: `pole move not found` })
        }

        return res.status(200).json({ success: true, data: polemoves })
    }).clone().catch(err => console.log(err))
}


getMoveByPoleSettingStatic = async (req, res) => {
    await PoleMove.find({ isStatic: true }, (err, polemoves) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!polemoves) {
            return res
                .status(404)
                .json({ success: false, error: `No static pole moves found` })
        }
        return res.status(200).json({ success: true, data: polemoves })
    }).clone().catch(err => console.log(err))
}


getMoveByPoleSettingSpinny = async (req, res) => {
    await PoleMove.find({ isSpinny: true }, (err, polemoves) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!polemoves.length) {
            return res
                .status(404)
                .json({ success: false, error: `No spinning pole moves found` })
        }
        return res.status(200).json({ success: true, data: polemoves })
    }).clone().catch(err => console.log(err))
}

getMoveByName = async (req, res) => {
    await PoleMove.findOne({ name: req.params.name }, (err, polemoves) => {
        console.log(req.params.name)
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!polemoves) {
            return res
                .status(404)
                .json({ success: false, error: `No spinning pole moves found` })
        }
        return res.status(200).json({ success: true, data: polemoves })
    }).clone().catch(err => console.log(err))
}


getPoleMoves = async (req, res) => {
    await PoleMove.find({}, (err, polemoves) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!polemoves.length) {
            return res
                .status(404)
                .json({ success: false, error: `Pole move not found` })
        }
        return res.status(200).json({ success: true, data: polemoves })
    }).clone().catch(err => console.log(err))
}

getMoveById = async (req, res) => {
    await PoleMove.findOne({ _id: req.params.id }, (err, polemoves) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!polemoves) {
            return res
                .status(404)
                .json({ success: false, error: `pole moves not found` })
        }
        return res.status(200).json({ success: true, data: polemoves })
    }).clone().catch(err => console.log(err))
}

module.exports = {
    createPoleMove,
    updatePoleMoveById,
    deletePoleMoveById,
    getPoleMoves,
    getMoveByPoleSettingStatic,
    getMoveByPoleSettingSpinny,
    getMoveByName,
    getMoveById,
}