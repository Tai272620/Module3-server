import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


module.exports = {
    register: async (newUser) => {
        try {
            let user = await prisma.users.create({
                data: newUser
            })

            return {
                status: true,
                message: "Register OK!",
                data: user
            }
            
        }catch(err) {
            console.log("err", err)
            return {
                status: false,
                message: "Lỗi!"
            }
        }
    },
    find: async () => {
        try {
            let users = await prisma.users.findMany();
            return {
                status: true,
                message: "Find All OK!",
                data: users
            }
            
        }catch(err) {
            console.log("err", err)
            return {
                status: false,
                message: "Lỗi!"
            }
        }
    }
}