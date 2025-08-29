function customRender(reactElement, Container) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("Target", reactElement.props.Target);

  Container.appendChild(domElement);*/

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  Container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    Target: "_blank",
  },
  children: "Click me to  visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
