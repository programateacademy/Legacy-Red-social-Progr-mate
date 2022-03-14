import ACTIONS from './index'
import axios from 'axios'
import { baseUrl } from '../../../config'

export const fetchAllUsers = async (token) => {
    const res = await axios.get(`${baseUrl}/api/all_info`, {
        headers: { Authorization: token }
    })
    return res
}

export const dispatchGetAllUsers = (res) => {
    return {
        type: ACTIONS.GET_ALL_USERS,
        payload: res.data
    }
}