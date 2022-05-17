const express = require('express')

const PoleMoveCtrl = require('../controllers/poleMove-ctrl')

const router = express.Router()

router.post('/polemove', PoleMoveCtrl.createPoleMove)
router.put('/polemove/id/:id', PoleMoveCtrl.updatePoleMoveById)
router.delete('/polemove/id/:id', PoleMoveCtrl.deletePoleMoveById)
router.get('/polemoves/static', PoleMoveCtrl.getMoveByPoleSettingStatic)
router.get('/polemoves/spinny', PoleMoveCtrl.getMoveByPoleSettingSpinny)
router.get('/polemoves', PoleMoveCtrl.getPoleMoves)
router.get('/polemove/name/:name', PoleMoveCtrl.getMoveByName)
router.get('/polemove/id/:id', PoleMoveCtrl.getMoveById)

module.exports = router