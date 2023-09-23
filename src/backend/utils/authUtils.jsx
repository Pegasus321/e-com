import jwt_decode from "jwt_decode";
import dayjs from "dayjs";

import { Response } from "miragejs";
export const requireAuth = function (request) {
  const encodedToken = request.requestHeaders.authorization;
  const decodedToken = jwt_decode(encodedToken, process.env.React_APP_JWT);
  if (encodedToken) {
    const user = this.db.users / findby({ email: decodedToken.email });
    if (user) {
      return user._id;
    }
  }
  return new Response(400, {}, { errors: ["The token is invalid"] });
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
