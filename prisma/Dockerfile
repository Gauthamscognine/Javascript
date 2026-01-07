# 1. Base image
FROM node:20-alpine

# 2. Work directory inside container
WORKDIR /app
# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install


# 5. Copy rest of source code
COPY . .

# 6. Generate Prisma Client
# RUN npx prisma generate

# 7. Expose app port
EXPOSE 3000

# 8. Start server
CMD ["node", "server.js"]


