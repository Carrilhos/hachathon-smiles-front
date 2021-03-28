import client from './client'

export const getChallenger = () => client.get('/challenge')