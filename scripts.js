
document.addEventListener('DOMContentLoaded', () => {
  const pastVideos = [
    {
      title: "Top 3 AI Tools That Feel ILLEGAL",
      link: "video-top-3-tools.html"
    },
    {
      title: "Hidden VS Code Tool",
      link: "video-hidden-vscode-tool.html"
    }
    {
    title: "AI Critical Thinking Prompt",
    link: "ai-prompt.html"
  }
  ];

  const container = document.getElementById("pastVideos");

  pastVideos.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <h3>${video.title}</h3>
      <a href="${video.link}" class="cta-btn">Watch Now</a>
    `;
    container.appendChild(card);
  });
});
