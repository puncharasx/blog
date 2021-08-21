import { Router } from 'express'
import { Insert, Update, Blog, Delete, BlogById } from '../../controllers/Blog/blogController'
const router = Router()

router.get('/',Blog)
router.get('/:id',BlogById)
router.post('/',Insert)
router.put('/:id',Update)
router.delete('/:id',Delete)

export default router