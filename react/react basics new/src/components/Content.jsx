import './content.css'

let x=<div>
<h1>good morning</h1>
<p>hello my name is shubham</p>
<input type="text" ></input>
<br/>
</div>

function Content() {
return <div className="content">
  <h1>this is content</h1>
  </div>
}
//pass object to style
//remove hyphen and make it camelcase

function Footer() {
  let inlineStyle={
    color:"blue",
    fontSize:"20px"
  }
return <div>
  <h1 style={inlineStyle} >this is footer</h1>
  <p style={{color:"red",fontSize:"20px"}}>this is inline style example</p>
  </div>
}

export default Content
export {Footer,x}