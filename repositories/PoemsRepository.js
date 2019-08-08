import poems from "./poems";

class PoemsRepository {
  constructor(poems) {
    this.poems = poems;
  }

  getPoems() {
    return this.poems;
  }
}

const repo = new PoemsRepository(poems);

export default repo;