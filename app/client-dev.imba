
import './client'

const pollReload = do |q| do
	const res = await fetch("/reload?q={q}")	
	const json = await res.json()
	const reload = json.reload == true
	if reload
		window.location = window.location.pathname + "?reloaded={q}"
 
const setIntervalPoll = do |q| setInterval pollReload(q), 500
 
setTimeout((do 
	const res = await fetch('/reload')	
	const json = await res.json()
	const q = json.q
	setIntervalPoll q
), 200)
