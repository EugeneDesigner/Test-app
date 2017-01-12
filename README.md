# Test App


##Preview
---

The app was written according to the instructions that were sent to me. Including the fact that it was said implicitly to me that *'I should finish the application as fast as I can'*, I did not spend time on the additional but still relevant stuff like tests, animations (for better UX), have not followed all eslint and stylint instructions (it was not the main focus of the task). That being said, I have still added couple of additional functionalities like **'filter by transfer price' or 'custom search'** as it is logical for the type of JSON data I was provided with, as well as developed the interactive **Redux store** for future scalability reasons (if more players or teams are going to be added)


##Stages of development
---

1. On the initial phase I briefly outlined on paper the future structure of my React application. React was chosen due to the fact that
   * I like working with this framework
   * It is easy to maintain manual control and modality of the application, which in terms of the task I thought was relevant.

 For me it appeared at first little problematic how to filter the JSON data, as the costs could have been quite high in terms of time and result if I were not thoughtful enough. In the end, I decided to go with the **Array.prototype.filter()** function, as it was the most acceptable way to loop through arrays with multiple parameters and maintain some integrity of functional programming. In the future, I think that table format or key-object binding of JSON file would make it much easier to work with data without bringing more hassle 'into the house'.

2. On the second phase I mainly worked with the routine task of building the application - *creating the structure, adding server-side rendering for the future deployment, configuring webpack* and so on. Also I worked on the algorithm of extracting the right data from the JSON file, leaving Redux and AJAX for later. In the end, this phase took the most time, as there were a lot of small errors, uncertainties, or questions, that did not make the process any faster. However, I was able to see how to make the search more effective in terms of React rendering, or, for example, where and how to bind asynchronous JS with the main logic of my application (**componentDidMount()**).

3. Here I built the Redux environment, including both for **Development** and **Production** (DevTools, logger). Also I experimented with the dispatch function and axios for loading the data from the outside source. I think that the result is very straight-forward and logical.

4. In the end I styled the application according to the sent Photoshop file, adding some of the features that made the end result stand out a bit (logo, list outline etc.). I am used to SASS, so I used this technology and I am happy with it. I did not divide the .scss file because it is small and the huge amount of files on this stage would make it even harder to manipulate quick changes to the application.


##Deployment
---

**Nginx case**: As I use React Router, you should use use the [`try_files` directive](http://nginx.org/en/docs/http/ngx_http_core_module.html#try_files):

```
server {
  ...
  location / {
    try_files $uri /index.html;
  }
}
```

To start the application:

  ```
  npm i  
```

```
  npm run postinstall
```

```
  npm start
  ```


##Demo

I also wanted to test the application, so I published a small demo on [Heroku](http://testyaroshenko.herokuapp.com)
