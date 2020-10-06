import {createElement, Component, render} from "./toy-react.js"

class MyComponent extends Component{

    constructor() {
        super();
        this.state = {
            a: 1,
            b: 2
        }
    }

    render() {
        return <div>
            <h1>my component</h1>
            <button onclick={() => { this.setState({ a: this.state.a + 1})}}>add</button>
            <span>{this.state.a.toString()}</span>
            <span>{this.state.b.toString()}</span>
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
</MyComponent>, document.body);


// document.body.appendChild(<MyComponent id="a" class="c">
//     <div>abc</div>
//     <div></div>
//     <div></div>
// </MyComponent>
// );


// window.a = <div id="a" class="c">
//     <div>abc</div>
//     <div></div>
//     <div></div>
// </div>

// document.body.appendChild(<div id="a" class="c">
//     <div>abc</div>
//     <div></div>
//     <div></div>
// </div>
// );

