function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// Optional: Add subtle motion to blobs (if needed)
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  const blob1 = document.querySelector('.blob1');
  const blob2 = document.querySelector('.blob2');

  if (blob1 && blob2) {
    blob1.style.transform = `translate(${x}px, ${y}px)`;
    blob2.style.transform = `translate(${x * -1}px, ${y * -1}px)`;
  }
});
