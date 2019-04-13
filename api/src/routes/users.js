import { Router } from 'express'

const router = Router();

router.get('/:userId', (req, res) => {
    return res.send(req.context.models.users[req.params.userId]);
})

export default router;