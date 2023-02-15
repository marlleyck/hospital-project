import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      tokenDecoded: JwtPayload | string;
    }
  }
}
