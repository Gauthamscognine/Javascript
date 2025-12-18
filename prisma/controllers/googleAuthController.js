import axios from "axios";
import qs from "qs";
import jwt from "jsonwebtoken";
import prisma from "../PrismaClient.js";

// 1️⃣ Redirect user to Google //auth/google
export const googleLogin = (req, res) => {
  const redirectUrl =
    "https://accounts.google.com/o/oauth2/v2/auth" +
    `?client_id=${process.env.GOOGLE_CLIENT_ID}` +// clinet id that he bleonsto u r app
    `&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}` +// after finish login come back to this url/callback
    `&response_type=code` +// temporary authorixation
    `&scope=openid email profile`;// this si requested from google 

  res.redirect(redirectUrl);
};

// 2️⃣ Google redirects back here
export const googleCallback = async (req, res) => {///auth./google/callback
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({ message: "Authorization code missing" });
    }

    // 3️⃣ Exchange code for Google access token
    const tokenResponse = await axios.post(
      "https://oauth2.googleapis.com/token",
      qs.stringify({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type: "authorization_code"
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );

    const googleAccessToken = tokenResponse.data.access_token;

    // 4️⃣ Fetch user profile from Google
    const profileResponse = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`
        }
      }
    );

    const { id, name, email } = profileResponse.data;

    // 5️⃣ Find or create user in DB
    let user = await prisma.staff.findUnique({
      where: { email }
    });

    if (!user) {
      user = await prisma.staff.create({
        data: {
          name,
          email,
          providerId: id,        // 👈 renamed column
          authProvider: "GOOGLE"
        }
      });
    }

    // 6️⃣ Issue YOUR access token
    const accessToken = jwt.sign(
      { userId: user.id , roleid:user.roleid },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_EXPIRES }
    );

    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.REFERESH_TOKEN_SECRET,
      { expiresIn: process.env.REFERESH_EXPIRES }
    );

    // 7️⃣ Save refresh token in DB
    await prisma.staff.update({
      where: { id: user.id },
      data: { refrestToken:refreshToken }
    });

    // 8️⃣ Redirect to frontend with token
    res.redirect(
      `http://localhost:3000/staff?token=${accessToken}`
    );

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Google authentication failed" });
  }
};
