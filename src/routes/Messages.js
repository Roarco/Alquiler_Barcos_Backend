const express = require("express");
const router = express.Router();
const MessageServices = require("../services/Messages");
const validatorHandler = require("../middlewares/validator");
// const { createMessageSchema, updateMessageSchema, getMessageSchema } = require("../schemas/Messages");
// const service = new MessageServices();


// //GET
// router.get("/", async(req, res, next) => {
//     try {
//         const messages = await service.getMessages();
//         res.json(messages);
//     } catch (err) {
//         next(err);
//     }

// });

// //GET by ID
// router.get("/:id", (req, res) => 
// "/:id",
//     validatorHandler(getMessageSchema, "params"),
//     async (req, res, next) => {
//         try {
//             const { id } = req.params;
//             const message = await service.getMessage(id);
//             res.json(message);
//         } catch (err) {
//             next(err);
//         }
//     }
// );

// //POST
// router.post("/",
//     validatorHandler(createMessageSchema, "body"),
//     async (req, res, next) => {
//         try {
//             const body = req.body;
//             const newMessage = await service.createMessage(body);
//             res.status(201).json(newMessage);
//         } catch (err) {
//             next(err);
//         }
//     });



// //PUT
// router.put(
//     "/:id",
//     validatorHandler(getMessageSchema, "params"),
//     validatorHandler(updateMessageSchema, "body"),
//     async (req, res, next) => {
//         try {
//             const { id } = req.params;
//             const body = req.body;
//             const message = await service.updateMessage(id, body);
//             res.json(message);
//         } catch (err) {
//             next(err);
//         }
//     }
// );



// //DELETE
// router.delete("/:id",
//     validatorHandler(getMessageSchema, "params"),
//     async (req, res, next) => {
//         try {
//             const { id } = req.params;
//             const message = await service.deleteMessage(id);
//             res.json(message);
//         } catch (err) {
//             next(err);
//         }
//     });


module.exports = router;