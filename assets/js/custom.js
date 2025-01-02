const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

$(window).on("load resize", function() {
  if (this.matchMedia("(max-width: 991px)").matches) {
    $dropdown.click(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  }
  
});

// Search Icon
document.getElementById('search-icon').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  const searchInputContainer = document.getElementById('search-input-container');
  searchInputContainer.style.display = searchInputContainer.style.display === 'none' ? 'block' : 'none';
  document.getElementById('search-input').focus(); // Focus on the input field
});

document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const query = document.getElementById('search-input').value.toLowerCase();
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = ''; // Clear previous results
  resultsContainer.style.display = 'block'; // Show results container

  // Example event data (replace with actual data)
  const events = [
      { name: 'Business Conference', link: 'Building Sustainable.html' },
      { name: 'Tech Conference', link: 'Tech-Event.html' },
      { name: 'Festival Event ', link: 'Content Creators Summit 2024.html' },
      { name: 'Free Event', link: 'Free-event.html' },
      { name: 'Parenting Seminars', link: 'Parenting Seminars.html' },
      { name: 'Healthcare Conferences', link: 'Healthcare Conferences.html' },
      { name: 'Educational Webinars', link: 'Educational Webinars.html' },
      { name: 'Real Estate Seminars', link: 'Real Estate Seminars.html' }
  ];

  const filteredEvents = events.filter(event => event.name.toLowerCase().includes(query));

  if (filteredEvents.length > 0) {
      filteredEvents.forEach(event => {
          const linkElement = document.createElement('a');
          linkElement.href = event.link;
          linkElement.textContent = event.name;
          linkElement.target = "_blank"; // Open link in a new tab
          resultsContainer.appendChild(linkElement);
      });
  } else {
      const noResults = document.createElement('div');
      noResults.textContent = 'No events found.';
      noResults.className = 'no-results';
      resultsContainer.appendChild(noResults);
  }
});


//Cart PAGE//

      
      function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cartItems.length; // Count the number of unique items
    document.getElementById('cart-count').innerText = cartCount; // Update the cart count display
}

// Call updateCartCount on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
