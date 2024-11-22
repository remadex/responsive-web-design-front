const images = document.querySelectorAll("img[data-bidule]");
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        // entries === [img] (de mon foreach)
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                setTimeout(() => {
                    img.src = img.dataset.bidule;
                    observer.unobserve(img);
                }, 1000)
            }
        })
    })
    images.forEach(img => observer.observe(img));
} else {
    images.forEach(img => {
        img.src = img.dataset.bidule;
    })
}
