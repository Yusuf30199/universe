version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - '4000:4000'
    volumes:
      - ./backend:/app
    command: npm run start:dev
  frontend:
    build: ./frontend
    ports:
      - '3000:3000'
    volumes:
      - ./frontend:/app
    command: npm run dev
