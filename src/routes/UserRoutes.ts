import { Router } from "express";
import UserController from "../controllers/UserController";
import { Schemas, velidateSchema } from "../middleware/VelidationSchema";

const router = Router();

router.post("/login", UserController.login);

router.post(
  "/create",
  velidateSchema(Schemas.user.create),
  UserController.createUser
);
router.get("/get/:id", UserController.readUser);
router.get("/get", UserController.readAllUser);
router.patch(
  "/update/:id",
  velidateSchema(Schemas.user.update),
  UserController.updateUser
);
router.delete("/delete/:id", UserController.deleteUser);

export = router;
