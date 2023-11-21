const style = document.createElement("style")

style.innerHTML = `
@keyframes pulse {
	0% {
		transform: scale(1)
	}
	
	50% {
		transform: scale(1.1);
	}
	
	100% {
		transform: scale(1)
	}
}

@keyframes spin {
	from {
		transform: rotate(360deg)
	}
	
	to {
		transform: rotate(0deg);
	}
}

body * {
	animation: pulse 3s linear infinite;
}

body {
	animation: spin 3s linear infinite;
}
`

if (window.location.href.includes(".com")) {
  document.head.appendChild(style)
}
