
const fs = require("fs")
const path = require("path")

const getAllFiles = do(dirPath, arrayOfFiles)
	const files = fs.readdirSync(dirPath)

	arrayOfFiles = arrayOfFiles || []

	files.forEach(do(file)
		if (fs.statSync(dirPath + "/" + file).isDirectory())
			arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
		else
			arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
	)

	return arrayOfFiles

import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { etag } from 'hono/etag'
import { serveStatic } from 'hono/serve-static'
var mime = require('mime-types')

const app = new Hono()
  
app.use('*', logger())
app.use('*', cors())
# app.use('*', etag())

app.get '/reload', do |c| 
	const file = fs.statSync(path.join(__dirname, "/", 'server.bun.js'))
	const query = c.req.query('q')
	console.log "{file.mtime_ms}", query
	c.json(
		reload: "{file.mtime_ms}" !== query
		q: file.mtime_ms
	)

app.get '*', do |c| 
	const file = getAllFiles('public').find(do |match| c.req.url.match match.split('/')[-1])
	const result = new Response(Bun.file(file || "./public/index.html"))
	const body = await result.text()
	file ? c.body(body, 200, {'content-type': mime.lookup(file) }) : c.html(body)


export default {
	port: Bun.env.PORT || 3000
	fetch: do |req|  
		app.fetch req
}