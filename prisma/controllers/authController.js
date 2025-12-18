import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import Joi from "joi"
import prisma from "../PrismaClient.js";
const registerSchema = Joi.object({
    name:Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()

})

const loginschema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})



export const register = async(req,res)=>{
    const {error,value} = registerSchema.validate(req.body);

    if(error){
        return res.status(400).json({message:"enter a valid schema "});
    }

    const { name, email, password } = value;
    try{
        const hashed = await bcrypt.hash(password,10);
        const user = await prisma.staff.create({
            data: {
                name,
                email,
                password: hashed
            }
        });

        res.status(201).json({message:"user updated succesfully",
        })

    }catch (error) {
    res.status(500).json({ error: error.message });
  }

}




export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.staff.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(// used to create an jwt token , contins paylod , secret and options 
      { userId: user.id, email: user.email , roleid:user.roleid},
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    const accessToken = jwt.sign(
      {userId:user.id},
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: process.env.ACCESS_EXPIRES}
    );

    const refereshToken = jwt.sign(
      {userId:user.id},
      process.env.REFERESH_TOKEN_SECRET,
      {expiresIn: process.env.REFERESH_EXPIRES}
    );

    await prisma.staff.update({
      where:{id:user.id},
      data:{
        refrestToken:refereshToken
      }
    });


    res.json({
      message: "Login successful",
      token,
      accessToken,
      refereshToken
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




export const refreshAccessToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token missing" });
  }

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFERESH_TOKEN
    );

    const user = await prisma.staff.findUnique({
      where: { id: decoded.userId }
    });

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    const newAccessToken = jwt.sign(
      { userId: user.id },
      process.env.ACCESS_TOKEN,
      { expiresIn: process.env.ACCESS_EXPIRES }
    );

    res.json({ accessToken: newAccessToken });

  } catch (error) {
    return res.status(403).json({ message: "Refresh token expired" });
  }
};


export const logout = async (req, res) => {
  await prisma.staff.update({
    where: { id: req.user.userId },
    data: { refrestToken: null }
  });

  res.json({ message: "Logged out successfully" });
};




// in post man directly we send right , in real life we send using 
// fetch("http://localhost:3000/staff?page=1&limit=5", {
//   headers: {
//     Authorization: "Bearer YOUR_JWT_TOKEN_HERE"
//   }
// })
// .then(res => res.json())
// .then(data => console.log(data));

// jwt is stored in localstorage , as we have to access it for many days kind of thing ...

