import "./css/index.css";
// import '../test/example.txt'



// var sock = new WebSocket("ws://localhost:6503", "json");
// document.getElementById("sendBtn").addEventListener(
//   "click",
//   function () {
//     console.log('xxxxxxxxxxx')
//     sock.send(JSON.stringify({ a: 1, b: 2 }));
//   },
//   false
// );
import { AppContainer } from 'react-hot-loader'; //设置这里
import React from 'react'
import ReactDom from 'react-dom'
 import Home from './components/Home.jsx'

// ReactDom.render(<Home/>,document.querySelector('#root'))


 
const render = (App) => {
  console.log('=======begin render======')
	ReactDom.render(
		<AppContainer>
			<App />
		</AppContainer>,
	document.getElementById('root')
	)
}
render(Home)
console.log('(module.hot',module.hot)

if (module.hot) {
  console.log('module.hot exist')
  module.hot.accept('./components/Home.jsx', () => {
    console.log('module.hot render')
      render(require('./components/Home.jsx').default)
  })
}
