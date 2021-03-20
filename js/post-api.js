"use strict"

const tbody = document.getElementById('post');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
        for (const post of posts) {
            let row = `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>`;
            // tbody.innerHTML = tbody.innerHTML + row;
            tbody.innerHTML += row;
        }
    })


/**
 * API 
 * - server code which takes request from user(client) and send response to user(client)
 * - it can communicate in either JSON/XML format
 * - it works on HTTP methods (verbs), example: GET, POST, PUT, DELETE
 * - it sends HTTP response code/status code, example: 
 *      1xx - Information
 *      2xx - Success (200 - OK, 201 - Created), 
 *      3xx - Redirects, 
 *      4xx - Client errors (400 - Bad Request, 401 - Unauth, 403 - Forbidden, 404 - Not Found, 409 - Conflict), 
 *      5xx - Server errors (500 - Internal server error)
 * - you can use javascript fetch API to hit the API endpoints
 * 
 * 
 * AJAX - Asynchronous JavaScript and XML
 * - to make asynchronous calls to server in order to bring data without loading entire page
 * - previously data was in format of XML but now a days JSON is used
 * - in JS to make AJAX call we use
 *  - XHR - XMLHttpRequest
 *  - fetch API
 * 
 * REST API - Representational state transfer
 * REST determines how the API looks like. It stands for “Representational State Transfer”. It is a set of rules that developers follow when they create their API. 
 * https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/
 */