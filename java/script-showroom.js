document.addEventListener('DOMContentLoaded', () => {
  const prev = document.getElementById('prev-btn');
  const next = document.getElementById('next-btn');
  const list = document.getElementById('item-list');
  const itemWidth = 309;
  const padding = 8;

  prev.addEventListener('click', () => {
      list.scrollLeft -= (itemWidth + padding);
  });

  next.addEventListener('click', () => {
      list.scrollLeft += (itemWidth + padding);
  });
});
