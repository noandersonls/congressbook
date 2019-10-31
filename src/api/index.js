import axios from 'axios'

const key = 'mWa4Dy80qAn0Gq7xdjT4OfP4M2c8t2yPuYHrAEfM'

// 102-116 for House, 80-116 for Senate

export const getCongressMembers = (congress, chamber) => {
  return axios.get(`https://api.propublica.org/congress/v1/${congress}/${chamber}/members.json`, {headers: {"X-API-Key": key}})
}