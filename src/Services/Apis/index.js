import React from 'react';
import {BASE_URL, SITE_URL} from '../Constants';

export const ApiCall = async ({params, route, verb}) => {
  try {
    const url = `${SITE_URL}/${route}`;
    let options = {
      method: verb,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
      // body: params,
    };

    let response = await fetch(url, options);
    if (response) {
      return await response.json();
    } else {
      return response;
    }
  } catch (e) {
    return e.toString();
  }
};


