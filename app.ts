import express from "express";

export const app = express()
import cors from 'cors'

app.use(cors())
app.set('trust proxy', true)
app.use(express.json())

app.use('/api/blogs', blogsRouter)