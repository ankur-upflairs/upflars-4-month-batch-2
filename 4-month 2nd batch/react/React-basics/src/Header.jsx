//export => 1.default export 2.named export
//1.default export
//export default is used to export a single value from a module

// let x=10;
// export default x;

// //2.named export
// //export is used to export multiple values from a module
// const y=20;
// const z=30;
// export {y,z};


export default function Header() {
    return (
      <div className='header'>
        <h1>Header </h1>
      </div>
    )
  }