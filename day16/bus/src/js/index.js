class Bus {
  constructor(direction, seats, passengers) {
    this.direction = direction;
    this.seats = seats;
    this.passengers = passengers;
    this.stations = ["Praha", "Jihlava", "Brno", "Břeclav", "Vídeň"];
    this.lastStation = 0;
  }

  current() {
    return this.stations[this.last_station];
  }
  next() {
    this.lastStation += direction;
    if (this.lastStation < 0) {
      this.lastStation = 0;
    }
    if (this.lastStation === this.stations.length) {
      this.lastStation = this.stations.length - 1;
    }
  }

  board(count) {
    this.passengers += count;
    if (this.seats < this.passengers) {
      this.passengers = this.seats;
    }
  }

  deboard(count) {
    this.passengers -= count;
    if (this.passengers < 0) {
      this.passengers = 0;
    }
  }
}
