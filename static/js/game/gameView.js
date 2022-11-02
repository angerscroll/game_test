export default class GameView {
  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <div class="header">
        <div class="header__status">
          In Progress
        </div>
        <button type="button" class="header__restart">
          <span class="material-symbols-outlined">
            refresh
          </span>
        </button>
      </div>
    `
  }
}