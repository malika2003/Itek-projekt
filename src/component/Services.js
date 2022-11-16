import React from "react";
import axios from "axios";
 export const postRequest = (text) => {
    const token = '5661523969:AAEEVKKPh7HA9bRvGJ2q5QDbc0t0zSNdoVw';
    const chat_id = '1034948707';
    const api = `https://api.telegram.org/bot${token}/sendMessage`;
    return axios.post(api, {
        parse_mode: 'HTML',
        text: `Имя: ${text.name}\n\Номер телефона: ${text.number}`,chat_id
    })
}