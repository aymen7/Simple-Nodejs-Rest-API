# Simple REST-API with nodejs

## **How to install**

1. run  `npm install` to install the packages needed.
2. run `node server.js` to create a local node server.
3. make your **http request**.
   
## **API endpoints**

**base url:  http://127.0.0.1:3000/api**
<table border='2'>
    <tr>
        <th>method/type</th>
        <th>path</th>
        <th>Parameters</th>
        <th>Responses</th>
        <th>Description</th>
    </tr>
        <tr>
        <td>POST</td>
        <td>/register</td>
        <td>user object ex: {"name":"dummy name","username":"dummy username","email":"dummyemail@gmail.com","password":"mypassword"}</td>
        <td>200 status, registered user</td>
        <td>this path is for registering a user to the db </td>
    </tr>
</table>