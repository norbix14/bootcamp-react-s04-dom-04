document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')
	let slides = Array.from(document.querySelectorAll('.my-slides'))

	let slideIndex = 1
	showSlides(slideIndex)

	const plusSlides = n => showSlides(slideIndex += n)

	document.querySelector('#prev').addEventListener('click', e => plusSlides(-1))

	document.querySelector('#next').addEventListener('click', e => plusSlides(1))

	function showSlides(n) {
	  let slidesLen = slides.length
	  if (n > slidesLen) {slideIndex = 1}
	  if (n < 1) {slideIndex = slidesLen}
	  slides.forEach(slide => slide.style.display = 'none')
	  slides[slideIndex-1].style.display = 'block'
	}

	window.addEventListener('scroll', controlScroll)

	function controlScroll() {
		const st = document.body.scrollTop || document.documentElement.scrollTop
		const display = toTop.style.display
		const cl = toTop.classList
		if (st > 300) {
			toTop.style.display = 'block'
			cl.remove('hide')
			cl.add('show')
			setTimeout(() => {cl.add('rotate')}, 2100)
	  } else {
			if (display === 'block') {
				cl.remove('show')
				cl.add('hide')
				setTimeout(() => {
					cl.remove('rotate')
					toTop.style.display = 'none'
				}, 2000)
			}
	  }
	}

	toTop.addEventListener('click', () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})

})
