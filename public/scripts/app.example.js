class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.tipeDriver = document.getElementById("TipeDriver")
    this.tanggal = document.getElementById("Tgl")
    this.waktu = document.getElementById("wkt")
    this.penumpang = document.getElementById("penumpang")

  }
  async init() {
    await this.load();
    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }
  run = () => {
    let child = this.carContainerElement.firstElementChild;
    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
    Car.list.forEach((car) => {
     
      let dateTime = this.tanggal.value + "T" + this.waktu.value;
      let formdate = Date.parse(dateTime);
      let waktu = Date.parse(car.availableAt);
      let penumpang = this.penumpang.value;
     
      let driver = this.tipeDriver.value;
      if(driver == "true"){
        driver = true;
      }else{
        driver = false;
      }
      console.log(dateTime)
      
      if (
        car.available == driver && waktu >= formdate && car.capacity >= penumpang
      ) {
        const node = document.createElement("div");
        node.className = 'col-md-6 col-sm-12 col-lg-4'
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
