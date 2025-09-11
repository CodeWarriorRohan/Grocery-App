import fastifySession from "@fastify/session";
import connectMongoDBSession from "connect-mongodb-session";
import { Admin } from "../models/user.js";

export const PORT = process.env.PORT || 3000;
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD;

// Initialize MongoDB store for sessions
const MongoDBStore = connectMongoDBSession(fastifySession);

export const sessionStore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions",
});

sessionStore.on("error", (error) => {
  console.error("Session store error:", error);
});

// Example authenticate function
export const authenticate = async (email, password) => {

    // UNCOMMENT THIS TO CREATING ADMIN FIRST TIME

  if (email && password) {
    if (email === "rohansinodhiya@gmail.com" && password === "rna@2004") {
      return Promise.resolve({ email, password });
    } else {
      return null;
    }
  }

  // UNCOMMENT THIS WHEN ALREADY CREATED ADMIN ON DATABASE

//    if (email && password) {
//     const user = await Admin.findOne({ email });
//     if (!user) {
//       return null
//     }
//     if(user.password===password){
//         return Promise.resolve({ email: email, password: password});
//     } 
//     else {
//       return null;
//     }
//   }

  return null;

};
