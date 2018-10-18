window.onload = function() {
	
 
 var React = {
	 createElement: ( tagName, props, children = [] ) => {

			var elem = document.createElement(tagName);

			for (var i in props) {
				if ( i === 'style' && typeof props[i] === 'object'){
					for (var prop in props[i]){
						elem.style[prop] = props.style[prop];
					}					
				} else if (i === 'textContent') {
					elem.innerHTML = props[i];
				}
			}

			if (typeof children == 'string') {
				elem.appendChild(document.createTextNode(children));
			} else {
				for (var child of children){
					if (typeof child === 'string'){
						elem.appendChild(document.createTextNode(child));
					} else { elem.appendChild(child)}
					
				}
			}
			
			return elem;
		},
		render: (myTag , to) => {
			to.appendChild(myTag);
		}
	}

	const app =
		React.createElement('div', { style: { backgroundColor: 'red' } }, [
			React.createElement('span', undefined, 'Hello world'),
			React.createElement('br'),
			'This is just a text node',
			React.createElement('div', { textContent: 'Text content' }),
		]);
	React.render(
		app,
		document.body
	);



}