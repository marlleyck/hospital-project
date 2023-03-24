import { JwtPayload } from "jsonwebtoken";
import { TokenType } from "./TokenType";

declare global {
  namespace Express {
    interface Request {
      tokenDecoded: TokenType;
    }
  }
}
