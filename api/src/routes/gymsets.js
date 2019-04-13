import { Router } from 'express'

const router = Router();

router.get('/:userId', (req, res) => {
    return res.send(req.context.models.gymsets[req.params.userId]);
})

router.get('/', (req, res) => {
    const gymsets = req.context.models.gymsets[req.query.userId];
    for (let i = 0; i < gymsets.length; i++) {
        const set = gymsets[i];
        if (set.weekday === req.query.day) {
            return res.send(set);
        }
    }
    return res.status(404).send("No exercise found.");
})

export default router;