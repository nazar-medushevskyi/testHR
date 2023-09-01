# testHR


Once you've opened the project, open your terminal and run the following commands in order:
bash
Copy code
cd react-app
 npm install
 npm start
After that, a page will open in your browser with the results of the test tasks. Additionally, the errors you see are related to a CORS (Cross-Origin Resource Sharing) issue, and they are not caused by your code. The problem is that the 'https://api.entriwise.com' API server does not send the 'Access-Control-Allow-Origin' header, allowing requests from your domain (http://localhost:3000). This is a standard security measure to prevent requests from other domains.
