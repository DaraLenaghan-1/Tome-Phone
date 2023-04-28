import express from 'express'

export const keyRouter = express.Router()
// /api/keys/paypal
keyRouter.get('/paypal', (req, res) => {
  res.json({ clientId: process.env.PAYPAL_CLIENT_ID || 'AVJUktWHjxmjSPaCdi8ci-Zp-sSuG71IvZLCn8tiPp3YT3BCpKHoQ91VfSfdt5p8l2py3jyG4xJO3vOa' })
})