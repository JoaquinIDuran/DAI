import { Router } from "express";
import PizzaService from "../services/pizzas-services.js";

const router = Router()
const srv = new PizzaService();

// router.get('', async (req, res)=>{
//     const pizza = await pizzaService.getAll();
//     return res.status(200).json
// })

router.get('/', async (req, res) => {
    console.log('router.get');
    let datos = await srv.getAll();
    res.send(datos);
  })

  router.get('/:id', async (req, res) => {
    console.log('router.get');
    let datos = await srv.getById(req.params['id']);
    res.send(datos);
  })

  router.delete('/:id', async (req, res) => {
    console.log('router.get');
    let datos = await srv.deleteById(req.params['id']);
    res.send(datos);
  })

//   router.post('/', async (req, res) => {
//     console.log('router.get');
//     let datos = await srv.insert(req.body);
//     res.send(datos);
//   })
/*
router.get('/api/pizzas', srv.getAll)
router.get('/api/pizzas/:Id', srv.getById)
router.post('/api/pizzas', srv.insert)
router.put('/api/pizzas', srv.update)
router.delete('/api/pizzas/:Id', srv.deleteById)
*/
export default router;