const express = require ("express")
const app = express()

const router = express.Router();

// For reading all
router.get('/', async (req, res, next) => {
    try{
        const items = await router.propfind({});
        res.json (items);
    } catch (error) {
        next (error);
    }
});

// For reading one
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await data.findOne({
            _id: id,
        });
        if (!item) return next();
        return res.json(item);
    } catch (error) {
        next(error);
    }
});

// For creating one
router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const value = await data
        const inserted = await data.insert(Value);
        res.json(inserted);
    } catch (error ) {
        next(error);
    }
});

// For updating one
router.put('/:id', (req, res, next) => {
    res.json ({
        message: 'hi UPDATE ONE'
    });
});

// For deleting one
router.delete('/id', (req, res, next) => {
    res.json ({
        message: 'hi DELETE ONE'
    });
});

router.use('/city', city)

module.exports = {router};

module.exports = app;
