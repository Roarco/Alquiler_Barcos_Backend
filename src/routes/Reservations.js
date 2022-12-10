const express = require("express");
const router = express.Router();
const ReservationServices = require("../services/Reservations");
const validatorHandler = require("../middlewares/validator");
// const { createReservationSchema, updateReservationSchema, getReservationSchema } = require("../schemas/Reservations");

// const service = new ReservationServices();

// //GET
// router.get("/", async(req, res, next) => {
//     try {
//         const reservartion = await service.getReservations();
//         console.log(reservartion);
//     }catch(err) {
//         next(err);
//     }
// });

// //GET by ID
// router.get(
//     "/:id",
//     validatorHandler(getReservationSchema, "params"),
//     async (req, res, next) => {
//         try {
//             const { id } = req.params;
//             const reservation = await service.getReservation(id);
//             res.json(reservation);
//         } catch (err) {
//             next(err);
//         }
//     }
// );


// //POST
// router.post("/",
//     validatorHandler(createReservationSchema, "body"),
//     async (req, res, next) => {
//         try {
//             const body = req.body;
//             const newReservation = await service.createReservation(body);
//             res.status(201).json(newReservation);
//         } catch (err) {
//             next(err);
//         }
//     });



// //PUT
// router.put(
//     "/:id",
//     validatorHandler(getReservationSchema, "params"),
//     validatorHandler(updateReservationSchema, "body"),
//     async (req, res, next) => {
//         try {
//             const { id } = req.params;
//             const body = req.body;
//             const reservation = await service.updateReservation(id, body);
//             res.json(reservation);
//         } catch (err) {
//             next(err);
//         }
//     }
// );


// //DELETE
// router.delete("/:id",
//     validatorHandler(getReservationSchema, "params"),
//     async (req, res, next) => {
//         try {
//             const { id } = req.params;
//             const reservation = await service.deleteReservation(id);
//             res.json(reservation);
//         } catch (err) {
//             next(err);
//         }
//     });


module.exports = router;