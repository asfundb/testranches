
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(
    ".reviews-slider__reviews-container",
  );
  const reviewWidth =
    container.firstElementChild.getBoundingClientRect().width + 40; // includes margin

  // Calculate the total width of the reviews
  const totalWidth = reviewWidth * container.children.length;

  // Duplicate reviews to create seamless looping
  container.innerHTML += container.innerHTML;

  // Set the width of the container to accommodate duplicated reviews
  container.style.width = `${totalWidth}px`;

  // Function to continuously scroll the reviews
  function scrollReviews() {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = elapsed / duration;

    // Calculate the position based on progress
    let newPosition = progress * (totalWidth / 2);

    // Smoothly scroll the container
    container.style.transform = `translateX(-${newPosition}px)`;

    // Loop the animation
    if (elapsed < duration) {
      requestAnimationFrame(scrollReviews);
    } else {
      // Reset the animation when it's finished
      startTime = Date.now();
      requestAnimationFrame(scrollReviews);

      // Reset position to original
      container.style.transition = "none";
      container.style.transform = "translateX(0)";
      setTimeout(() => {
        container.style.transition = `transform ${duration}ms linear`;
      }, 50);
    }
  }

  // Set initial start time and duration
  let startTime = Date.now();
  const duration = 50000; // Adjust duration for the desired scroll speed

  // Start the animation
  requestAnimationFrame(scrollReviews);
});
